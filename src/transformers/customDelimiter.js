import { transform } from './variable'

export default (nameOfVariableTransformer = 'variable') => {
  const delimiter = {
    start: /{{=/,
    end: /=}}/,
  }

  return {
    delimiter,
    transform: ({ config, innerTemplate }) => {
      const [ startDelimiter, endDelimiter ] = innerTemplate.split(' ')
      delimiter.start = new RegExp(startDelimiter + '=')
      delimiter.end = new RegExp('=' + endDelimiter)
      config.transformers[nameOfVariableTransformer] = createCustomVariableTransformer(startDelimiter, endDelimiter)

      return () => ''
    }
  }
}

function createCustomVariableTransformer(startDelimiter, endDelimiter) {
  return {
    delimiter: {
      start: new RegExp(startDelimiter),
      end: new RegExp(endDelimiter)
    },
    transform,
  }
}

