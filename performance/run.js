const http = require('http');
const fs = require('fs');

const { measure } = require('./puppeteer');

(async () => {
  const server = createStupidServer()
  server.listen(4242)

  const metricNames = [ 'ScriptDuration', 'RecalcStyleDuration', 'LayoutDuration' ]
  const mustacheData = await measure('http://127.0.0.1:4242/performance/mustache.html', metricNames, false)
  const litTransformerData = await measure('http://127.0.0.1:4242/performance/lit-transformer.html', metricNames, false)

  // const diff = Object.keys(litTransformerData).reduce((acc, key) => {
  //   acc[key] = mustacheData[key] - litTransformerData[key]
  //   return acc
  // }, {})
  // console.log(diff)
  
  console.log(mustacheData)
  console.log('------------------------')
  console.log(litTransformerData)
  // todo write in json and evaluate somewhere else
  // todo debug and metrics as args
  server.close();
})()

function createStupidServer() {
  return http.createServer((request, response) => {
    if (request.url.endsWith('favicon.ico')) {
      response.statusCode = 404
      response.end()
      return
    }
  
    fs.readFile(`${__dirname}/../${request.url}`, (err, data) => {
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