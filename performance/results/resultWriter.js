const fs = require('fs')

module.exports.saveData = function(fileName, data) {
  fs.writeFileSync(fileName, JSON.stringify(buildAverage(data), null, 2))
}

function buildAverage(data) {
  const keys = Object.keys(data[0][0])

  const summedMeasurement = data.slice(1).reduce((acc, measureRun) => {
    measureRun.forEach((measurePoint, i) => {
      for (let key of keys)
        acc[i][key] += measurePoint[key]
    })

    return acc
  }, data[0])

  return summedMeasurement.map(summedMeasurePoint =>
    keys.reduce((acc, key) => {
      acc[key] = summedMeasurePoint[key] / data.length
      return acc;
    }, {}))
}