window.litTransformer=function(t){var e={};function s(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}return s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";s.r(e);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const i=new WeakMap,n=t=>"function"==typeof t&&i.has(t),l=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(t,e,s=null)=>{let i=e;for(;i!==s;){const e=i.nextSibling;t.removeChild(i),i=e}},h={},r=`{{lit-${String(Math.random()).slice(2)}}}`,c=`\x3c!--${r}--\x3e`,u=new RegExp(`${r}|${c}`),m="$lit$";class f{constructor(t,e){this.parts=[],this.element=e;let s=-1,i=0;const n=[],l=e=>{const o=e.content,h=document.createTreeWalker(o,133,null,!1);let c,f;for(;h.nextNode();){s++,c=f;const e=f=h.currentNode;if(1===e.nodeType){if(e.hasAttributes()){const n=e.attributes;let l=0;for(let t=0;t<n.length;t++)n[t].value.indexOf(r)>=0&&l++;for(;l-- >0;){const n=t.strings[i],l=g.exec(n)[2],o=l.toLowerCase()+m,h=e.getAttribute(o).split(u);this.parts.push({type:"attribute",index:s,name:l,strings:h}),e.removeAttribute(o),i+=h.length-1}}"TEMPLATE"===e.tagName&&l(e)}else if(3===e.nodeType){const t=e.nodeValue;if(t.indexOf(r)<0)continue;const l=e.parentNode,o=t.split(u),h=o.length-1;i+=h;for(let t=0;t<h;t++)l.insertBefore(""===o[t]?a():document.createTextNode(o[t]),e),this.parts.push({type:"node",index:s++});l.insertBefore(""===o[h]?a():document.createTextNode(o[h]),e),n.push(e)}else if(8===e.nodeType)if(e.nodeValue===r){const t=e.parentNode,l=e.previousSibling;null===l||l!==c||l.nodeType!==Node.TEXT_NODE?t.insertBefore(a(),e):s--,this.parts.push({type:"node",index:s++}),n.push(e),null===e.nextSibling?t.insertBefore(a(),e):s--,f=c,i++}else{let t=-1;for(;-1!==(t=e.nodeValue.indexOf(r,t+1));)this.parts.push({type:"node",index:-1})}}};l(e);for(const t of n)t.parentNode.removeChild(t)}}const d=t=>-1!==t.index,a=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class v{constructor(t,e,s){this._parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this._parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this._parts)void 0!==t&&t.commit()}_clone(){const t=l?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=this.template.parts;let s=0,i=0;const n=t=>{const l=document.createTreeWalker(t,133,null,!1);let o=l.nextNode();for(;s<e.length&&null!==o;){const t=e[s];if(d(t))if(i===t.index){if("node"===t.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(o),this._parts.push(t)}else this._parts.push(...this.processor.handleAttributeExpressions(o,t.name,t.strings,this.options));s++}else i++,"TEMPLATE"===o.nodeName&&n(o.content),o=l.nextNode();else this._parts.push(void 0),s++}};return n(t),l&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class _{constructor(t,e,s,i){this.strings=t,this.values=e,this.type=s,this.processor=i}getHTML(){const t=this.strings.length-1;let e="";for(let s=0;s<t;s++){const t=this.strings[s];let i=!1;e+=t.replace(g,(t,e,s,n)=>(i=!0,e+s+m+n+r)),i||(e+=c)}return e+this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const y=t=>null===t||!("object"==typeof t||"function"==typeof t);class N{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new T(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let i=0;i<e;i++){s+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(null!=t&&(Array.isArray(t)||"string"!=typeof t&&t[Symbol.iterator]))for(const e of t)s+="string"==typeof e?e:String(e);else s+="string"==typeof t?t:String(t)}}return s+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class T{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===h||y(t)&&t===this.value||(this.value=t,n(t)||(this.committer.dirty=!0))}commit(){for(;n(this.value);){const t=this.value;this.value=h,t(this)}this.value!==h&&this.committer.commit()}}class b{constructor(t){this.value=void 0,this._pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(a()),this.endNode=t.appendChild(a())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t._insert(this.startNode=a()),t._insert(this.endNode=a())}insertAfterPart(t){t._insert(this.startNode=a()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this._pendingValue=t}commit(){for(;n(this._pendingValue);){const t=this._pendingValue;this._pendingValue=h,t(this)}const t=this._pendingValue;t!==h&&(y(t)?t!==this.value&&this._commitText(t):t instanceof _?this._commitTemplateResult(t):t instanceof Node?this._commitNode(t):Array.isArray(t)||t[Symbol.iterator]?this._commitIterable(t):this._commitText(t))}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_commitNode(t){this.value!==t&&(this.clear(),this._insert(t),this.value=t)}_commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&e.nodeType===Node.TEXT_NODE?e.textContent=t:this._commitNode(document.createTextNode("string"==typeof t?t:String(t))),this.value=t}_commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value&&this.value.template===e)this.value.update(t.values);else{const s=new v(e,t.processor,this.options),i=s._clone();s.update(t.values),this._commitNode(i),this.value=s}}_commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,i=0;for(const n of t)void 0===(s=e[i])&&(s=new b(this.options),e.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(e[i-1])),s.setValue(n),s.commit(),i++;i<e.length&&(e.length=i,this.clear(s&&s.endNode))}clear(t=this.startNode){o(this.startNode.parentNode,t.nextSibling,this.endNode)}}class w{constructor(t,e,s){if(this.value=void 0,this._pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this._pendingValue=t}commit(){for(;n(this._pendingValue);){const t=this._pendingValue;this._pendingValue=h,t(this)}if(this._pendingValue===h)return;const t=!!this._pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=t,this._pendingValue=h}}class V extends N{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new E(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class E extends T{}let x=!1;try{const t={get capture(){return x=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class p{constructor(t,e,s){this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this._boundHandleEvent=(t=>this.handleEvent(t))}setValue(t){this._pendingValue=t}commit(){for(;n(this._pendingValue);){const t=this._pendingValue;this._pendingValue=h,t(this)}if(this._pendingValue===h)return;const t=this._pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),i&&(this._options=O(t),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=t,this._pendingValue=h}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const O=t=>t&&(x?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const S=new class{handleAttributeExpressions(t,e,s,i){const n=e[0];return"."===n?new V(t,e.slice(1),s).parts:"@"===n?[new p(t,e.slice(1),i.eventContext)]:"?"===n?[new w(t,e.slice(1),s)]:new N(t,e,s).parts}handleTextExpression(t){return new b(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function A(t){let e=P.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},P.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const i=t.strings.join(r);return void 0===(s=e.keyString.get(i))&&(s=new f(t,t.getTemplateElement()),e.keyString.set(i,s)),e.stringsArray.set(t.strings,s),s}const P=new Map,C=new WeakMap,j=new WeakMap,M=(t=>(...e)=>{const s=t(...e);return i.set(s,!0),s})(t=>e=>{if(!(e instanceof b))throw new Error("unsafeHTML can only be used in text bindings");if(j.get(e)===t&&y(t))return;const s=document.createElement("template");s.innerHTML=t,e.setValue(document.importNode(s.content,!0)),j.set(e,t)});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function $(t,e){const s=[],i=[];let n,l=t;for(;0<=(n=l.indexOf(e.delimiter.start));){s.push(l.substring(0,n));const o=H(l=l.substring(n+e.delimiter.start.length),e)(l,e);if(o.remainingTmplStr.length+e.delimiter.end.length>=l.length)throw new Error(`'${t}' is not a valid template - got stuck at '${l}'`);l=o.remainingTmplStr,i.push(o.insertionPoint)}return s.push(l),t=>e.html(s,...i.map(e=>e(t)))}function H(t,e){const s=Object.values(e.transformers).find(s=>s.test(t,e));return s?s.transform:e.transformVariable}function W(t,e){return e.split(".").reduce((t,e)=>e?t[e]:t,t)}var B=(t,{delimiter:e})=>{const s=t.indexOf(e.end),i=t.substring(0,s);return{remainingTmplStr:t.substring(s+e.end.length),insertionPoint:t=>W(t,i)}},L=t=>({test:t=>"{"===t[0],transform:(e,{delimiter:s})=>{const i=e.indexOf("}"+s.end),n=e.substring(1,i);return{remainingTmplStr:e.substring(i+1+s.end.length),insertionPoint:e=>t(W(e,n))}}});function D(t){return[null,void 0,!1,0,NaN,""].some(e=>e===t)||t.length&&0===t.length}var F=()=>({test:t=>"#"===t[0],transform:(t,e)=>{const s=t.indexOf(e.delimiter.end),i=t.substring(1,s),n=e.delimiter.start+"/"+i+e.delimiter.end,l=t.indexOf(n),o=$(t.substring(s+e.delimiter.start.length,l),e);return{remainingTmplStr:t.substring(l+n.length),insertionPoint:t=>{const e=W(t,i);return D(e)?"":e.map(t=>o(t))}}}}),X=()=>({test:t=>"^"===t[0],transform:(t,{delimiter:e})=>{const s=t.indexOf(e.end),i=t.substring(1,s),n=e.start+"/"+i+e.end,l=t.indexOf(n),o=t.substring(s+e.start.length,l);return{remainingTmplStr:t.substring(l+n.length),insertionPoint:t=>{return D(W(t,i))?o:""}}}});const q={transform:((t,e)=>(t=>e=>$(e,t))({html:t,delimiter:{start:"{{",end:"}}"},transformVariable:B,transformers:{unsafeVariable:L(e),section:F(),invertedSection:X(),comment:{test:t=>"!"===t[0],transform:(t,{delimiter:e})=>({remainingTmplStr:t.substring(t.indexOf(e.end)+e.end.length),insertionPoint:t=>""})},customDelimiterTransformer:{test:t=>"="===t[0],transform:(t,e)=>{const s=e.delimiter.end.length,i=t.indexOf("="+e.delimiter.end),n=t.substring(1,i).split(" ");return e.delimiter.start=n[0],e.delimiter.end=n[1],{remainingTmplStr:t.substring(i+1+s),insertionPoint:t=>""}}}}}))((t,...e)=>new _(t,e,"html",S),M),render:(t,e,s)=>{let i=C.get(e);void 0===i&&(o(e,e.firstChild),C.set(e,i=new b(Object.assign({templateFactory:A},s))),i.appendInto(e)),i.setValue(t),i.commit()}};e.default=q}]).default;