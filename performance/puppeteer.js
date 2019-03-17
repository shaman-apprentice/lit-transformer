const puppeteer = require('puppeteer');

const { evaluate } = require('./metrics');

module.exports.measure = async (url, headless = true) => {
  const browser = await puppeteer.launch({ headless })
  
  const page = await browser.newPage()
  const client = await page.target().createCDPSession()
  await client.send('Performance.enable')
  await page.goto(url)

  const metrics1 = await fstMetricValues(client)
  const metrics2 = await sndMetricValues(page, client)

  await browser.close()

  return evaluate(metrics1, metrics2, [
    'ScriptDuration',
    'RecalcStyleDuration',
    'LayoutDuration',
  ])
}

const fstMetricValues = client =>
  client.send('Performance.getMetrics').then(d => d.metrics)

const sndMetricValues = (page, client) =>
  new Promise(async resolve => {
    await page.exposeFunction('resolve', resolve)
    await page.evaluate(() => {
      window.requestIdleCallback(window.resolve)

      document.getElementById('switch-short-story').click();
    })
  })
  .then(() => client.send('Performance.getMetrics'))
  .then(d => d.metrics)