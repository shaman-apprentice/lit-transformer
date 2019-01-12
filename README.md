# lit-transformer

> 🛠  ... work in progress ... 

For what ever reason ever you may need this - `lit-transformer` translates a [mustache.js](https://github.com/janl/mustache.js/) like template into a [lit-html](https://github.com/polymer/lit-html) template.

## Basic usage
```js
import createTransformer from 'lit-transformer'
import { html } from 'lit-html'

const transformer = createTransformer(html)

transformer.parse('<div>Hello {{who}}</div>') // is the same as
html(['<div>Hello ', '</div>'], ...[ ctx => ctx.who ]) // is the same as
html`<div>${who}</div>`
```

## TODOS
- performance test
    - string parsing instead of RegEx?
- docu / examples
    - list of which syntax is supported
    - custom extending of parser
    - and implement more^^
- eslint