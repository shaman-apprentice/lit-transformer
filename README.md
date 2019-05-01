# lit-transformer

> 🛠  ... work in progress ... 

## Motivation
Assuming you use cool [mustache.js](https://github.com/janl/mustache.js/) in many places. Recently you have started to use [lit-html](https://github.com/polymer/lit-html), which is in at least some scenarios even cooler ([[1]](./lit-vs-mustache), [[2]](TODO)).

But now you are stuck with two different render engines and have to load and manage both of them - that is annoying. In the case you cannot simply rewrite all your templates (e.g. when some of them are provided by external users), you might be stuck with this situation for a long time.

For the rescue this little library transforms a valid `mustache.js`-template into a valid `lit-html`-template.

## Basic usage
```js
import createTransformer from 'lit-transformer'
import { html } from 'lit-html'

const transformer = createTransformer(html)

transformer.parse('<div>Hello {{who}}</div>') // is the same as
ctx => html([ '<div>Hello ', '</div>' ], ...[ ctx => ctx.who ]) // is the same as
ctx => html`<div>${ctx.who}</div>`
```

[Working demo](https://shaman-apprentice.github.io/lit-transformer/demo/demo.html)