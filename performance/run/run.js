const http = require('http')
const fs = require('fs')

const { measure } = require('./puppeteer')
const { saveData } = require('../results/resultWriter')

/* config */
const debug = false // if set to true puppeteer opens chromium not headless and keep the instance open after run
const metricNames = [ 'ScriptDuration', 'RecalcStyleDuration', 'LayoutDuration' ]
let times = debug ? 1 : 100; // how many times the tests are run

(async () => {
  const server = createStupidServer()
  server.listen(4242)

  const mustacheData = []
  const litTransformerData = []

  while (times--) {
    mustacheData.push(await measure('http://127.0.0.1:4242/performance/run/mustache.html', metricNames, debug))
    litTransformerData.push(await measure('http://127.0.0.1:4242/performance/run/lit-transformer.html', metricNames, debug))
  }

  saveData('./performance/results/mustache.json', mustacheData)
  saveData('./performance/results/lit-transformer.json', litTransformerData)

  server.close()
})()

function createStupidServer() {
  return http.createServer((request, response) => {
    if (request.url.endsWith('favicon.ico')) {
      response.statusCode = 404
      response.end()
      return
    }
  
    fs.readFile(`${__dirname}/../../${request.url}`, (err, data) => {
      if (err) {
        console.error(err)
        process.exit(1)
      }
  
      response.setHeader('Content-type', getContentType(request))
      response.end(data)
    })
  })
}

function getContentType(request) {
  const fileEnding = request.url.slice(request.url.lastIndexOf('.') + 1)
  return fileEnding === 'js'
    ? 'text/javascript'
    : 'text/' + fileEnding
}
