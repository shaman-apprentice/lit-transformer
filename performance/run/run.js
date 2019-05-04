const http = require('http');
const fs = require('fs');

const { measure } = require('./puppeteer');

/* config */
const metricNames = [ 'ScriptDuration', 'RecalcStyleDuration', 'LayoutDuration' ]
const debug = false;


(async () => {
  const server = createStupidServer()
  server.listen(4242)

  const mustacheData = await measure('http://127.0.0.1:4242/performance/run/mustache.html', metricNames, debug)
  const litTransformerData = await measure('http://127.0.0.1:4242/performance/run/lit-transformer.html', metricNames, debug)

  fs.writeFileSync('./performance/results/mustache.json', JSON.stringify(mustacheData, null, 2))
  fs.writeFileSync('./performance/results/lit-transformer.json', JSON.stringify(litTransformerData, null, 2))

  server.close();
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