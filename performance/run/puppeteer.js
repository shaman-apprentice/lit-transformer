const puppeteer = require('puppeteer');

/** @return [ metrics after DomContentLoaded, story switched, story switched back ]  */
module.exports.measure = async (url, metricNames, debug) => {
  const browser = await puppeteer.launch({ headless: !debug })
  
  const page = await browser.newPage()
  const client = await page.target().createCDPSession()
  await client.send('Performance.enable')
  await page.goto(url)

  const fstDataPoint = await getInitialMetrics(client, metricNames)
  const sndDataPoint = await switchDataAndGetMetrics(page, client, fstDataPoint, metricNames)
  const thrdDataPoint = await switchDataAndGetMetrics(page, client, sndDataPoint, metricNames)

  if (!debug) await browser.close()

  return [ fstDataPoint, sndDataPoint, thrdDataPoint ]
}

function getInitialMetrics(client, metricNames) {
  return client
    .send('Performance.getMetrics')
    .then(data => metricNames.reduce((acc, metricName) => {
      acc[metricName] = getMetricValue(data.metrics, metricName)
      return acc;
    }, { DomContentLoaded: getMetricValue(data.metrics, 'DomContentLoaded') }))
}

function switchDataAndGetMetrics(page, client, prevMetricValues, metricNames) {
  return page.evaluate(() => {
    return new Promise(resolve => {
      window.requestIdleCallback(resolve)
      document.getElementById('switch-short-story').click()
    })
  })
    .then(() => client.send('Performance.getMetrics'))
    .then(data => metricNames.reduce((acc, metricName) => {
      acc[metricName] = getMetricValue(data.metrics, metricName) - prevMetricValues[metricName]
      return acc;
    }, { DomContentLoaded: getMetricValue(data.metrics, 'DomContentLoaded') }))
}

function getMetricValue(metrics, name) {
  return metrics
    .find(m => m.name === name)
    .value
}