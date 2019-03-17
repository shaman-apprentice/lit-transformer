const { measure } = require('./puppeteer');

(async () => {
  const mustacheData = await measure('http://127.0.0.1:5500/performance/mustache.html')
  const litTransformerData = await measure('http://127.0.0.1:5500/performance/lit-transformer.html')

  const diff = Object.keys(litTransformerData).reduce((acc, key) => {
    acc[key] = mustacheData[key] - litTransformerData[key]
    return acc
  }, {})

  console.log(diff)
})()