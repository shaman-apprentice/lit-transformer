strTemplate = `
  <style>
    body {
      background: #777474;
    }

    #content {
      display: flex;
    }

    #content > div:nth-child(1) {
      flex: 25%;
    }
    #content > div:nth-child(2) {
      flex: 75%;
    }

    .contribution {
      color: grey;
      font-size: 0.75em;
    }

    .zigario {
      margin-top: 360px;
    }

    .hellboy-container {
      display: flex;
    }
    .hellboy-wrapper {
      margin: auto;
      flex: 50%;
    }
    .hellboy-container-text {
      flex: 50%;
    }
    .hellboy-container-text p {
      width: 300px;
      position: absolute;
      padding: 4em;
      margin-left: 1em;
      border: 3px solid black;
      font-size: 1.5em;
    } 
  </style>

  <section id="content">
    <div style="padding-top: 1em;">
      {{{version}}}

      <p>Once upon a time, there was a <em>{{who}}</em>. He lay down and glanced into the clear night sky...</p>
      {{=<% %>=}}
      <div style="border: solid 2px black; display: inline-block; background-color: black; color: darkred; width: 600px; overflow: scroll;">
        <b>a peek into the night sky</b> (<a href="https://www.asciiart.eu/space/other">gladly copied from here</a>) (with minor adjustments for escaping / mustache.js and just for fun)
        <pre style="color: greenyellow;">
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
      <p>"Isn't this <em><%what%></em>? <%! nobody cares about comments %>"</p>
      <%={{ }}=%>

      <p>But the <em>{{who}}</em> had no time to gaze at it any longer. He had many things todo:</p>
      <ul>
        {{#todos}}
          <li>{{what}} {{^open}}✔{{/open}}</li> 
        {{/todos}} 
      </ul>

      <h4>The end</h4>
    </div>

    <div>
      <div>
        <div class="hellboy-container">
          <div class="hellboy-container-text">
            <p>No matter how cool it might look and feel - smoking is unhealty and expensive.</p>

          </div>

          <div class="hellboy-wrapper">
            <div class="hellboy"></div>
          </div>
        </div>
        <style>
        .hellboy{
          position: relative;
          top: 0;
          left: 176px;
          height: 4px;
          width: 4px;
          background-color: #b6aeae;
          box-shadow: 0px 8px 0 #b6aeae,
            0px 12px 0 #b6aeae,
            0px 20px 0 #b6aeae,
          -4px 24px 0 #b6aeae,
          -8px 24px 0 #b6aeae,
        
          -48px 28px 0 #c4d9b7,
          -44px 28px 0 #df5346,
          -40px 28px 0 #df5346,
          -32px 28px 0 #a12b20,
          -28px 28px 0 #df5346,
          -12px 28px 0 #b6aeae,
        
          -56px 32px 0 #a12b20,
          -52px 32px 0 #6d200e,
          -48px 32px 0 #c4d9b7,
          -44px 32px 0 #df5346,
          -40px 32px 0 #df5346,
          -36px 32px 0 #a12b20,
          -32px 32px 0 #a12b20,
          -28px 32px 0 #df5346,
          -8px 32px 0 #b6aeae,
          -4px 32px 0 #b6aeae,
        
          -60px 36px 0 #270e0b,
          -56px 36px 0 #a12b20,
          -52px 36px 0 #6d200e,
          -48px 36px 0 #c4d9b7,
          -44px 36px 0 #df5346,
          -40px 36px 0 #df5346,
          -36px 36px 0 #a12b20,
          -32px 36px 0 #a12b20,
          -28px 36px 0 #df5346,
            0px 36px 0 #b6aeae,
        
          -60px 40px 0 #270e0b,
          -56px 40px 0 #a12b20,
          -52px 40px 0 #a12b20,
          -48px 40px 0 #a12b20,
          -44px 40px 0 #a12b20,
          -40px 40px 0 #df5346,
          -36px 40px 0 #df5346,
          -32px 40px 0 #df5346,
            4px 40px 0 #b6aeae,
        
          -64px 44px 0 #270e0b,
          -60px 44px 0 #270e0b,
          -56px 44px 0 #a12b20,
          -52px 44px 0 #df5346,
          -48px 44px 0 #df5346,
          -44px 44px 0 #a12b20,
          -40px 44px 0 #df5346,
          -36px 44px 0 #df5346,
          -32px 44px 0 #df5346,
            4px 44px 0 #b6aeae,
        
          -68px 48px 0 #270e0b,
          -64px 48px 0 #270e0b,
          -60px 48px 0 #270e0b,
          -56px 48px 0 #a12b20,
          -52px 48px 0 #6d200e,
          -48px 48px 0 #6d200e,
          -44px 48px 0 #6d200e,
          -40px 48px 0 #6d200e,
            4px 48px 0 #b6aeae,
        
          -68px 52px 0 #c4d9b7,
          -64px 52px 0 #df5346,
          -60px 52px 0 #270e0b,
          -56px 52px 0 #a12b20,
          -52px 52px 0 #a12b20,
          -48px 52px 0 #edd342,
          -44px 52px 0 #df5346,
          -40px 52px 0 #df5346,
          -12px 52px 0 #b6aeae,
            0px 52px 0 #b6aeae,
        
          -68px 56px 0 #c4d9b7,
          -64px 56px 0 #df5346,
          -60px 56px 0 #270e0b,
          -56px 56px 0 #270e0b,
          -52px 56px 0 #df5346,
          -48px 56px 0 #df5346,
          -44px 56px 0 #df5346,
          -40px 56px 0 #df5346,
          -16px 56px 0 #e2dfdf,
          -4px 56px 0 #b6aeae,
            0px 56px 0 #b6aeae,
        
          -68px 60px 0 #56432e,
          -64px 60px 0 #a12b20,
          -60px 60px 0 #a12b20,
          -56px 60px 0 #270e0b,
          -52px 60px 0 #270e0b,
          -48px 60px 0 #df5346,
          -44px 60px 0 #df5346,
          -40px 60px 0 #6d200e,
          -20px 60px 0 #b6aeae,
          -16px 60px 0 #b6aeae,
          -12px 60px 0 #b6aeae,
          -8px 60px 0 #b6aeae,
          -4px 60px 0 #b6aeae,
        
          -72px 64px 0 #56432e,
          -68px 64px 0 #270e0b,
          -64px 64px 0 #270e0b,
          -60px 64px 0 #270e0b,
          -56px 64px 0 #270e0b,
          -52px 64px 0 #270e0b,
          -48px 64px 0 #df5346,
          -44px 64px 0 #df5346,
          -40px 64px 0 #df5346,
          -24px 64px 0 #b6aeae,
          -20px 64px 0 #e2dfdf,
          -16px 64px 0 #e2dfdf,
          -12px 64px 0 #b6aeae,
          -8px 64px 0 #b6aeae,
          -4px 64px 0 #b6aeae,
        
          -80px 68px 0 #c5a48d,
          -76px 68px 0 #c5a48d,
          -72px 68px 0 #56432e,
          -68px 68px 0 #8d755b,
          -64px 68px 0 #270e0b,
          -60px 68px 0 #270e0b,
          -56px 68px 0 #270e0b,
          -52px 68px 0 #270e0b,
          -48px 68px 0 #270e0b,
          -44px 68px 0 #270e0b,
          -40px 68px 0 #df5346,
          -36px 68px 0 #df5346,
          -32px 68px 0 #df5346,
          -28px 68px 0 #ffffff,
          -24px 68px 0 #ffffff,
          -20px 68px 0 #ff7f39,
          -16px 68px 0 #e2dfdf,
          -12px 68px 0 #e2dfdf,
          -8px 68px 0 #b6aeae,
        
          -88px 72px 0 #c5a48d,
          -84px 72px 0 #c5a48d,
          -80px 72px 0 #c5a48d,
          -76px 72px 0 #56432e,
          -72px 72px 0 #8d755b,
          -68px 72px 0 #8d755b,
          -64px 72px 0 #6d200e,
          -60px 72px 0 #270e0b,
          -56px 72px 0 #270e0b,
          -52px 72px 0 #270e0b,
          -48px 72px 0 #270e0b,
          -44px 72px 0 #df5346,
          -40px 72px 0 #df5346,
          -36px 72px 0 #df5346,
          -32px 72px 0 #df5346,
          -24px 72px 0 #b6aeae,
          -20px 72px 0 #e2dfdf,
          -16px 72px 0 #e2dfdf,
          -12px 72px 0 #b6aeae,
          -8px 72px 0 #b6aeae,
        
          -96px 76px 0 #c5a48d,
          -92px 76px 0 #c5a48d,
          -88px 76px 0 #c5a48d,
          -84px 76px 0 #c5a48d,
          -80px 76px 0 #c5a48d,
          -76px 76px 0 #8d755b,
          -72px 76px 0 #8d755b,
          -68px 76px 0 #8d755b,
          -64px 76px 0 #6d200e,
          -60px 76px 0 #6d200e,
          -56px 76px 0 #270e0b,
          -52px 76px 0 #270e0b,
          -48px 76px 0 #df5346,
          -44px 76px 0 #df5346,
          -40px 76px 0 #df5346,
          -36px 76px 0 #270e0b,
          -32px 76px 0 #df5346,
          -28px 76px 0 #8d755b,
          -16px 76px 0 #b6aeae,
          -12px 76px 0 #b6aeae,
        
        -100px 80px 0 #c4d9b7,
          -96px 80px 0 #c5a48d,
          -92px 80px 0 #c5a48d,
          -88px 80px 0 #c5a48d,
          -84px 80px 0 #c5a48d,
          -80px 80px 0 #c5a48d,
          -76px 80px 0 #8d755b,
          -72px 80px 0 #8d755b,
          -68px 80px 0 #8d755b,
          -64px 80px 0 #8d755b,
          -60px 80px 0 #6d200e,
          -56px 80px 0 #6d200e,
          -52px 80px 0 #270e0b,
          -48px 80px 0 #df5346,
          -44px 80px 0 #df5346,
          -40px 80px 0 #df5346,
          -36px 80px 0 #270e0b,
          -32px 80px 0 #df5346,
          -28px 80px 0 #8d755b,
          -24px 80px 0 #f7d7b0,
        
          -104px 84px 0 #c4d9b7,
          -100px 84px 0 #c5a48d,
          -96px 84px 0 #c5a48d,
          -92px 84px 0 #c5a48d,
          -88px 84px 0 #c5a48d,
          -84px 84px 0 #c5a48d,
          -80px 84px 0 #c5a48d,
          -76px 84px 0 #8d755b,
          -72px 84px 0 #8d755b,
          -68px 84px 0 #8d755b,
          -64px 84px 0 #8d755b,
          -60px 84px 0 #8d755b,
          -56px 84px 0 #6d200e,
          -52px 84px 0 #6d200e,
          -48px 84px 0 #6d200e,
          -44px 84px 0 #6d200e,
          -40px 84px 0 #a12b20,
          -36px 84px 0 #8d755b,
          -32px 84px 0 #8d755b,
          -28px 84px 0 #8d755b,
          -24px 84px 0 #8d755b,
        
          -108px 88px 0 #c4d9b7,
          -104px 88px 0 #c5a48d,
          -100px 88px 0 #c5a48d,
            -96px 88px 0 #c5a48d,
            -92px 88px 0 #c5a48d,
            -88px 88px 0 #c5a48d,
            -84px 88px 0 #c5a48d,
            -80px 88px 0 #c5a48d,
            -76px 88px 0 #8d755b,
            -72px 88px 0 #8d755b,
            -68px 88px 0 #8d755b,
            -64px 88px 0 #8d755b,
            -60px 88px 0 #8d755b,
            -56px 88px 0 #6d200e,
            -52px 88px 0 #6d200e,
            -48px 88px 0 #6d200e,
            -44px 88px 0 #a12b20,
            -40px 88px 0 #a12b20,
            -36px 88px 0 #8d755b,
            -32px 88px 0 #8d755b,
            -28px 88px 0 #8d755b,
            -24px 88px 0 #8d755b,
        
          -112px 92px 0 #c4d9b7,
          -108px 92px 0 #c5a48d,
          -104px 92px 0 #c5a48d,
          -100px 92px 0 #c5a48d,
          -96px 92px 0 #c5a48d,
          -92px 92px 0 #c5a48d,
          -88px 92px 0 #c5a48d,
          -84px 92px 0 #c5a48d,
          -80px 92px 0 #8d755b,
          -76px 92px 0 #8d755b,
          -72px 92px 0 #8d755b,
          -68px 92px 0 #8d755b,
          -64px 92px 0 #8d755b,
          -60px 92px 0 #f7d7b0,
          -56px 92px 0 #6d200e,
          -52px 92px 0 #6d200e,
          -48px 92px 0 #a12b20,
          -44px 92px 0 #a12b20,
          -40px 92px 0 #df5346,
          -36px 92px 0 #df5346,
          -32px 92px 0 #df5346,
          -28px 92px 0 #8d755b,
          -24px 92px 0 #8d755b,
          -20px 92px 0 #8d755b,
        
          -116px 96px 0 #c4d9b7,
          -112px 96px 0 #c5a48d,
          -108px 96px 0 #c5a48d,
          -104px 96px 0 #c5a48d,
          -100px 96px 0 #c5a48d,
            -96px 96px 0 #c5a48d,
            -92px 96px 0 #c5a48d,
            -88px 96px 0 #c5a48d,
            -84px 96px 0 #c5a48d,
            -80px 96px 0 #8d755b,
            -76px 96px 0 #8d755b,
            -72px 96px 0 #8d755b,
            -68px 96px 0 #8d755b,
            -64px 96px 0 #f7d7b0,
            -60px 96px 0 #f7d7b0,
            -56px 96px 0 #a12b20,
            -52px 96px 0 #a12b20,
            -48px 96px 0 #a12b20,
            -44px 96px 0 #a12b20,
            -40px 96px 0 #df5346,
            -36px 96px 0 #df5346,
            -32px 96px 0 #df5346,
            -28px 96px 0 #df5346,
            -24px 96px 0 #f7d7b0,
            -20px 96px 0 #c5a48d,
        
            -120px 100px 0 #c4d9b7,
            -116px 100px 0 #c5a48d,
            -112px 100px 0 #c5a48d,
            -108px 100px 0 #c5a48d,
            -104px 100px 0 #c5a48d,
            -100px 100px 0 #c5a48d,
            -96px 100px 0 #c5a48d,
            -92px 100px 0 #c5a48d,
            -88px 100px 0 #c5a48d,
            -84px 100px 0 #8d755b,
            -80px 100px 0 #8d755b,
            -76px 100px 0 #8d755b,
            -72px 100px 0 #c5a48d,
            -68px 100px 0 #c5a48d,
            -64px 100px 0 #f7d7b0,
            -60px 100px 0 #f7d7b0,
            -56px 100px 0 #a12b20,
            -52px 100px 0 #a12b20,
            -48px 100px 0 #a12b20,
            -44px 100px 0 #df5346,
            -40px 100px 0 #df5346,
            -36px 100px 0 #df5346,
            -32px 100px 0 #df5346,
            -28px 100px 0 #df5346,
            -24px 100px 0 #f7d7b0,
            -20px 100px 0 #c5a48d,
        
            -124px 104px 0 #c4d9b7,
            -120px 104px 0 #c5a48d,
            -116px 104px 0 #c5a48d,
            -112px 104px 0 #c5a48d,
            -108px 104px 0 #c5a48d,
            -104px 104px 0 #f7d7b0,
            -100px 104px 0 #f7d7b0,
              -96px 104px 0 #f7d7b0,
              -92px 104px 0 #f7d7b0,
              -88px 104px 0 #c5a48d,
              -84px 104px 0 #c5a48d,
              -80px 104px 0 #c5a48d,
              -76px 104px 0 #c5a48d,
              -72px 104px 0 #c5a48d,
              -68px 104px 0 #f7d7b0,
              -64px 104px 0 #f7d7b0,
              -60px 104px 0 #f7d7b0,
              -56px 104px 0 #a12b20,
              -52px 104px 0 #a12b20,
              -48px 104px 0 #df5346,
              -44px 104px 0 #df5346,
              -40px 104px 0 #df5346,
              -36px 104px 0 #df5346,
              -32px 104px 0 #df5346,
              -28px 104px 0 #df5346,
              -24px 104px 0 #df5346,
              -20px 104px 0 #c5a48d,
        
            -124px 108px 0 #c4d9b7,
            -120px 108px 0 #c5a48d,
            -116px 108px 0 #c5a48d,
            -112px 108px 0 #c5a48d,
            -108px 108px 0 #f7d7b0,
            -104px 108px 0 #f7d7b0,
            -100px 108px 0 #f7d7b0,
            -96px 108px 0 #f7d7b0,
            -92px 108px 0 #f7d7b0,
            -88px 108px 0 #f7d7b0,
            -84px 108px 0 #f7d7b0,
            -80px 108px 0 #f7d7b0,
            -76px 108px 0 #f7d7b0,
            -72px 108px 0 #f7d7b0,
            -68px 108px 0 #f7d7b0,
            -64px 108px 0 #f7d7b0,
            -60px 108px 0 #f7d7b0,
            -56px 108px 0 #a12b20,
            -52px 108px 0 #df5346,
            -48px 108px 0 #df5346,
            -44px 108px 0 #df5346,
            -40px 108px 0 #df5346,
            -36px 108px 0 #df5346,
            -32px 108px 0 #df5346,
            -28px 108px 0 #df5346,
            -24px 108px 0 #df5346,
            -20px 108px 0 #c5a48d,
        
          -128px 112px 0 #c4d9b7,
          -124px 112px 0 #c5a48d,
          -120px 112px 0 #c5a48d,
          -116px 112px 0 #c5a48d,
          -112px 112px 0 #c5a48d,
          -108px 112px 0 #c5a48d,
          -104px 112px 0 #c5a48d,
          -100px 112px 0 #f7d7b0,
            -96px 112px 0 #f7d7b0,
            -92px 112px 0 #f7d7b0,
            -88px 112px 0 #f7d7b0,
            -84px 112px 0 #f7d7b0,
            -80px 112px 0 #f7d7b0,
            -76px 112px 0 #f7d7b0,
            -72px 112px 0 #f7d7b0,
            -68px 112px 0 #f7d7b0,
            -64px 112px 0 #f7d7b0,
            -60px 112px 0 #f7d7b0,
            -56px 112px 0 #df5346,
            -52px 112px 0 #df5346,
            -48px 112px 0 #df5346,
            -44px 112px 0 #df5346,
            -40px 112px 0 #df5346,
            -36px 112px 0 #df5346,
            -32px 112px 0 #df5346,
            -28px 112px 0 #df5346,
            -24px 112px 0 #df5346,
            -20px 112px 0 #c5a48d,
        
          -128px 116px 0 #c4d9b7,
          -124px 116px 0 #c5a48d,
          -120px 116px 0 #c5a48d,
          -116px 116px 0 #c5a48d,
          -112px 116px 0 #f7d7b0,
          -108px 116px 0 #f7d7b0,
          -104px 116px 0 #c5a48d,
          -100px 116px 0 #c5a48d,
          -96px 116px 0 #c5a48d,
          -92px 116px 0 #f7d7b0,
          -88px 116px 0 #c5a48d,
          -84px 116px 0 #c5a48d,
          -80px 116px 0 #c5a48d,
          -76px 116px 0 #f7d7b0,
          -72px 116px 0 #f7d7b0,
          -68px 116px 0 #f7d7b0,
          -64px 116px 0 #f7d7b0,
          -60px 116px 0 #f7d7b0,
          -56px 116px 0 #df5346,
          -52px 116px 0 #df5346,
          -48px 116px 0 #df5346,
          -44px 116px 0 #df5346,
          -40px 116px 0 #df5346,
          -36px 116px 0 #df5346,
          -32px 116px 0 #df5346,
          -28px 116px 0 #df5346,
          -24px 116px 0 #df5346,
          -20px 116px 0 #f7d7b0,
        
          -136px 120px 0 #c4d9b7,
          -132px 120px 0 #c4d9b7,
          -128px 120px 0 #c4d9b7,
          -124px 120px 0 #c5a48d,
          -120px 120px 0 #c5a48d,
          -116px 120px 0 #f7d7b0,
          -112px 120px 0 #c5a48d,
          -108px 120px 0 #f7d7b0,
          -104px 120px 0 #f7d7b0,
          -100px 120px 0 #f7d7b0,
            -96px 120px 0 #c5a48d,
            -92px 120px 0 #f7d7b0,
            -88px 120px 0 #f7d7b0,
            -84px 120px 0 #c5a48d,
            -80px 120px 0 #c5a48d,
            -76px 120px 0 #c5a48d,
            -72px 120px 0 #f7d7b0,
            -68px 120px 0 #f7d7b0,
            -64px 120px 0 #f7d7b0,
            -60px 120px 0 #f7d7b0,
            -56px 120px 0 #df5346,
            -52px 120px 0 #df5346,
            -48px 120px 0 #df5346,
            -44px 120px 0 #df5346,
            -40px 120px 0 #df5346,
            -36px 120px 0 #df5346,
            -32px 120px 0 #df5346,
            -28px 120px 0 #df5346,
            -24px 120px 0 #df5346,
            -20px 120px 0 #f7d7b0,
            -16px 120px 0 #c5a48d,
        
            -132px 124px 0 #c5a48d,
            -128px 124px 0 #c5a48d,
            -124px 124px 0 #c5a48d,
            -120px 124px 0 #c5a48d,
            -116px 124px 0 #c5a48d,
            -112px 124px 0 #c5a48d,
            -108px 124px 0 #c5a48d,
            -104px 124px 0 #c5a48d,
            -100px 124px 0 #f7d7b0,
            -96px 124px 0 #f7d7b0,
            -92px 124px 0 #c5a48d,
            -88px 124px 0 #f7d7b0,
            -84px 124px 0 #c5a48d,
            -80px 124px 0 #c5a48d,
            -76px 124px 0 #c5a48d,
            -72px 124px 0 #f7d7b0,
            -68px 124px 0 #f7d7b0,
            -64px 124px 0 #f7d7b0,
            -60px 124px 0 #f7d7b0,
            -56px 124px 0 #df5346,
            -52px 124px 0 #df5346,
            -48px 124px 0 #df5346,
            -44px 124px 0 #df5346,
            -40px 124px 0 #df5346,
            -36px 124px 0 #a12b20,
            -32px 124px 0 #df5346,
            -28px 124px 0 #df5346,
            -24px 124px 0 #df5346,
            -20px 124px 0 #f7d7b0,
            -16px 124px 0 #c5a48d,
        
            -140px 128px 0 #c4d9b7,
            -136px 128px 0 #c5a48d,
            -132px 128px 0 #c5a48d,
            -128px 128px 0 #c5a48d,
            -124px 128px 0 #f7d7b0,
            -120px 128px 0 #f7d7b0,
            -116px 128px 0 #f7d7b0,
            -112px 128px 0 #f7d7b0,
            -108px 128px 0 #c5a48d,
            -104px 128px 0 #c5a48d,
            -100px 128px 0 #c5a48d,
              -96px 128px 0 #f7d7b0,
              -88px 128px 0 #c5a48d,
              -84px 128px 0 #c5a48d,
              -80px 128px 0 #c5a48d,
              -76px 128px 0 #c5a48d,
              -72px 128px 0 #f7d7b0,
              -68px 128px 0 #f7d7b0,
              -64px 128px 0 #f7d7b0,
              -60px 128px 0 #f7d7b0,
              -56px 128px 0 #df5346,
              -52px 128px 0 #df5346,
              -48px 128px 0 #df5346,
              -44px 128px 0 #df5346,
              -40px 128px 0 #a12b20,
              -36px 128px 0 #a12b20,
              -32px 128px 0 #a12b20,
              -28px 128px 0 #df5346,
              -24px 128px 0 #df5346,
              -20px 128px 0 #f7d7b0,
              -16px 128px 0 #c5a48d,
              -12px 128px 0 #c5a48d,
        
            -140px 132px 0 #c4d9b7,
            -136px 132px 0 #c4d9b7,
            -132px 132px 0 #c4d9b7,
            -128px 132px 0 #c5a48d,
            -124px 132px 0 #f7d7b0,
            -120px 132px 0 #f7d7b0,
            -116px 132px 0 #f7d7b0,
            -112px 132px 0 #f7d7b0,
            -108px 132px 0 #f7d7b0,
            -104px 132px 0 #f7d7b0,
            -100px 132px 0 #c5a48d,
            -96px 132px 0 #c5a48d,
            -88px 132px 0 #c4d9b7,
            -84px 132px 0 #c5a48d,
            -80px 132px 0 #c5a48d,
            -76px 132px 0 #c5a48d,
            -72px 132px 0 #f7d7b0,
            -68px 132px 0 #c5a48d,
            -64px 132px 0 #f7d7b0,
            -60px 132px 0 #f7d7b0,
            -56px 132px 0 #a12b20,
            -52px 132px 0 #a12b20,
            -48px 132px 0 #a12b20,
            -44px 132px 0 #a12b20,
            -40px 132px 0 #a12b20,
            -36px 132px 0 #a12b20,
            -32px 132px 0 #a12b20,
            -28px 132px 0 #a12b20,
            -24px 132px 0 #a12b20,
            -20px 132px 0 #f7d7b0,
            -16px 132px 0 #c5a48d,
        
            -136px 136px 0 #c5a48d,
            -132px 136px 0 #c5a48d,
            -128px 136px 0 #c5a48d,
            -124px 136px 0 #c5a48d,
            -120px 136px 0 #c5a48d,
            -116px 136px 0 #c5a48d,
            -112px 136px 0 #c5a48d,
            -108px 136px 0 #f7d7b0,
            -104px 136px 0 #f7d7b0,
            -100px 136px 0 #f7d7b0,
              -88px 136px 0 #c4d9b7,
              -84px 136px 0 #c5a48d,
              -80px 136px 0 #c5a48d,
              -76px 136px 0 #c5a48d,
              -72px 136px 0 #f7d7b0,
              -68px 136px 0 #c5a48d,
              -64px 136px 0 #f7d7b0,
              -60px 136px 0 #f7d7b0,
              -56px 136px 0 #6d200e,
              -52px 136px 0 #6d200e,
              -48px 136px 0 #a12b20,
              -44px 136px 0 #a12b20,
              -40px 136px 0 #a12b20,
              -36px 136px 0 #a12b20,
              -32px 136px 0 #a12b20,
              -28px 136px 0 #a12b20,
              -24px 136px 0 #f7d7b0,
              -20px 136px 0 #f7d7b0,
              -16px 136px 0 #c5a48d,
              -12px 136px 0 #c5a48d,
        
              -140px 140px 0 #c4d9b7,
              -136px 140px 0 #c5a48d,
              -132px 140px 0 #c5a48d,
              -128px 140px 0 #c5a48d,
              -124px 140px 0 #c5a48d,
              -120px 140px 0 #f7d7b0,
              -116px 140px 0 #c5a48d,
              -112px 140px 0 #c5a48d,
              -108px 140px 0 #c5a48d,
              -104px 140px 0 #c5a48d,
              -100px 140px 0 #c5a48d,
              -88px 140px 0 #c4d9b7,
              -84px 140px 0 #c5a48d,
              -80px 140px 0 #c5a48d,
              -76px 140px 0 #c5a48d,
              -72px 140px 0 #f7d7b0,
              -68px 140px 0 #c5a48d,
              -64px 140px 0 #f7d7b0,
              -60px 140px 0 #f7d7b0,
              -56px 140px 0 #a12b20,
              -52px 140px 0 #6d200e,
              -48px 140px 0 #a12b20,
              -44px 140px 0 #df5346,
              -40px 140px 0 #df5346,
              -36px 140px 0 #df5346,
              -32px 140px 0 #df5346,
              -28px 140px 0 #df5346,
              -24px 140px 0 #f7d7b0,
              -20px 140px 0 #f7d7b0,
              -16px 140px 0 #c5a48d,
              -12px 140px 0 #c5a48d,
                -8px 140px 0 #c5a48d,
        
            -144px 144px 0 #c4d9b7,
            -140px 144px 0 #c5a48d,
            -136px 144px 0 #c5a48d,
            -132px 144px 0 #c5a48d,
            -128px 144px 0 #c5a48d,
            -124px 144px 0 #c5a48d,
            -120px 144px 0 #c5a48d,
            -116px 144px 0 #f7d7b0,
            -112px 144px 0 #f7d7b0,
            -108px 144px 0 #f7d7b0,
            -104px 144px 0 #f7d7b0,
            -88px 144px 0 #c4d9b7,
            -84px 144px 0 #c5a48d,
            -80px 144px 0 #c5a48d,
            -76px 144px 0 #c5a48d,
            -72px 144px 0 #f7d7b0,
            -68px 144px 0 #f7d7b0,
            -64px 144px 0 #f7d7b0,
            -60px 144px 0 #f7d7b0,
            -56px 144px 0 #a12b20,
            -52px 144px 0 #df5346,
            -48px 144px 0 #df5346,
            -44px 144px 0 #df5346,
            -40px 144px 0 #df5346,
            -36px 144px 0 #df5346,
            -32px 144px 0 #df5346,
            -28px 144px 0 #df5346,
            -24px 144px 0 #f7d7b0,
            -20px 144px 0 #f7d7b0,
            -16px 144px 0 #c5a48d,
            -12px 144px 0 #c5a48d,
        
          -144px 148px 0 #c4d9b7,
          -140px 148px 0 #c5a48d,
          -136px 148px 0 #c5a48d,
          -132px 148px 0 #c5a48d,
          -128px 148px 0 #c5a48d,
          -124px 148px 0 #c5a48d,
          -120px 148px 0 #c5a48d,
          -116px 148px 0 #c5a48d,
          -112px 148px 0 #c5a48d,
          -108px 148px 0 #c5a48d,
          -104px 148px 0 #c5a48d,
          -100px 148px 0 #c5a48d,
            -88px 148px 0 #c4d9b7,
            -84px 148px 0 #c5a48d,
            -80px 148px 0 #c5a48d,
            -76px 148px 0 #c5a48d,
            -72px 148px 0 #f7d7b0,
            -68px 148px 0 #f7d7b0,
            -64px 148px 0 #f7d7b0,
            -60px 148px 0 #f7d7b0,
            -56px 148px 0 #a12b20,
            -52px 148px 0 #a12b20,
            -48px 148px 0 #df5346,
            -44px 148px 0 #df5346,
            -40px 148px 0 #df5346,
            -36px 148px 0 #df5346,
            -32px 148px 0 #df5346,
            -28px 148px 0 #df5346,
            -24px 148px 0 #f7d7b0,
            -20px 148px 0 #f7d7b0,
            -16px 148px 0 #c5a48d,
            -12px 148px 0 #c5a48d,
            -8px 148px 0 #c5a48d,
            -4px 148px 0 #c5a48d,
        
          -140px 152px 0 #c4d9b7,
          -136px 152px 0 #a12b20,
          -132px 152px 0 #a12b20,
          -128px 152px 0 #a12b20,
          -124px 152px 0 #a12b20,
          -120px 152px 0 #df5346,
          -116px 152px 0 #a12b20,
          -112px 152px 0 #a12b20,
          -108px 152px 0 #df5346,
          -104px 152px 0 #df5346,
            -88px 152px 0 #c4d9b7,
            -84px 152px 0 #c5a48d,
            -80px 152px 0 #c5a48d,
            -76px 152px 0 #c5a48d,
            -72px 152px 0 #f7d7b0,
            -68px 152px 0 #c5a48d,
            -64px 152px 0 #f7d7b0,
            -60px 152px 0 #f7d7b0,
            -56px 152px 0 #a12b20,
            -52px 152px 0 #a12b20,
            -48px 152px 0 #a12b20,
            -44px 152px 0 #df5346,
            -40px 152px 0 #a12b20,
            -36px 152px 0 #df5346,
            -32px 152px 0 #df5346,
            -28px 152px 0 #df5346,
            -24px 152px 0 #f7d7b0,
            -20px 152px 0 #f7d7b0,
            -16px 152px 0 #c5a48d,
            -12px 152px 0 #c5a48d,
            -8px 152px 0 #c5a48d,
            -4px 152px 0 #c5a48d,
        
            -140px 156px 0 #c4d9b7,
            -136px 156px 0 #a12b20,
            -132px 156px 0 #a12b20,
            -128px 156px 0 #a12b20,
            -124px 156px 0 #a12b20,
            -120px 156px 0 #df5346,
            -116px 156px 0 #a12b20,
            -112px 156px 0 #df5346,
            -108px 156px 0 #df5346,
            -104px 156px 0 #df5346,
              -88px 156px 0 #c4d9b7,
              -84px 156px 0 #c5a48d,
              -80px 156px 0 #c5a48d,
              -76px 156px 0 #c5a48d,
              -72px 156px 0 #f7d7b0,
              -68px 156px 0 #c5a48d,
              -64px 156px 0 #f7d7b0,
              -60px 156px 0 #f7d7b0,
              -56px 156px 0 #a12b20,
              -52px 156px 0 #a12b20,
              -48px 156px 0 #df5346,
              -44px 156px 0 #df5346,
              -40px 156px 0 #df5346,
              -36px 156px 0 #df5346,
              -32px 156px 0 #df5346,
              -28px 156px 0 #886953,
              -24px 156px 0 #f7d7b0,
              -20px 156px 0 #f7d7b0,
              -16px 156px 0 #c5a48d,
              -12px 156px 0 #c5a48d,
              -8px 156px 0 #c5a48d,
              -4px 156px 0 #c5a48d,
        
              -140px 160px 0 #c4d9b7,
              -136px 160px 0 #a12b20,
              -132px 160px 0 #6d200e,
              -128px 160px 0 #a12b20,
              -124px 160px 0 #a12b20,
              -120px 160px 0 #a12b20,
              -116px 160px 0 #a12b20,
              -112px 160px 0 #df5346,
              -108px 160px 0 #df5346,
              -104px 160px 0 #df5346,
                -88px 160px 0 #c4d9b7,
                -84px 160px 0 #c5a48d,
                -80px 160px 0 #c5a48d,
                -76px 160px 0 #c5a48d,
                -72px 160px 0 #f7d7b0,
                -68px 160px 0 #c5a48d,
                -64px 160px 0 #f7d7b0,
                -60px 160px 0 #f7d7b0,
                -56px 160px 0 #a12b20,
                -52px 160px 0 #a12b20,
                -48px 160px 0 #df5346,
                -44px 160px 0 #df5346,
                -40px 160px 0 #df5346,
                -36px 160px 0 #df5346,
                -32px 160px 0 #df5346,
                -28px 160px 0 #f7d7b0,
                -24px 160px 0 #f7d7b0,
                -20px 160px 0 #a12b20,
                -16px 160px 0 #a12b20,
                -12px 160px 0 #a12b20,
                -8px 160px 0 #a12b20,
        
            -136px 164px 0 #6d200e,
            -132px 164px 0 #6d200e,
            -128px 164px 0 #6d200e,
            -124px 164px 0 #6d200e,
            -120px 164px 0 #6d200e,
            -116px 164px 0 #6d200e,
            -112px 164px 0 #6d200e,
            -108px 164px 0 #6d200e,
              -88px 164px 0 #c4d9b7,
              -84px 164px 0 #c5a48d,
              -80px 164px 0 #c5a48d,
              -76px 164px 0 #c5a48d,
              -72px 164px 0 #f7d7b0,
              -68px 164px 0 #c5a48d,
              -64px 164px 0 #f7d7b0,
              -60px 164px 0 #f7d7b0,
              -56px 164px 0 #a12b20,
              -52px 164px 0 #df5346,
              -48px 164px 0 #df5346,
              -44px 164px 0 #df5346,
              -40px 164px 0 #df5346,
              -36px 164px 0 #df5346,
              -32px 164px 0 #886953,
              -28px 164px 0 #f7d7b0,
              -24px 164px 0 #f7d7b0,
              -20px 164px 0 #a12b20,
              -16px 164px 0 #a12b20,
              -12px 164px 0 #a12b20,
              -8px 164px 0 #a12b20,
        
            -136px 168px 0 #c4d9b7,
            -132px 168px 0 #6d200e,
            -128px 168px 0 #a12b20,
            -124px 168px 0 #a12b20,
            -120px 168px 0 #df5346,
            -116px 168px 0 #df5346,
            -112px 168px 0 #df5346,
            -108px 168px 0 #df5346,
              -88px 168px 0 #c4d9b7,
              -84px 168px 0 #c5a48d,
              -80px 168px 0 #c5a48d,
              -76px 168px 0 #c5a48d,
              -72px 168px 0 #f7d7b0,
              -68px 168px 0 #c5a48d,
              -64px 168px 0 #f7d7b0,
              -60px 168px 0 #f7d7b0,
              -56px 168px 0 #df5346,
              -52px 168px 0 #a12b20,
              -48px 168px 0 #df5346,
              -44px 168px 0 #df5346,
              -40px 168px 0 #df5346,
              -36px 168px 0 #df5346,
              -32px 168px 0 #886953,
              -28px 168px 0 #f7d7b0,
              -24px 168px 0 #f7d7b0,
              -20px 168px 0 #a12b20,
              -16px 168px 0 #a12b20,
              -12px 168px 0 #a12b20,
              -8px 168px 0 #a12b20,
        
          -136px 172px 0 #6d200e,
          -132px 172px 0 #6d200e,
          -128px 172px 0 #a12b20,
          -124px 172px 0 #a12b20,
          -120px 172px 0 #df5346,
          -116px 172px 0 #a12b20,
          -112px 172px 0 #df5346,
          -108px 172px 0 #df5346,
            -88px 172px 0 #c4d9b7,
            -84px 172px 0 #c5a48d,
            -80px 172px 0 #c5a48d,
            -76px 172px 0 #c5a48d,
            -72px 172px 0 #f7d7b0,
            -68px 172px 0 #c5a48d,
            -64px 172px 0 #f7d7b0,
            -60px 172px 0 #f7d7b0,
            -56px 172px 0 #a12b20,
            -52px 172px 0 #a12b20,
            -48px 172px 0 #df5346,
            -44px 172px 0 #df5346,
            -40px 172px 0 #df5346,
            -36px 172px 0 #df5346,
            -32px 172px 0 #886953,
            -28px 172px 0 #f7d7b0,
            -24px 172px 0 #f7d7b0,
            -20px 172px 0 #a12b20,
            -16px 172px 0 #a12b20,
            -12px 172px 0 #a12b20,
            -8px 172px 0 #a12b20,
        
            -136px 176px 0 #c4d9b7,
            -132px 176px 0 #6d200e,
            -128px 176px 0 #a12b20,
            -124px 176px 0 #a12b20,
            -120px 176px 0 #a12b20,
            -116px 176px 0 #df5346,
            -112px 176px 0 #df5346,
            -108px 176px 0 #df5346,
              -88px 176px 0 #c4d9b7,
              -84px 176px 0 #c5a48d,
              -80px 176px 0 #c5a48d,
              -76px 176px 0 #c5a48d,
              -72px 176px 0 #f7d7b0,
              -68px 176px 0 #c5a48d,
              -64px 176px 0 #f7d7b0,
              -60px 176px 0 #f7d7b0,
              -56px 176px 0 #df5346,
              -52px 176px 0 #df5346,
              -48px 176px 0 #df5346,
              -44px 176px 0 #df5346,
              -40px 176px 0 #df5346,
              -36px 176px 0 #df5346,
              -32px 176px 0 #886953,
              -28px 176px 0 #f7d7b0,
              -24px 176px 0 #f7d7b0,
              -20px 176px 0 #a12b20,
              -16px 176px 0 #a12b20,
              -12px 176px 0 #a12b20,
        
            -136px 180px 0 #c4d9b7,
            -132px 180px 0 #6d200e,
            -128px 180px 0 #a12b20,
            -124px 180px 0 #df5346,
            -120px 180px 0 #df5346,
            -116px 180px 0 #df5346,
            -112px 180px 0 #df5346,
            -108px 180px 0 #df5346,
            -88px 180px 0 #c4d9b7,
            -84px 180px 0 #c5a48d,
            -80px 180px 0 #c5a48d,
            -76px 180px 0 #c5a48d,
            -72px 180px 0 #f7d7b0,
            -68px 180px 0 #c5a48d,
            -64px 180px 0 #f7d7b0,
            -60px 180px 0 #f7d7b0,
            -56px 180px 0 #df5346,
            -52px 180px 0 #df5346,
            -48px 180px 0 #df5346,
            -44px 180px 0 #df5346,
            -40px 180px 0 #df5346,
            -36px 180px 0 #df5346,
            -32px 180px 0 #886953,
            -28px 180px 0 #f7d7b0,
            -24px 180px 0 #f7d7b0,
            -20px 180px 0 #a12b20,
            -16px 180px 0 #a12b20,
            -12px 180px 0 #a12b20,
        
          -136px 184px 0 #c4d9b7,
          -132px 184px 0 #6d200e,
          -128px 184px 0 #6d200e,
          -124px 184px 0 #df5346,
          -120px 184px 0 #a12b20,
          -116px 184px 0 #df5346,
          -112px 184px 0 #df5346,
          -108px 184px 0 #df5346,
            -88px 184px 0 #c4d9b7,
            -84px 184px 0 #c5a48d,
            -80px 184px 0 #c5a48d,
            -76px 184px 0 #c5a48d,
            -72px 184px 0 #f7d7b0,
            -68px 184px 0 #c5a48d,
            -64px 184px 0 #f7d7b0,
            -60px 184px 0 #f7d7b0,
            -56px 184px 0 #df5346,
            -52px 184px 0 #df5346,
            -48px 184px 0 #df5346,
            -44px 184px 0 #df5346,
            -40px 184px 0 #df5346,
            -36px 184px 0 #df5346,
            -32px 184px 0 #886953,
            -28px 184px 0 #f7d7b0,
            -24px 184px 0 #f7d7b0,
            -20px 184px 0 #a12b20,
            -16px 184px 0 #a12b20,
            -12px 184px 0 #a12b20,
        
            -136px 188px 0 #a12b20,
            -132px 188px 0 #6d200e,
            -128px 188px 0 #a12b20,
            -124px 188px 0 #df5346,
            -120px 188px 0 #df5346,
            -116px 188px 0 #df5346,
            -112px 188px 0 #df5346,
            -108px 188px 0 #df5346,
            -88px 188px 0 #c4d9b7,
            -84px 188px 0 #c5a48d,
            -80px 188px 0 #c5a48d,
            -76px 188px 0 #c5a48d,
            -72px 188px 0 #f7d7b0,
            -68px 188px 0 #c5a48d,
            -64px 188px 0 #f7d7b0,
            -60px 188px 0 #f7d7b0,
            -56px 188px 0 #df5346,
            -52px 188px 0 #df5346,
            -48px 188px 0 #df5346,
            -44px 188px 0 #df5346,
            -40px 188px 0 #df5346,
            -36px 188px 0 #df5346,
            -32px 188px 0 #886953,
            -28px 188px 0 #f7d7b0,
            -24px 188px 0 #f7d7b0,
            -16px 188px 0 #a12b20,
            -12px 188px 0 #a12b20,
        
            -140px 192px 0 #c4d9b7,
            -136px 192px 0 #a12b20,
            -132px 192px 0 #a12b20,
            -128px 192px 0 #a12b20,
            -124px 192px 0 #a12b20,
            -120px 192px 0 #a12b20,
            -116px 192px 0 #a12b20,
            -112px 192px 0 #a12b20,
            -108px 192px 0 #a12b20,
            -104px 192px 0 #df5346,
              -88px 192px 0 #c4d9b7,
              -84px 192px 0 #c5a48d,
              -80px 192px 0 #c5a48d,
              -76px 192px 0 #c5a48d,
              -72px 192px 0 #f7d7b0,
              -68px 192px 0 #c5a48d,
              -64px 192px 0 #f7d7b0,
              -60px 192px 0 #f7d7b0,
              -56px 192px 0 #312619,
              -52px 192px 0 #50402e,
              -48px 192px 0 #50402e,
              -44px 192px 0 #50402e,
              -40px 192px 0 #50402e,
              -36px 192px 0 #50402e,
              -32px 192px 0 #50402e,
              -28px 192px 0 #f7d7b0,
              -24px 192px 0 #f7d7b0,
              -16px 192px 0 #a12b20,
              -12px 192px 0 #a12b20,
        
              -140px 196px 0 #c4d9b7,
              -136px 196px 0 #a12b20,
              -132px 196px 0 #a12b20,
              -128px 196px 0 #df5346,
              -124px 196px 0 #a12b20,
              -120px 196px 0 #df5346,
              -116px 196px 0 #df5346,
              -112px 196px 0 #df5346,
              -108px 196px 0 #df5346,
              -104px 196px 0 #df5346,
              -88px 196px 0 #c4d9b7,
              -84px 196px 0 #c5a48d,
              -80px 196px 0 #c5a48d,
              -76px 196px 0 #c5a48d,
              -72px 196px 0 #f7d7b0,
              -68px 196px 0 #c5a48d,
              -64px 196px 0 #f7d7b0,
              -60px 196px 0 #f7d7b0,
              -56px 196px 0 #312619,
              -52px 196px 0 #50402e,
              -48px 196px 0 #50402e,
              -44px 196px 0 #50402e,
              -40px 196px 0 #50402e,
              -36px 196px 0 #50402e,
              -32px 196px 0 #50402e,
              -28px 196px 0 #f7d7b0,
              -24px 196px 0 #f7d7b0,
              -16px 196px 0 #a12b20,
              -12px 196px 0 #a12b20,
        
              -140px 200px 0 #c4d9b7,
              -136px 200px 0 #a12b20,
              -132px 200px 0 #a12b20,
              -128px 200px 0 #a12b20,
              -124px 200px 0 #df5346,
              -120px 200px 0 #a12b20,
              -116px 200px 0 #a12b20,
              -112px 200px 0 #df5346,
              -108px 200px 0 #df5346,
              -104px 200px 0 #df5346,
                -88px 200px 0 #c4d9b7,
                -84px 200px 0 #c5a48d,
                -80px 200px 0 #c5a48d,
                -76px 200px 0 #c5a48d,
                -72px 200px 0 #f7d7b0,
                -68px 200px 0 #c5a48d,
                -64px 200px 0 #f7d7b0,
                -60px 200px 0 #f7d7b0,
                -56px 200px 0 #312619,
                -52px 200px 0 #312619,
                -48px 200px 0 #50402e,
                -44px 200px 0 #df5346,
                -40px 200px 0 #df5346,
                -36px 200px 0 #50402e,
                -32px 200px 0 #312619,
                -28px 200px 0 #f7d7b0,
                -24px 200px 0 #f7d7b0,
                -16px 200px 0 #a12b20,
                -12px 200px 0 #a12b20,
        
              -136px 204px 0 #6d200e,
              -132px 204px 0 #6d200e,
              -128px 204px 0 #6d200e,
              -124px 204px 0 #6d200e,
              -120px 204px 0 #6d200e,
              -116px 204px 0 #a12b20,
              -112px 204px 0 #a12b20,
              -108px 204px 0 #a12b20,
              -88px 204px 0 #c4d9b7,
              -84px 204px 0 #c5a48d,
              -80px 204px 0 #c5a48d,
              -76px 204px 0 #c5a48d,
              -72px 204px 0 #f7d7b0,
              -68px 204px 0 #c5a48d,
              -64px 204px 0 #f7d7b0,
              -60px 204px 0 #f7d7b0,
              -56px 204px 0 #312619,
              -52px 204px 0 #312619,
              -48px 204px 0 #50402e,
              -44px 204px 0 #df5346,
              -40px 204px 0 #df5346,
              -36px 204px 0 #50402e,
              -32px 204px 0 #270e0b,
              -28px 204px 0 #f7d7b0,
              -24px 204px 0 #f7d7b0,
              -20px 204px 0 #50402e,
              -16px 204px 0 #50402e,
              -12px 204px 0 #50402e,
                -8px 204px 0 #50402e,
        
              -136px 208px 0 #c4d9b7,
              -132px 208px 0 #6d200e,
              -128px 208px 0 #6d200e,
              -124px 208px 0 #a12b20,
              -120px 208px 0 #df5346,
              -116px 208px 0 #df5346,
              -112px 208px 0 #df5346,
              -108px 208px 0 #df5346,
              -88px 208px 0 #c4d9b7,
              -84px 208px 0 #c5a48d,
              -80px 208px 0 #c5a48d,
              -76px 208px 0 #c5a48d,
              -72px 208px 0 #f7d7b0,
              -68px 208px 0 #c5a48d,
              -64px 208px 0 #f7d7b0,
              -60px 208px 0 #f7d7b0,
              -56px 208px 0 #270e0b,
              -52px 208px 0 #270e0b,
              -48px 208px 0 #50402e,
              -44px 208px 0 #50402e,
              -40px 208px 0 #50402e,
              -36px 208px 0 #50402e,
              -32px 208px 0 #270e0b,
              -28px 208px 0 #f7d7b0,
              -24px 208px 0 #f7d7b0,
              -16px 208px 0 #50402e,
              -12px 208px 0 #50402e,
                -8px 208px 0 #50402e,
        
              -136px 212px 0 #c4d9b7,
              -132px 212px 0 #6d200e,
              -128px 212px 0 #6d200e,
              -124px 212px 0 #6d200e,
              -120px 212px 0 #a12b20,
              -116px 212px 0 #df5346,
              -112px 212px 0 #df5346,
              -108px 212px 0 #df5346,
              -104px 212px 0 #df5346,
              -88px 212px 0 #c4d9b7,
              -84px 212px 0 #c5a48d,
              -80px 212px 0 #c5a48d,
              -76px 212px 0 #c5a48d,
              -72px 212px 0 #f7d7b0,
              -68px 212px 0 #c5a48d,
              -64px 212px 0 #f7d7b0,
              -60px 212px 0 #f7d7b0,
              -56px 212px 0 #270e0b,
              -52px 212px 0 #270e0b,
              -48px 212px 0 #270e0b,
              -44px 212px 0 #270e0b,
              -40px 212px 0 #270e0b,
              -36px 212px 0 #270e0b,
              -32px 212px 0 #270e0b,
              -28px 212px 0 #f7d7b0,
              -24px 212px 0 #f7d7b0,
              -20px 212px 0 #50402e,
              -16px 212px 0 #50402e,
              -12px 212px 0 #50402e,
                -8px 212px 0 #50402e,
                -4px 212px 0 #a69898,
        
              -136px 216px 0 #c4d9b7,
              -132px 216px 0 #a12b20,
              -128px 216px 0 #a12b20,
              -124px 216px 0 #6d200e,
              -120px 216px 0 #a12b20,
              -116px 216px 0 #a12b20,
              -112px 216px 0 #a12b20,
              -108px 216px 0 #a12b20,
              -104px 216px 0 #df5346,
              -100px 216px 0 #df5346,
              -88px 216px 0 #c4d9b7,
              -84px 216px 0 #c5a48d,
              -80px 216px 0 #c5a48d,
              -76px 216px 0 #c5a48d,
              -72px 216px 0 #f7d7b0,
              -68px 216px 0 #c5a48d,
              -64px 216px 0 #f7d7b0,
              -60px 216px 0 #f7d7b0,
              -56px 216px 0 #270e0b,
              -52px 216px 0 #270e0b,
              -48px 216px 0 #270e0b,
              -44px 216px 0 #270e0b,
              -40px 216px 0 #270e0b,
              -36px 216px 0 #270e0b,
              -32px 216px 0 #270e0b,
              -28px 216px 0 #f7d7b0,
              -24px 216px 0 #f7d7b0,
              -20px 216px 0 #50402e,
              -16px 216px 0 #50402e,
              -12px 216px 0 #50402e,
                -8px 216px 0 #50402e,
                -4px 216px 0 #a69898,
                0px 216px 0 #a69898,
        
            -136px 220px 0 #c4d9b7,
            -132px 220px 0 #6d200e,
            -128px 220px 0 #a12b20,
            -124px 220px 0 #a12b20,
            -120px 220px 0 #a12b20,
            -116px 220px 0 #a12b20,
            -112px 220px 0 #a12b20,
            -108px 220px 0 #a12b20,
            -104px 220px 0 #df5346,
            -100px 220px 0 #df5346,
              -88px 220px 0 #c4d9b7,
              -84px 220px 0 #c5a48d,
              -80px 220px 0 #c5a48d,
              -76px 220px 0 #c5a48d,
              -72px 220px 0 #f7d7b0,
              -68px 220px 0 #c5a48d,
              -64px 220px 0 #f7d7b0,
              -60px 220px 0 #f7d7b0,
              -56px 220px 0 #270e0b,
              -52px 220px 0 #270e0b,
              -48px 220px 0 #270e0b,
              -44px 220px 0 #270e0b,
              -40px 220px 0 #270e0b,
              -36px 220px 0 #270e0b,
              -32px 220px 0 #270e0b,
              -28px 220px 0 #f7d7b0,
              -24px 220px 0 #f7d7b0,
              -20px 220px 0 #50402e,
              -16px 220px 0 #50402e,
              -12px 220px 0 #50402e,
              -8px 220px 0 #50402e,
              -4px 220px 0 #a69898,
                0px 220px 0 #a69898,
                4px 220px 0 #cabdbd,
        
                -136px 224px 0 #c4d9b7,
                -132px 224px 0 #a12b20,
                -128px 224px 0 #a12b20,
                -124px 224px 0 #a12b20,
                -120px 224px 0 #a12b20,
                -116px 224px 0 #a12b20,
                -108px 224px 0 #a12b20,
                -104px 224px 0 #a12b20,
                -88px 224px 0 #c4d9b7,
                -84px 224px 0 #c5a48d,
                -80px 224px 0 #c5a48d,
                -76px 224px 0 #c5a48d,
                -72px 224px 0 #f7d7b0,
                -68px 224px 0 #c5a48d,
                -64px 224px 0 #f7d7b0,
                -60px 224px 0 #f7d7b0,
                -56px 224px 0 #270e0b,
                -52px 224px 0 #886953,
                -48px 224px 0 #886953,
                -44px 224px 0 #886953,
                -40px 224px 0 #270e0b,
                -36px 224px 0 #270e0b,
                -32px 224px 0 #270e0b,
                -28px 224px 0 #f7d7b0,
                -24px 224px 0 #f7d7b0,
                -20px 224px 0 #50402e,
                -16px 224px 0 #50402e,
                -12px 224px 0 #50402e,
                  -8px 224px 0 #50402e,
                  -4px 224px 0 #a69898,
                  0px 224px 0 #a69898,
                  4px 224px 0 #cabdbd,
        
            -176px 228px 0 #a12b20,
            -136px 228px 0 #c4d9b7,
            -132px 228px 0 #a12b20,
            -128px 228px 0 #a12b20,
            -124px 228px 0 #a12b20,
            -120px 228px 0 #a12b20,
            -116px 228px 0 #a12b20,
            -108px 228px 0 #a12b20,
            -104px 228px 0 #df5346,
              -88px 228px 0 #c4d9b7,
              -84px 228px 0 #c5a48d,
              -80px 228px 0 #c5a48d,
              -76px 228px 0 #c5a48d,
              -72px 228px 0 #f7d7b0,
              -68px 228px 0 #c5a48d,
              -64px 228px 0 #f7d7b0,
              -60px 228px 0 #f7d7b0,
              -56px 228px 0 #270e0b,
              -52px 228px 0 #886953,
              -48px 228px 0 #886953,
              -44px 228px 0 #886953,
              -40px 228px 0 #50402e,
              -36px 228px 0 #50402e,
              -32px 228px 0 #50402e,
              -28px 228px 0 #f7d7b0,
              -24px 228px 0 #f7d7b0,
              -16px 228px 0 #cabdbd,
              -12px 228px 0 #50402e,
              -8px 228px 0 #50402e,
              -4px 228px 0 #a69898,
                0px 228px 0 #a69898,
                4px 228px 0 #cabdbd,
        
            -172px 232px 0 #a12b20,
            -132px 232px 0 #c4d9b7,
            -128px 232px 0 #a12b20,
            -124px 232px 0 #a12b20,
            -120px 232px 0 #a12b20,
            -116px 232px 0 #a12b20,
            -108px 232px 0 #a12b20,
            -104px 232px 0 #a12b20,
            -88px 232px 0 #c4d9b7,
            -84px 232px 0 #c5a48d,
            -80px 232px 0 #c5a48d,
            -76px 232px 0 #c5a48d,
            -72px 232px 0 #f7d7b0,
            -68px 232px 0 #c5a48d,
            -64px 232px 0 #f7d7b0,
            -60px 232px 0 #f7d7b0,
            -56px 232px 0 #886953,
            -52px 232px 0 #886953,
            -48px 232px 0 #886953,
            -44px 232px 0 #886953,
            -40px 232px 0 #270e0b,
            -36px 232px 0 #270e0b,
            -32px 232px 0 #270e0b,
            -28px 232px 0 #f7d7b0,
            -24px 232px 0 #f7d7b0,
            -12px 232px 0 #cabdbd,
              -8px 232px 0 #cabdbd,
              -4px 232px 0 #a69898,
              0px 232px 0 #a69898,
              4px 232px 0 #cabdbd,
              8px 232px 0 #cabdbd,
        
            -168px 236px 0 #a12b20,
            -132px 236px 0 #c4d9b7,
            -128px 236px 0 #a12b20,
            -124px 236px 0 #a12b20,
            -120px 236px 0 #a12b20,
            -116px 236px 0 #a12b20,
            -108px 236px 0 #a12b20,
            -104px 236px 0 #a12b20,
              -88px 236px 0 #c4d9b7,
              -84px 236px 0 #c5a48d,
              -80px 236px 0 #c5a48d,
              -76px 236px 0 #c5a48d,
              -72px 236px 0 #f7d7b0,
              -68px 236px 0 #c5a48d,
              -64px 236px 0 #f7d7b0,
              -60px 236px 0 #270e0b,
              -56px 236px 0 #886953,
              -52px 236px 0 #886953,
              -48px 236px 0 #886953,
              -44px 236px 0 #886953,
              -40px 236px 0 #50402e,
              -36px 236px 0 #50402e,
              -32px 236px 0 #50402e,
              -28px 236px 0 #f7d7b0,
              -24px 236px 0 #f7d7b0,
              -4px 236px 0 #a69898,
                0px 236px 0 #a69898,
                4px 236px 0 #cabdbd,
                8px 236px 0 #cabdbd,
        
                -168px 240px 0 #a12b20,
                -164px 240px 0 #a12b20,
                -160px 240px 0 #a12b20,
                -156px 240px 0 #a12b20,
                -152px 240px 0 #a12b20,
                -128px 240px 0 #c4d9b7,
                -124px 240px 0 #a12b20,
                -120px 240px 0 #a12b20,
                -116px 240px 0 #df5346,
                -92px 240px 0 #c4d9b7,
                -88px 240px 0 #c5a48d,
                -84px 240px 0 #c5a48d,
                -80px 240px 0 #c5a48d,
                -76px 240px 0 #c5a48d,
                -72px 240px 0 #f7d7b0,
                -68px 240px 0 #c5a48d,
                -64px 240px 0 #f7d7b0,
                -60px 240px 0 #270e0b,
                -56px 240px 0 #886953,
                -52px 240px 0 #886953,
                -48px 240px 0 #886953,
                -44px 240px 0 #886953,
                -40px 240px 0 #270e0b,
                -36px 240px 0 #270e0b,
                -32px 240px 0 #270e0b,
                -28px 240px 0 #f7d7b0,
                -24px 240px 0 #f7d7b0,
                  -4px 240px 0 #a69898,
                  0px 240px 0 #a69898,
                  4px 240px 0 #cabdbd,
                  8px 240px 0 #cabdbd,
        
            -168px 244px 0 #a12b20,
            -164px 244px 0 #a12b20,
            -160px 244px 0 #a12b20,
            -156px 244px 0 #a12b20,
            -124px 244px 0 #c4d9b7,
            -120px 244px 0 #a12b20,
            -116px 244px 0 #df5346,
            -112px 244px 0 #a12b20,
              -92px 244px 0 #c4d9b7,
              -88px 244px 0 #c5a48d,
              -84px 244px 0 #c5a48d,
              -80px 244px 0 #c5a48d,
              -76px 244px 0 #c5a48d,
              -72px 244px 0 #f7d7b0,
              -68px 244px 0 #c5a48d,
              -64px 244px 0 #f7d7b0,
              -60px 244px 0 #886953,
              -56px 244px 0 #886953,
              -52px 244px 0 #886953,
              -48px 244px 0 #886953,
              -44px 244px 0 #886953,
              -40px 244px 0 #a12b20,
              -36px 244px 0 #a12b20,
              -32px 244px 0 #df5346,
              -28px 244px 0 #f7d7b0,
              -24px 244px 0 #f7d7b0,
              -4px 244px 0 #a69898,
                0px 244px 0 #a69898,
                4px 244px 0 #cabdbd,
                8px 244px 0 #cabdbd,
        
            -164px 248px 0 #a12b20,
            -160px 248px 0 #a12b20,
            -156px 248px 0 #a12b20,
            -152px 248px 0 #a12b20,
            -120px 248px 0 #a12b20,
            -116px 248px 0 #a12b20,
            -112px 248px 0 #df5346,
            -92px 248px 0 #c4d9b7,
            -88px 248px 0 #c5a48d,
            -84px 248px 0 #c5a48d,
            -80px 248px 0 #c5a48d,
            -76px 248px 0 #c5a48d,
            -72px 248px 0 #c5a48d,
            -68px 248px 0 #f7d7b0,
            -64px 248px 0 #886953,
            -60px 248px 0 #886953,
            -56px 248px 0 #886953,
            -52px 248px 0 #886953,
            -48px 248px 0 #886953,
            -44px 248px 0 #886953,
            -40px 248px 0 #a12b20,
            -36px 248px 0 #df5346,
            -32px 248px 0 #df5346,
            -28px 248px 0 #f7d7b0,
            -24px 248px 0 #f7d7b0,
              -4px 248px 0 #a69898,
              0px 248px 0 #a69898,
              4px 248px 0 #cabdbd,
              8px 248px 0 #cabdbd,
        
        
            -164px 252px 0 #a12b20,
            -160px 252px 0 #a12b20,
            -152px 252px 0 #a12b20,
            -116px 252px 0 #a12b20,
            -112px 252px 0 #df5346,
              -92px 252px 0 #c4d9b7,
              -88px 252px 0 #c5a48d,
              -84px 252px 0 #c5a48d,
              -80px 252px 0 #c5a48d,
              -76px 252px 0 #c5a48d,
              -72px 252px 0 #c5a48d,
              -68px 252px 0 #f7d7b0,
              -64px 252px 0 #886953,
              -60px 252px 0 #886953,
              -56px 252px 0 #886953,
              -52px 252px 0 #886953,
              -48px 252px 0 #886953,
              -44px 252px 0 #886953,
              -40px 252px 0 #a12b20,
              -36px 252px 0 #df5346,
              -28px 252px 0 #f7d7b0,
              -24px 252px 0 #f7d7b0,
              -4px 252px 0 #a69898,
                0px 252px 0 #a69898,
                4px 252px 0 #cabdbd,
                8px 252px 0 #cabdbd,
              12px 252px 0 #cabdbd,
        
            -164px 256px 0 #a12b20,
            -152px 256px 0 #a12b20,
              -96px 256px 0 #c5a48d,
              -92px 256px 0 #c5a48d,
              -88px 256px 0 #c5a48d,
              -84px 256px 0 #c5a48d,
              -80px 256px 0 #c5a48d,
              -76px 256px 0 #a12b20,
              -72px 256px 0 #886953,
              -68px 256px 0 #886953,
              -64px 256px 0 #886953,
              -60px 256px 0 #886953,
              -56px 256px 0 #886953,
              -52px 256px 0 #886953,
              -48px 256px 0 #886953,
              -44px 256px 0 #a12b20,
              -40px 256px 0 #df5346,
              -36px 256px 0 #df5346,
              -28px 256px 0 #f7d7b0,
              -4px 256px 0 #a69898,
                0px 256px 0 #a69898,
                4px 256px 0 #cabdbd,
                8px 256px 0 #cabdbd,
              12px 256px 0 #cabdbd,
        
          -148px 260px 0 #a12b20,
          -144px 260px 0 #a12b20,
          -100px 260px 0 #c4d9b7,
            -96px 260px 0 #c5a48d,
            -92px 260px 0 #c5a48d,
            -88px 260px 0 #c5a48d,
            -84px 260px 0 #c5a48d,
            -80px 260px 0 #c5a48d,
            -76px 260px 0 #a12b20,
            -72px 260px 0 #886953,
            -68px 260px 0 #886953,
            -64px 260px 0 #886953,
            -60px 260px 0 #886953,
            -56px 260px 0 #886953,
            -52px 260px 0 #886953,
            -48px 260px 0 #886953,
            -44px 260px 0 #a12b20,
            -40px 260px 0 #df5346,
            -32px 260px 0 #f7d7b0,
            -28px 260px 0 #f7d7b0,
            -4px 260px 0 #a69898,
              0px 260px 0 #a69898,
              4px 260px 0 #cabdbd,
              8px 260px 0 #cabdbd,
            12px 260px 0 #cabdbd,
        
        
          -140px 264px 0 #a12b20,
          -104px 264px 0 #a12b20,
          -100px 264px 0 #a12b20,
            -88px 264px 0 #a12b20,
            -84px 264px 0 #a12b20,
            -80px 264px 0 #a12b20,
            -48px 264px 0 #a12b20,
            -44px 264px 0 #a12b20,
            -40px 264px 0 #df5346,
            -4px 264px 0 #a69898,
              0px 264px 0 #a69898,
              4px 264px 0 #cabdbd,
              8px 264px 0 #cabdbd,
            12px 264px 0 #cabdbd,
        
          -136px 268px 0 #a12b20,
          -108px 268px 0 #a12b20,
          -104px 268px 0 #a12b20,
            -92px 268px 0 #c4d9b7,
            -88px 268px 0 #a12b20,
            -84px 268px 0 #a12b20,
            -48px 268px 0 #a12b20,
            -44px 268px 0 #a12b20,
            -40px 268px 0 #df5346,
        
            -132px 272px 0 #a12b20,
            -128px 272px 0 #a12b20,
            -124px 272px 0 #a12b20,
            -120px 272px 0 #a12b20,
            -116px 272px 0 #a12b20,
            -112px 272px 0 #a12b20,
            -96px 272px 0 #c4d9b7,
            -92px 272px 0 #a12b20,
            -88px 272px 0 #a12b20,
            -84px 272px 0 #df5346,
            -48px 272px 0 #a12b20,
            -44px 272px 0 #df5346,
            -40px 272px 0 #df5346,
        
              -96px 276px 0 #c4d9b7,
              -92px 276px 0 #a12b20,
              -88px 276px 0 #df5346,
              -84px 276px 0 #df5346,
              -48px 276px 0 #a12b20,
              -44px 276px 0 #50402e,
        
              -96px 280px 0 #c4d9b7,
              -92px 280px 0 #df5346,
              -88px 280px 0 #df5346,
              -48px 280px 0 #50402e,
              -44px 280px 0 #50402e,
        
              -96px 284px 0 #c4d9b7,
              -92px 284px 0 #50402e,
              -88px 284px 0 #50402e,
              -44px 284px 0 #50402e,
        
              -96px 288px 0 #c4d9b7,
              -92px 288px 0 #50402e,
              -88px 288px 0 #50402e,
              -44px 288px 0 #50402e,
        
              -96px 292px 0 #c4d9b7,
              -92px 292px 0 #50402e,
              -88px 292px 0 #50402e,
              -44px 292px 0 #50402e,
        
              -92px 296px 0 #50402e,
              -88px 296px 0 #50402e,
              -44px 296px 0 #50402e,
        
              -92px 300px 0 #50402e,
              -44px 300px 0 #50402e,
        
              -92px 304px 0 #50402e,
              -44px 304px 0 #50402e,
        
              -92px 308px 0 #50402e,
              -44px 308px 0 #50402e,
        
              -96px 312px 0 #545151,
              -92px 312px 0 #50402e,
              -88px 312px 0 #545151,
              -84px 312px 0 #545151,
              -80px 312px 0 #545151,
              -76px 312px 0 #545151,
              -72px 312px 0 #545151,
              -68px 312px 0 #545151,
              -64px 312px 0 #545151,
              -60px 312px 0 #545151,
              -56px 312px 0 #545151,
              -52px 312px 0 #545151,
              -48px 312px 0 #50402e,
              -44px 312px 0 #50402e,
              -40px 312px 0 #545151,
              -36px 312px 0 #545151,
              -32px 312px 0 #545151,
        
              -120px 316px 0 #545151,
              -116px 316px 0 #545151,
              -112px 316px 0 #545151,
              -108px 316px 0 #545151,
              -104px 316px 0 #545151,
              -100px 316px 0 #545151,
              -96px 316px 0 #545151,
              -92px 316px 0 #50402e,
              -88px 316px 0 #545151,
              -84px 316px 0 #545151,
              -80px 316px 0 #545151,
              -76px 316px 0 #545151,
              -72px 316px 0 #545151,
              -68px 316px 0 #545151,
              -64px 316px 0 #545151,
              -60px 316px 0 #545151,
              -56px 316px 0 #545151,
              -52px 316px 0 #545151,
              -48px 316px 0 #50402e,
              -44px 316px 0 #50402e,
              -40px 316px 0 #545151,
              -36px 316px 0 #545151,
              -32px 316px 0 #545151,
              -28px 316px 0 #545151,
              -24px 316px 0 #545151,
              -20px 316px 0 #545151,
              -16px 316px 0 #545151,
              -12px 316px 0 #545151,
        
              -128px 320px 0 #545151,
              -124px 320px 0 #545151,
              -120px 320px 0 #545151,
              -116px 320px 0 #545151,
              -112px 320px 0 #545151,
              -108px 320px 0 #545151,
              -104px 320px 0 #545151,
              -100px 320px 0 #545151,
              -96px 320px 0 #545151,
              -92px 320px 0 #50402e,
              -88px 320px 0 #50402e,
              -84px 320px 0 #545151,
              -80px 320px 0 #545151,
              -76px 320px 0 #545151,
              -72px 320px 0 #545151,
              -68px 320px 0 #545151,
              -64px 320px 0 #545151,
              -60px 320px 0 #545151,
              -56px 320px 0 #545151,
              -52px 320px 0 #a12b20,
              -48px 320px 0 #545151,
              -44px 320px 0 #a12b20,
              -40px 320px 0 #a12b20,
              -36px 320px 0 #df5346,
              -32px 320px 0 #545151,
              -28px 320px 0 #545151,
              -24px 320px 0 #545151,
              -20px 320px 0 #545151,
              -16px 320px 0 #545151,
              -12px 320px 0 #545151,
              -8px 320px 0 #545151,
              -4px 320px 0 #545151,
        
              -132px 324px 0 #545151,
              -128px 324px 0 #545151,
              -124px 324px 0 #545151,
              -120px 324px 0 #545151,
              -116px 324px 0 #545151,
              -112px 324px 0 #545151,
              -108px 324px 0 #545151,
              -104px 324px 0 #545151,
              -100px 324px 0 #545151,
              -96px 324px 0 #a12b20,
              -92px 324px 0 #a12b20,
              -88px 324px 0 #a12b20,
              -84px 324px 0 #545151,
              -80px 324px 0 #545151,
              -76px 324px 0 #545151,
              -72px 324px 0 #545151,
              -68px 324px 0 #545151,
              -64px 324px 0 #545151,
              -60px 324px 0 #545151,
              -56px 324px 0 #545151,
              -52px 324px 0 #545151,
              -48px 324px 0 #545151,
              -44px 324px 0 #545151,
              -40px 324px 0 #a12b20,
              -36px 324px 0 #a12b20,
              -32px 324px 0 #a12b20,
              -28px 324px 0 #545151,
              -24px 324px 0 #545151,
              -20px 324px 0 #545151,
              -16px 324px 0 #545151,
              -12px 324px 0 #545151,
                -8px 324px 0 #545151,
                -4px 324px 0 #545151,
                0px 324px 0 #545151,
        
                -128px 328px 0 #545151,
                -124px 328px 0 #545151,
                -120px 328px 0 #545151,
                -116px 328px 0 #545151,
                -112px 328px 0 #545151,
                -108px 328px 0 #545151,
                -104px 328px 0 #545151,
                -100px 328px 0 #a12b20,
                -96px 328px 0 #a12b20,
                -92px 328px 0 #545151,
                -88px 328px 0 #a12b20,
                -84px 328px 0 #545151,
                -80px 328px 0 #545151,
                -76px 328px 0 #545151,
                -72px 328px 0 #545151,
                -68px 328px 0 #545151,
                -64px 328px 0 #545151,
                -60px 328px 0 #545151,
                -56px 328px 0 #545151,
                -52px 328px 0 #545151,
                -48px 328px 0 #545151,
                -44px 328px 0 #545151,
                -40px 328px 0 #545151,
                -36px 328px 0 #545151,
                -32px 328px 0 #545151,
                -28px 328px 0 #545151,
                -24px 328px 0 #545151,
                -20px 328px 0 #545151,
                -16px 328px 0 #545151,
                -12px 328px 0 #545151,
                  -8px 328px 0 #545151,
                  -4px 328px 0 #545151,
        
                  -120px 332px 0 #545151,
                  -116px 332px 0 #545151,
                  -112px 332px 0 #545151,
                  -108px 332px 0 #545151,
                  -104px 332px 0 #545151,
                  -100px 332px 0 #545151,
                  -96px 332px 0 #545151,
                  -92px 332px 0 #545151,
                  -88px 332px 0 #545151,
                  -84px 332px 0 #545151,
                  -80px 332px 0 #545151,
                  -76px 332px 0 #545151,
                  -72px 332px 0 #545151,
                  -68px 332px 0 #545151,
                  -64px 332px 0 #545151,
                  -60px 332px 0 #545151,
                  -56px 332px 0 #545151,
                  -52px 332px 0 #545151,
                  -48px 332px 0 #545151,
                  -44px 332px 0 #545151,
                  -40px 332px 0 #545151,
                  -36px 332px 0 #545151,
                  -32px 332px 0 #545151,
                  -28px 332px 0 #545151,
                  -24px 332px 0 #545151,
                  -20px 332px 0 #545151,
                  -16px 332px 0 #545151,
                  -12px 332px 0 #545151,
        
                  -96px 336px 0 #545151,
                  -92px 336px 0 #545151,
                  -88px 336px 0 #545151,
                  -84px 336px 0 #545151,
                  -80px 336px 0 #545151,
                  -76px 336px 0 #545151,
                  -72px 336px 0 #545151,
                  -68px 336px 0 #545151,
                  -64px 336px 0 #545151,
                  -60px 336px 0 #545151,
                  -56px 336px 0 #545151,
                  -52px 336px 0 #545151,
                  -48px 336px 0 #545151,
                  -44px 336px 0 #545151,
                  -40px 336px 0 #545151,
                  -36px 336px 0 #545151;
        
        }
        </style>

        {{! ----------------------------------------------------------------------------------------- }}

        <link rel="stylesheet" href="assets/zigario.css" type="text/css">
        <div class="zigario">
        <div class="paper">
            <div class="container">
                <h1 class="shadow"><span data-b="1"> <i class="azwd"><i class="AZ _90"></i><i class="AZ _73 first"></i><i class="AZ _71"></i><i class="AZ _65"></i><i class="AZ _82"></i><i class="AZ _73 second"></i><i class="AZ _79"></i></i> </span></h1>
                <h1><span data-b="1"> <i class="azwd"><i class="AZ _90"></i><i class="AZ _73 first"></i><i class="AZ _71"></i><i class="AZ _65"></i><i class="AZ _82"></i><i class="AZ _73 second"></i><i class="AZ _79"></i></i> </span></h1>

                <div class="square">
                    <div class="hairdo">
                        <div class="side right">

                            <div class="wing rightbehind">
                                <div class="strand strand1"></div>
                                <div class="strand strand2"></div>
                                <div class="strand strand3"></div>
                                <div class="strand strand4"></div>
                                <div class="strand strand5"></div>
                                <div class="strand strand6"></div>
                                <div class="strand strand7"></div>
                                <div class="strand strand8"></div>
                                <div class="strand strand9"></div>
                                <div class="strand strand10"></div>
                                <div class="strand strand11"></div>
                                <div class="strand strand12"></div>
                                <div class="strand strand13"></div>
                                <div class="strand strand14"></div>
                                <div class="strand strand15"></div>
                                <div class="strand strand16"></div>
                                <div class="strand strand17"></div>
                                <div class="strand strand18"></div>
                                <div class="strand strand19"></div>
                                <div class="strand strand20"></div>
                                <div class="strand strand21"></div>
                                <div class="strand strand22"></div>
                                <div class="strand strand23"></div>
                                <div class="strand strand24"></div>
                                <div class="strand strand25"></div>
                                <div class="strand strand26"></div>
                                <div class="strand strand27"></div>
                                <div class="strand strand28"></div>
                                <div class="strand strand29"></div>
                                <div class="strand strand30"></div>
                            </div>


                            <div class="bangs right">
                                <div class="strand strand1"></div>
                                <div class="strand strand2"></div>
                                <div class="strand strand4"></div>
                                <div class="strand strand6"></div>
                                <div class="strand strand7"></div>
                                <div class="strand strand8"></div>
                                <div class="strand strand9"></div>
                                <div class="strand strand10"></div>
                                <div class="strand strand11"></div>
                                <div class="strand strand12"></div>
                                <div class="strand strand13"></div>
                                <div class="strand strand14"></div>
                                <div class="strand strand15"></div>
                                <div class="strand strand16"></div>
                                <div class="strand strand17"></div>
                                <div class="strand strand18"></div>
                                <div class="strand strand19"></div>
                                <div class="strand strand20"></div>
                                <div class="strand strand21"></div>
                                <div class="strand strand22"></div>
                                <div class="strand strand23"></div>
                                <div class="strand strand24"></div>
                                <div class="strand strand25"></div>
                                <div class="strand strand26"></div>
                                <div class="strand strand27"></div>
                                <div class="strand strand28"></div>
                                <div class="strand strand29"></div>
                                <div class="strand strand30"></div>
                                <div class="strand strand31"></div>
                                <div class="strand strand32"></div>
                                <div class="strand strand33"></div>
                                <div class="strand strand34"></div>
                                <div class="strand strand35"></div>
                                <div class="strand strand36"></div>
                                <div class="strand strand37"></div>
                                <div class="strand strand38"></div>
                                <div class="strand strand39"></div>
                                <div class="strand strand40"></div>
                                <div class="strand strand41"></div>
                                <div class="strand strand42"></div>
                                <div class="strand strand43"></div>
                                <div class="strand strand44"></div>
                                <div class="strand strand45"></div>
                                <div class="strand strand46"></div>
                                <div class="strand strand47"></div>
                                <div class="strand strand48"></div>
                                <div class="strand strand49"></div>
                                <div class="strand strand50"></div>
                            </div>

                            <div class="curl right">
                                <div class="strand strand1"></div>
                                <div class="strand strand2"></div>
                                <div class="strand strand3"></div>
                                <div class="strand strand4"></div>
                                <div class="strand strand6"></div>
                                <div class="strand strand7"></div>
                                <div class="strand strand8"></div>
                                <div class="strand strand10"></div>
                                <div class="strand strand11"></div>
                                <div class="strand strand12"></div>
                                <div class="strand strand13"></div>
                                <div class="strand strand14"></div>
                                <div class="strand strand15"></div>
                                <div class="strand strand16"></div>
                                <div class="strand strand17"></div>
                                <div class="strand strand18"></div>
                                <div class="strand strand19"></div>
                                <div class="strand strand21"></div>
                                <div class="strand strand22"></div>
                                <div class="strand strand23"></div>
                                <div class="strand strand24"></div>
                                <div class="strand strand25"></div>
                                <div class="strand strand26"></div>
                                <div class="strand strand27"></div>
                                <div class="strand strand28"></div>
                                <div class="strand strand29"></div>
                                <div class="strand strand30"></div>
                                <div class="strand strand31"></div>
                                <div class="strand strand32"></div>
                                <div class="strand strand33"></div>
                                <div class="strand strand34"></div>
                                <div class="strand strand35"></div>
                                <div class="strand strand36"></div>
                                <div class="strand strand37"></div>
                                <div class="strand strand38"></div>
                                <div class="strand strand39"></div>
                                <div class="strand strand40"></div>
                                <div class="strand strand41"></div>
                                <div class="strand strand42"></div>
                                <div class="strand strand43"></div>
                                <div class="strand strand44"></div>
                                <div class="strand strand45"></div>
                                <div class="strand strand46"></div>
                                <div class="strand strand47"></div>
                                <div class="strand strand48"></div>
                                <div class="strand strand49"></div>
                                <div class="strand strand50"></div>
                            </div>

                            <div class="curl rightop">
                                <div class="strand strand1"></div>
                                <div class="strand strand3"></div>
                                <div class="strand strand4"></div>
                                <div class="strand strand5"></div>
                                <div class="strand strand6"></div>
                                <div class="strand strand8"></div>
                                <div class="strand strand9"></div>
                                <div class="strand strand10"></div>
                                <div class="strand strand11"></div>
                                <div class="strand strand13"></div>
                                <div class="strand strand14"></div>
                                <div class="strand strand15"></div>
                                <div class="strand strand16"></div>
                                <div class="strand strand18"></div>
                                <div class="strand strand19"></div>
                                <div class="strand strand20"></div>
                                <div class="strand strand21"></div>
                                <div class="strand strand22"></div>
                                <div class="strand strand23"></div>
                                <div class="strand strand24"></div>
                                <div class="strand strand25"></div>
                                <div class="strand strand26"></div>
                                <div class="strand strand27"></div>
                                <div class="strand strand28"></div>
                                <div class="strand strand29"></div>
                                <div class="strand strand30"></div>
                                <div class="strand strand31"></div>
                                <div class="strand strand32"></div>
                                <div class="strand strand33"></div>
                                <div class="strand strand34"></div>
                                <div class="strand strand35"></div>
                                <div class="strand strand36"></div>
                                <div class="strand strand37"></div>
                                <div class="strand strand38"></div>
                                <div class="strand strand39"></div>
                                <div class="strand strand40"></div>
                                <div class="strand strand41"></div>
                                <div class="strand strand42"></div>
                                <div class="strand strand43"></div>
                                <div class="strand strand44"></div>
                                <div class="strand strand45"></div>
                                <div class="strand strand46"></div>
                                <div class="strand strand47"></div>
                                <div class="strand strand48"></div>
                                <div class="strand strand49"></div>
                                <div class="strand strand50"></div>
                            </div>



                        </div>

                        <div class="wing top">
                            <div class="strand strand1"></div>
                            <div class="strand strand2"></div>
                            <div class="strand strand3"></div>
                            <div class="strand strand4"></div>
                            <div class="strand strand5"></div>
                            <div class="strand strand6"></div>
                            <div class="strand strand7"></div>
                            <div class="strand strand8"></div>
                            <div class="strand strand9"></div>
                            <div class="strand strand10"></div>
                            <div class="strand strand11"></div>
                            <div class="strand strand12"></div>
                            <div class="strand strand13"></div>
                            <div class="strand strand14"></div>
                            <div class="strand strand15"></div>
                            <div class="strand strand16"></div>
                            <div class="strand strand17"></div>
                            <div class="strand strand18"></div>
                            <div class="strand strand19"></div>
                            <div class="strand strand20"></div>
                            <div class="strand strand21"></div>
                            <div class="strand strand22"></div>
                            <div class="strand strand23"></div>
                            <div class="strand strand24"></div>
                            <div class="strand strand25"></div>
                            <div class="strand strand26"></div>
                            <div class="strand strand27"></div>
                            <div class="strand strand28"></div>
                            <div class="strand strand29"></div>
                            <div class="strand strand30"></div>
                        </div>



                        <div class="hair left">
                            <div class="strand strand1"></div>
                            <div class="strand strand2"></div>
                            <div class="strand strand3"></div>
                            <div class="strand strand4"></div>
                            <div class="strand strand5"></div>
                            <div class="strand strand6"></div>
                            <div class="strand strand7"></div>
                            <div class="strand strand8"></div>
                            <div class="strand strand9"></div>
                            <div class="strand strand10"></div>
                            <div class="strand strand11"></div>
                            <div class="strand strand12"></div>
                            <div class="strand strand13"></div>
                            <div class="strand strand14"></div>
                            <div class="strand strand15"></div>
                            <div class="strand strand16"></div>
                            <div class="strand strand17"></div>
                            <div class="strand strand18"></div>
                            <div class="strand strand19"></div>
                            <div class="strand strand20"></div>
                            <div class="strand strand21"></div>
                            <div class="strand strand22"></div>
                            <div class="strand strand23"></div>
                            <div class="strand strand24"></div>
                            <div class="strand strand25"></div>
                            <div class="strand strand26"></div>
                            <div class="strand strand27"></div>
                            <div class="strand strand28"></div>
                            <div class="strand strand29"></div>
                            <div class="strand strand30"></div>
                            <div class="strand strand31"></div>
                            <div class="strand strand32"></div>
                            <div class="strand strand33"></div>
                            <div class="strand strand34"></div>
                            <div class="strand strand35"></div>
                            <div class="strand strand36"></div>
                            <div class="strand strand37"></div>
                            <div class="strand strand38"></div>
                            <div class="strand strand39"></div>
                            <div class="strand strand40"></div>
                            <div class="strand strand41"></div>
                            <div class="strand strand42"></div>
                            <div class="strand strand43"></div>
                            <div class="strand strand44"></div>
                            <div class="strand strand45"></div>
                            <div class="strand strand46"></div>
                            <div class="strand strand47"></div>
                            <div class="strand strand48"></div>
                            <div class="strand strand49"></div>
                            <div class="strand strand50"></div>
                        </div>


                        <div class="side left">


                            <div class="wing left">
                                <div class="strand strand1"></div>
                                <div class="strand strand2"></div>
                                <div class="strand strand3"></div>
                                <div class="strand strand4"></div>
                                <div class="strand strand5"></div>
                                <div class="strand strand6"></div>
                                <div class="strand strand7"></div>
                                <div class="strand strand8"></div>
                                <div class="strand strand9"></div>
                                <div class="strand strand10"></div>
                                <div class="strand strand11"></div>
                                <div class="strand strand12"></div>
                                <div class="strand strand13"></div>
                                <div class="strand strand14"></div>
                                <div class="strand strand15"></div>
                                <div class="strand strand16"></div>
                                <div class="strand strand17"></div>
                                <div class="strand strand18"></div>
                                <div class="strand strand19"></div>
                                <div class="strand strand20"></div>
                                <div class="strand strand21"></div>
                                <div class="strand strand22"></div>
                                <div class="strand strand23"></div>
                                <div class="strand strand24"></div>
                                <div class="strand strand25"></div>
                                <div class="strand strand26"></div>
                                <div class="strand strand27"></div>
                                <div class="strand strand28"></div>
                                <div class="strand strand29"></div>
                                <div class="strand strand30"></div>
                            </div>


                            <div class="curl leftop">
                                <div class="strand strand1"></div>
                                <div class="strand strand3"></div>
                                <div class="strand strand4"></div>
                                <div class="strand strand5"></div>
                                <div class="strand strand6"></div>
                                <div class="strand strand8"></div>
                                <div class="strand strand9"></div>
                                <div class="strand strand10"></div>
                                <div class="strand strand11"></div>
                                <div class="strand strand13"></div>
                                <div class="strand strand14"></div>
                                <div class="strand strand15"></div>
                                <div class="strand strand16"></div>
                                <div class="strand strand18"></div>
                                <div class="strand strand19"></div>
                                <div class="strand strand20"></div>
                                <div class="strand strand21"></div>
                                <div class="strand strand22"></div>
                                <div class="strand strand23"></div>
                                <div class="strand strand24"></div>
                                <div class="strand strand25"></div>
                                <div class="strand strand26"></div>
                                <div class="strand strand27"></div>
                                <div class="strand strand28"></div>
                                <div class="strand strand29"></div>
                                <div class="strand strand30"></div>
                                <div class="strand strand31"></div>
                                <div class="strand strand32"></div>
                                <div class="strand strand33"></div>
                                <div class="strand strand34"></div>
                                <div class="strand strand35"></div>
                                <div class="strand strand36"></div>
                                <div class="strand strand37"></div>
                                <div class="strand strand38"></div>
                                <div class="strand strand39"></div>
                                <div class="strand strand40"></div>
                                <div class="strand strand41"></div>
                                <div class="strand strand42"></div>
                                <div class="strand strand43"></div>
                                <div class="strand strand44"></div>
                                <div class="strand strand45"></div>
                                <div class="strand strand46"></div>
                                <div class="strand strand47"></div>
                                <div class="strand strand48"></div>
                                <div class="strand strand49"></div>
                                <div class="strand strand50"></div>
                            </div>


                            <div class="curl left">
                                <div class="strand strand1"></div>
                                <div class="strand strand3"></div>
                                <div class="strand strand4"></div>
                                <div class="strand strand5"></div>
                                <div class="strand strand7"></div>
                                <div class="strand strand8"></div>
                                <div class="strand strand10"></div>
                                <div class="strand strand11"></div>
                                <div class="strand strand12"></div>
                                <div class="strand strand13"></div>
                                <div class="strand strand14"></div>
                                <div class="strand strand15"></div>
                                <div class="strand strand16"></div>
                                <div class="strand strand17"></div>
                                <div class="strand strand18"></div>
                                <div class="strand strand19"></div>
                                <div class="strand strand20"></div>
                                <div class="strand strand21"></div>
                                <div class="strand strand22"></div>
                                <div class="strand strand23"></div>
                                <div class="strand strand24"></div>
                                <div class="strand strand25"></div>
                                <div class="strand strand26"></div>
                                <div class="strand strand27"></div>
                                <div class="strand strand28"></div>
                                <div class="strand strand29"></div>
                                <div class="strand strand30"></div>
                                <div class="strand strand31"></div>
                                <div class="strand strand32"></div>
                                <div class="strand strand33"></div>
                                <div class="strand strand34"></div>
                                <div class="strand strand35"></div>
                                <div class="strand strand36"></div>
                                <div class="strand strand37"></div>
                                <div class="strand strand38"></div>
                                <div class="strand strand39"></div>
                                <div class="strand strand40"></div>
                                <div class="strand strand41"></div>
                                <div class="strand strand42"></div>
                                <div class="strand strand43"></div>
                                <div class="strand strand44"></div>
                                <div class="strand strand45"></div>
                                <div class="strand strand46"></div>
                                <div class="strand strand47"></div>
                                <div class="strand strand48"></div>
                                <div class="strand strand49"></div>
                                <div class="strand strand50"></div>
                            </div>
                        </div>

                        <div class="curl topcurl">
                            <div class="strand strand1"></div>
                            <div class="strand strand2"></div>
                            <div class="strand strand3"></div>
                            <div class="strand strand4"></div>
                            <div class="strand strand6"></div>
                            <div class="strand strand7"></div>
                            <div class="strand strand8"></div>
                            <div class="strand strand10"></div>
                            <div class="strand strand11"></div>
                            <div class="strand strand12"></div>
                            <div class="strand strand13"></div>
                            <div class="strand strand14"></div>
                            <div class="strand strand15"></div>
                            <div class="strand strand16"></div>
                            <div class="strand strand17"></div>
                            <div class="strand strand18"></div>
                            <div class="strand strand19"></div>
                            <div class="strand strand21"></div>
                            <div class="strand strand22"></div>
                            <div class="strand strand23"></div>
                            <div class="strand strand24"></div>
                            <div class="strand strand25"></div>
                            <div class="strand strand26"></div>
                            <div class="strand strand27"></div>
                            <div class="strand strand28"></div>
                            <div class="strand strand29"></div>
                            <div class="strand strand30"></div>
                            <div class="strand strand31"></div>
                            <div class="strand strand32"></div>
                            <div class="strand strand33"></div>
                            <div class="strand strand34"></div>
                            <div class="strand strand35"></div>
                            <div class="strand strand36"></div>
                            <div class="strand strand37"></div>
                            <div class="strand strand38"></div>
                            <div class="strand strand39"></div>
                            <div class="strand strand40"></div>
                            <div class="strand strand41"></div>
                            <div class="strand strand42"></div>
                            <div class="strand strand43"></div>
                            <div class="strand strand44"></div>
                            <div class="strand strand45"></div>
                            <div class="strand strand46"></div>
                            <div class="strand strand47"></div>
                            <div class="strand strand48"></div>
                            <div class="strand strand49"></div>
                            <div class="strand strand50"></div>
                        </div>


                        <div class="ear left"></div>
                        <div class="ear right"></div>

                    </div>

                    <!-- hairdo -->

                    <div class="body">
                        <div class="armfore">
                            <div class="armshadow"></div>
                        </div>
                        <div class="bikini banner">
                            <div class="elbowshadow"></div>
                        </div>
                        <div class="bikini waistband">
                            <div class="topseam"></div>
                            <div class="topshadow"></div>
                        </div>


                        <div class="rightarm">
                            <div class="bicep"></div>
                            <div class="delt"></div>
                            <div class="underarmshadow"></div>
                        </div>
                        <div class="innerelbow"></div>


                        <div class="leftarm">
                            <div class="bicep"></div>
                            <div class="delt"></div>
                        </div>
                        <div class="waist">
                            <div class="shirt">
                                <div class="underboobs">
                                    <div class="underboob left"></div>


                                    <div class="underboob right"></div>
                                </div>
                                <div class="bottomshadow"></div>

                            </div>
                        </div>


                        <div class="upperbody">

                            <div class="trapcurve left"></div>
                            <div class="trap trapleft"></div>

                            <div class="trapcurve right"></div>
                            <div class="trap trapright"></div>

                            <div class="shoulders">
                                <div class="centershine"></div>

                                <div class="boob left"></div>
                                <div class="boob right"></div>

                                <div class="vein vein0"></div>
                                <div class="vein vein1"></div>
                                <div class="vein vein2"></div>
                                <div class="vein vein3"></div>
                                <div class="vein vein4"></div>

                                <div class="collarbone left"></div>
                                <div class="collarbone right"></div>

                                <div class="mole"></div>

                                <div class="shouldershine right"></div>
                                <div class="shouldershine left"></div>

                            </div>
                            <div class="collarcenter"></div>

                        </div>

                        <div class="strapshadow left"></div>
                        <div class="strapshadow right"></div>

                        <div class="bikini strap left"></div>
                        <div class="bikini strap right"></div>
                        <div class="bikini top left">
                            <div class="stitch top"></div>
                            <div class="stitch midshadow"></div>
                            <div class="stitch mid"></div>
                            <div class="stitch bottom"></div>
                        </div>
                        <div class="bikini top right">
                            <div class="stitch top"></div>
                            <div class="stitch midshadow"></div>
                            <div class="stitch mid"></div>
                            <div class="stitch bottom"></div>
                        </div>


                        <div class="armshadowcontainer">
                            <div class="abovearm shadow">
                                <div class="emptysleeve front">
                                    <div class="forearmin front"></div>
                                    <div class="forearm front"></div>
                                </div>

                                <div class="hand">
                                    <div class="wrist"></div>
                                    <div class="thumb">
                                        <div class="segment segment1"></div>
                                        <div class="segment segment2"></div>
                                        <div class="flex"></div>

                                    </div>

                                    <div class="finger finger4">
                                        <div class="segment segment1"></div>
                                        <div class="segment segment2"></div>
                                        <div class="segment segment3"></div>
                                    </div>

                                    <div class="cigarette">
                                    </div>

                                    <div class="finger finger3">
                                        <div class="segment segment1"></div>
                                        <div class="segment segment2"></div>
                                        <div class="segment segment3"></div>
                                    </div>
                                    <div class="palm front"></div>

                                    <div class="finger finger2">
                                        <div class="segment segment1"></div>
                                        <div class="segment segment2"></div>
                                        <div class="segment segment3"></div>
                                    </div>
                                    <div class="finger finger1">
                                        <div class="segment segment1"></div>
                                        <div class="segment segment2"></div>
                                        <div class="segment segment3"></div>
                                    </div>
                                </div>

                                <div class="forearmedge"></div>
                            </div>
                        </div>
                        <div class="abovearm flesh front">
                            <div class="emptysleeve front">
                                <div class="forearmin front"></div>
                                <div class="forearm front"></div>
                            </div>

                            <div class="hand">
                                <div class="wrist"></div>
                                <div class="thumb">
                                    <div class="segment segment1"></div>
                                    <div class="segment segment2"></div>
                                    <div class="flex"></div>
                                </div>

                                <div class="finger finger4">
                                    <div class="segment segment1"></div>
                                    <div class="segment segment2"></div>
                                    <div class="segment segment3"></div>
                                </div>

                                <div class="cigarette">
                                </div>

                                <div class="finger finger3">
                                    <div class="segment segment1"></div>
                                    <div class="segment segment2"></div>
                                    <div class="segment segment3"></div>
                                </div>
                                <div class="palm front"></div>

                                <div class="finger finger2">
                                    <div class="segment segment1"></div>
                                    <div class="segment segment2"></div>
                                    <div class="segment segment3"></div>
                                </div>
                                <div class="finger finger1">
                                    <div class="segment segment1"></div>
                                    <div class="segment segment2"></div>
                                    <div class="segment segment3"></div>
                                </div>
                            </div>

                            <div class="forearmedge"></div>
                        </div>

                        <div class="neck"></div>

                        <div class="cord left"></div>
                        <div class="cordshadow left"></div>

                        <div class="cord right"></div>
                        <div class="cordshadow right"></div>

                    </div>
                    <!-- /body -->
                    <div class="head">


                        <div class="face">



                            <div class="forehead"></div>

                            <div class="eyebrow left"></div>
                            <div class="eyebrow right"></div>


                            <div class="eye eleft">
                                <div class="eyelid"></div>
                                <div class="eyeliner inner"></div>
                                <div class="eyeliner outer"></div>
                                <div class="lash top lash1"></div>
                                <div class="lash top lash2"></div>
                                <div class="lash top lash3"></div>
                                <div class="lash top lash4"></div>
                                <div class="lash top lash5"></div>
                                <div class="lash top lash6"></div>
                                <div class="lash bottom lash1"></div>
                                <div class="lash bottom lash2"></div>
                                <div class="lash bottom lash3"></div>
                                <div class="lash bottom lash4"></div>
                                <div class="lash bottom lash5"></div>
                                <div class="lash bottom lash6"></div>
                                <div class="eyeball">
                                    <div class="iris leftiris"></div>
                                </div>
                            </div>


                            <div class="eye right">
                                <div class="eyelid"></div>
                                <div class="eyeliner inner"></div>
                                <div class="eyeliner outer"></div>
                                <div class="lash top lash1"></div>
                                <div class="lash top lash2"></div>
                                <div class="lash top lash3"></div>
                                <div class="lash top lash4"></div>
                                <div class="lash top lash5"></div>
                                <div class="lash top lash6"></div>
                                <div class="lash bottom lash1"></div>
                                <div class="lash bottom lash2"></div>
                                <div class="lash bottom lash3"></div>
                                <div class="lash bottom lash4"></div>
                                <div class="lash bottom lash5"></div>
                                <div class="lash bottom lash6"></div>
                                <div class="eyeball">
                                    <div class="iris"></div>
                                </div>
                            </div>

                            <div class="cheekbone left"></div>
                            <div class="cheekbone right"></div>
                            <div class="reflect"></div>

                            <div class="nose">
                                <div class="philtrum"></div>
                                <div class="tip left">
                                    <div class="nostril"></div>
                                </div>
                                <div class="tip right">
                                    <div class="nostril"></div>
                                </div>
                                <div class="bridge"></div>
                                <div class="divot"></div>
                            </div>

                            <div class="smile left"></div>
                            <div class="smile right"></div>


                            <div class="mouth">
                                <div class="bottomlip"></div>

                                <div class="toplips">
                                    <div class="toplip left"></div>
                                    <div class="toplip right"></div>
                                </div>
                                <div class="hole"></div>
                            </div>






                            <div class="freckle freckle1"></div>
                            <div class="freckle freckle2"></div>
                            <div class="freckle freckle3"></div>
                            <div class="freckle freckle4"></div>
                            <div class="freckle freckle5"></div>
                            <div class="freckle freckle6"></div>
                            <div class="freckle freckle7"></div>
                            <div class="freckle freckle8"></div>
                            <div class="freckle freckle9"></div>
                            <div class="freckle freckle10"></div>
                            <div class="freckle freckle11"></div>
                            <div class="freckle freckle12"></div>
                            <div class="freckle freckle13"></div>
                            <div class="freckle freckle14"></div>
                            <div class="freckle freckle15"></div>
                            <div class="freckle freckle16"></div>
                            <div class="freckle freckle17"></div>
                            <div class="freckle freckle18"></div>
                            <div class="freckle freckle19"></div>
                            <div class="freckle freckle20"></div>
                            <div class="freckle freckle21"></div>
                            <div class="freckle freckle22"></div>
                            <div class="freckle freckle23"></div>
                            <div class="freckle freckle24"></div>
                            <div class="freckle freckle25"></div>
                            <div class="freckle freckle26"></div>
                            <div class="freckle freckle27"></div>
                            <div class="freckle freckle28"></div>
                            <div class="freckle freckle29"></div>
                            <div class="freckle freckle30"></div>
                            <div class="freckle freckle31"></div>
                            <div class="freckle freckle32"></div>
                            <div class="freckle freckle33"></div>
                            <div class="freckle freckle34"></div>
                            <div class="freckle freckle35"></div>
                            <div class="freckle freckle36"></div>
                            <div class="freckle freckle37"></div>
                            <div class="freckle freckle38"></div>
                            <div class="freckle freckle39"></div>
                            <div class="freckle freckle40"></div>
                            <div class="freckle freckle41"></div>
                            <div class="freckle freckle42"></div>
                            <div class="freckle freckle43"></div>
                            <div class="freckle freckle44"></div>
                            <div class="freckle freckle45"></div>
                            <div class="freckle freckle46"></div>
                            <div class="freckle freckle47"></div>
                            <div class="freckle freckle48"></div>
                            <div class="freckle freckle49"></div>
                            <div class="freckle freckle50"></div>


                            <div class="blush left"></div>
                            <div class="blush right"></div>
                        </div>
                        <div class="scalp"></div>
                        <div class="curlshadow"></div>
                        <div class="wing facefront">
                            <div class="strand strand1"></div>
                            <div class="strand strand2"></div>
                            <div class="strand strand3"></div>
                            <div class="strand strand4"></div>
                            <div class="strand strand5"></div>
                            <div class="strand strand6"></div>
                            <div class="strand strand7"></div>
                            <div class="strand strand8"></div>
                            <div class="strand strand9"></div>
                            <div class="strand strand10"></div>
                            <div class="strand strand11"></div>
                            <div class="strand strand12"></div>
                            <div class="strand strand13"></div>
                            <div class="strand strand14"></div>
                            <div class="strand strand15"></div>
                            <div class="strand strand16"></div>
                            <div class="strand strand17"></div>
                            <div class="strand strand18"></div>
                            <div class="strand strand19"></div>










                        </div>
                        <div class="tophollow">

                            <div class="wing curlin">
                                <div class="strand strand1"></div>
                                <div class="strand strand2"></div>
                                <div class="strand strand3"></div>
                                <div class="strand strand4"></div>
                                <div class="strand strand5"></div>
                                <div class="strand strand6"></div>
                                <div class="strand strand7"></div>
                                <div class="strand strand8"></div>
                                <div class="strand strand9"></div>
                                <div class="strand strand10"></div>
                                <div class="strand strand11"></div>
                                <div class="strand strand12"></div>
                                <div class="strand strand13"></div>
                                <div class="strand strand14"></div>
                                <div class="strand strand15"></div>
                            </div>

                            <div class="wing curlup">
                                <div class="strand strand1"></div>
                                <div class="strand strand2"></div>
                                <div class="strand strand3"></div>
                                <div class="strand strand4"></div>
                                <div class="strand strand5"></div>
                                <div class="strand strand6"></div>
                                <div class="strand strand7"></div>
                                <div class="strand strand8"></div>
                                <div class="strand strand9"></div>
                                <div class="strand strand10"></div>
                                <div class="strand strand11"></div>
                                <div class="strand strand12"></div>
                                <div class="strand strand13"></div>
                                <div class="strand strand14"></div>
                                <div class="strand strand15"></div>
                            </div>
                        </div>


                    </div>

                    <div class="smoke"></div>

                    <!-- /head -->

                </div>


                <div class="lettering">



                    <h6><span> <i class="azwd"><i class="AZ _68"></i><i class="AZ _65"></i><i class="AZ _82"></i><i class="AZ _76"></i><i class="AZ _69"></i><i class="AZ _32"></i></i><i class="azwd"><i class="AZ _65"></i><i class="AZ _32"></i></i><i class="azwd"><i class="AZ _83"></i><i class="AZ _85"></i><i class="AZ _83"></i><i class="AZ _32"></i></i><i class="azwd"><i class="AZ _80"></i><i class="AZ _85"></i><i class="AZ _76"></i><i class="AZ _77"></i><i class="AZ _79"></i><i class="AZ _78"></i><i class="AZ _69"></i><i class="AZ _83"></i></i> </span>
                    </h6>



                    <h5><span data-b="1"> <i class="azwd"><i class="AZ _85"></i><i class="AZ _78"></i><i class="AZ _32"></i></i<i class="azwd"><i class="AZ _84"></i><i class="AZ _82"></i><i class="AZ _65"></i><i class="AZ _84"></i><i class="AZ _65"></i><i class="AZ _77"></i><i class="AZ _73"></i><i class="AZ _69"></i><i class="AZ _78"></i><i class="AZ _84"></i><i class="AZ _79"></i><i class="AZ _33"></i></i></span></h5>

                </div>



                <div class="cigbox">
                    <div class="cig cig1"></div>
                    <div class="cig cig2"></div>
                    <div class="cig cig3"></div>
                    <div class="cig cig4"></div>
                    <div class="cig cig5"></div>
                    <div class="front">
                        <h3><div class="alpha z"></div><div class="alpha i"></div><div class="alpha g"></div><div class="alpha a"></div><div class="alpha r"></div><div class="alpha i"></div><div class="alpha o"></div></h3>

                        <div class="designelement"></div>
                    </div>
                    <div class="innerbox"></div>
                    <div class="bottombox">
                        <div class="designelement"></div>
                    </div>
                </div>

            </div>
      <div>
      </div>
    </div>
  </section>
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