module.exports.evaluate = (metrics1, metrics2, props) =>
  props.reduce((acc, name) => {
    acc[name] = getDiff(metrics1, metrics2, name)
    return acc;
  }, { DomContentLoaded: getValue(metrics1, 'DomContentLoaded') })

const getValue = (metrics, name) =>
  metrics.find(m => m.name === name).value

const getDiff = (m1, m2, name) =>
  getValue(m2, name) - getValue(m1, name)