# lit-transformer

## Motivation
Assuming you use cool [mustache.js](https://github.com/janl/mustache.js/) in many places. Recently you have started to use [lit-html](https://github.com/polymer/lit-html), which is in at least some scenarios even cooler ([[1]](https://shaman-apprentice.github.io/lit-transformer/diff-lit-mustache-demo/diff-lit-mustache-demo.html), [[2]](https://shaman-apprentice.github.io/lit-transformer/performance/results/evaluation.html)).

But now you are stuck with two different render engines and have to load and manage both of them - that is annoying. In the case you cannot simply rewrite all your templates (e.g. when some of them are provided by external users), you might be stuck with this situation for a long time.

For the rescue this little library transforms a valid `mustache.js`-template into a valid `lit-html`-template.

## Basic usage
```js
import { html, render } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html'
import createTransformer from 'lit-transformer';

const mustache2litHtml = createTransformer(html, unsafeHTML);
const renderTemplate = mustache2litHtml('<div>Hello {{who}}!</div>');

render(renderTemplate({ who: 'world' }), document.getElementById('basic'));
```

[Try it out in this live demo!](https://stackblitz.com/edit/js-aqkbzt?embed=1&file=basicUsage.js)

## Out of the box supported template types
| Template type |   Supported   |   Note        |
| ------------- |:-------------:| -------------:|
| [Variables](https://github.com/janl/mustache.js/#variables) `{{var}}`, `{{{var}}}`      | ✔ | `{{&var}}` is not supported |
| [Sections](https://github.com/janl/mustache.js/#sections) `{{#var}}...{{/var}}`     | ✔ | function as `var` is not supported
| [Functions](https://github.com/janl/mustache.js/#functions) | ✗ |
| [Inverted Sections](https://github.com/janl/mustache.js/#inverted-sections) `{{^var}}...{{/var}}` | ✔ |
| [Comments](https://github.com/janl/mustache.js/#comments) `{{!...}}` | ✔ |
| [Partials](https://github.com/janl/mustache.js/#partials) | ✗ |
| [Custom Delimiters](https://github.com/janl/mustache.js/#custom-delimiters) `{{=<% %>=}}` | ✔ |

## Customize
It is easy to customize the set of template tags:

```js
import { html, render } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js'

import createTransformer from 'lit-transformer/src/lit-transformer.js';
import transformVariable from 'lit-transformer/src/transformers/variable.js';
import unsafeVariableTransformer from 'lit-transformer/src/transformers/unsafeVariable.js';
import sectionTransformer from 'lit-transformer/src/transformers/section.js';
import invertedSectionTransformer from 'lit-transformer/src/transformers/invertedSection.js';
import commentTransformer from 'lit-transformer/src/transformers/comment.js';
import customDelimiterTransformer from 'lit-transformer/src/transformers/customDelimiter.js';

const mustache2litHtml = createTransformer({
  html,
  delimiter: { start: '{{', end: '}}' },
  transformVariable,
  transformers: {
    // out of the box transformers:
    unsafeVariable: unsafeVariableTransformer(unsafeHTML),
    section: sectionTransformer(),
    invertedSection: invertedSectionTransformer(),
    comment: commentTransformer(),
    customDelimiterTransformer: customDelimiterTransformer(),

    // customized transformers:
    customXandY: {
      test: remainingTmplStr => remainingTmplStr[0] === '+',
      transform: (remainingTmplStr, config) => {
        const indexOfEndDelimiter = remainingTmplStr.indexOf(config.delimiter.end)

        return {
          remainingTmplStr: remainingTmplStr.substring(indexOfEndDelimiter + config.delimiter.end.length),
          insertionPoint: ctx => ctx.x + ctx.y,
        };
      },
    },
    customUnescapedVariable: {
      test: remainingTmplStr => remainingTmplStr[0] === '&',
      transform: (remainingTmplStr, config) => {
        return config.transformers.unsafeVariable.transform(insert3rdBraceForUnsaveVariable(remainingTmplStr), config);

        function insert3rdBraceForUnsaveVariable(remainingTmplStr) {
          const i = remainingTmplStr.indexOf(config.delimiter.end);
          return remainingTmplStr.substring(0, i) + '}' + remainingTmplStr.substring(i);
        }
      },
    },
  },
});

const renderData = mustache2litHtml('<div>Hello {{&who}}! {{x}} + {{y}} = {{+}}</div>');
const data = { who: '<b>customized world</b>', x: 1, y: 2 };
render(renderData(data), document.getElementById('customized'));
```

[Try it out in this live demo!](https://stackblitz.com/edit/js-aqkbzt?embed=1&file=customizedExample.js)
