const http = require('http');
const fs = require('fs');

const { measure } = require('./puppeteer');

(async () => {
  const server = createStupidServer()
  server.listen(4242)

  const mustacheData = await measure('http://127.0.0.1:4242/performance/mustache.html')
  const litTransformerData = await measure('http://127.0.0.1:4242/performance/lit-transformer.html')

  const diff = Object.keys(litTransformerData).reduce((acc, key) => {
    acc[key] = mustacheData[key] - litTransformerData[key]
    return acc
  }, {})
  console.log(diff)
  
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
  
      response.setHeader('Content-type', 'text/' +request.url.slice(request.url.lastIndexOf('.') + 1))
      response.end(data)
    })
  })
}