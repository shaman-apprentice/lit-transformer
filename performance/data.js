strTemplate = `
  <h2>A useless short story</h2>

  {{{version}}}

  <p>Once upon a time, there was a <em>{{who}}</em>. He lay down and glanced into the clear night sky...</p>
  {{=<% %>=}}
    <div style="border: solid 2px black; display: inline-block; background-color: dark">
    <b>a peek into the night sky</b> (<a href="https://www.asciiart.eu/space/other">gladly copied from here</a>) (with minor adjustments for escaping / mustache.js and just for fun)
<pre style="background-color: black; color: greenyellow;">
  ------------------------------------------------------------------------------------------------------------------------------  
  {{            +             +                  +   @                        +             +                  +   @          {{  
  }}   |                *           o     +                .         |                *           o     +                .    }}
  {{  -O-    o               .               .          +           -O-    o               .               .          +       {{
  }}   |                    _,.-----.,_         o    |               |                    _,.-----.,_         o    |          }}
  {{           +    *    .-'.         .'-.          -O-                      +    *    .-'.         .'-.          -O-         {{
  }}      *            .'.-'   .---.   \`'.'.         |     *           *            .'.-'   .---.   \`'.'.         |     *     }}
  {{ .                /_.-'   /     \\   .'-.\\                    .                /_.-'   /     \\   .'-.\\                     {{
  }}         ' -=*<  |-._.-  |   @   |   '-._|  >*=-    .     +            ' -=*<  |-._.-  |   @   |   '-._|  >*=-    .     + }}
  {{ -- )--           \\\`-.    \\     /    .-'/                   -- )--           \\\`-.    \\     /    .-'/                      {{
  }}       *     +     \`.'.    '---'    .'.'    +       o               *     +     \`.'.    '---'    .'.'    +       o        }}
  {{                  .  '-._         _.-'  .                                       .  '-._         _.-'  .                   {{
  }}         |               \`~~~~~~~\`       - --===D       @            |               \`~~~~~~~\`       - --===D       @     }}
  {{   o    -O-      *   .                  *        +               o    -O-      *   .                  *        +          {{
  }}         |                      +         .            +               |                      +         .            +    }}
  {{ jgs          .     @      o                        *          **          .     @      o                        *        {{
  ------------------------------------------------------------------------------------------------------------------------------
</pre>
    </div>
    <p>"Isn't this <em><%what%></em>? <%! nobody cares about comments %>"</p> <%{version}%>
  <%={{ }}=%>

  <p>But the <em>{{who}}</em> had no time to gaze at it any longer. He had many things todo:</p>
  <ul>
    {{#todos}}
      <li>{{what}} {{^open}}✔{{/open}}</li> 
    {{/todos}} 
  </ul>

  <h4>The end</h4>
`

shortStory1 = {
  version: '<em>Version 1</em>',
  who: 'little alien',
  what: 'a lovely galaxy',
  todos: [
    { what: 'buy milk', open: false },
    { what: 'make the cats happy', open: false },
    { what: 'chilling', open: false },
    { what: 'clean the kitchen', open: true },
    { what: 'save the world', open: true },
  ],
}

shortStory2 = {
  version: '<em>Version 2</em>',
  who: 'Mr. Chuck Norris',
  what: 'my front yard',
  todos: [
    { what: 'buy milk', open: false },
    { what: 'make the cats happy', open: false },
    { what: 'chilling', open: false },
    { what: 'clean the kitchen', open: false },
    { what: 'save the world', open: false },
  ],
}