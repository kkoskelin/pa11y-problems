const express = require('express');
const app = express();
const port = 8888;

const htmlDocument = `
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <title>This is a title</title>
    <style type="text/css">
    #some-gif {
      height: 600px;
      margin: auto;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      z-index: -1;
    }  
    </style>
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"
    ></script>
  </head>
  <body>

    <div id="Inner">
      <h1>Lorem Ipsum</h1>
      <h4>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h4>
      <h5>"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</h5>
      <hr>
    </div>

    <div id="lipsum">
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consequat tellus molestie, faucibus orci quis, hendrerit lorem. Nunc vitae erat quam. Sed volutpat eget sem vitae tincidunt. Proin molestie vitae tellus at interdum. In consequat urna efficitur ipsum consequat, eu tincidunt sapien euismod. Curabitur tincidunt ac leo in eleifend. Vestibulum non urna nec neque volutpat pretium.
      </p>
      <p>
      Praesent ac lacus fringilla, egestas nibh non, lobortis orci. Vivamus venenatis eleifend ultricies. Duis vel finibus arcu. Suspendisse volutpat nibh nunc, sit amet dignissim magna sodales quis. Mauris fringilla ante nibh. Nullam tincidunt blandit egestas. Ut quis pulvinar ipsum. Sed gravida diam vitae felis dapibus, quis volutpat nisl efficitur. Nam in varius tortor, sed porta risus.
      </p>
      <p>
      Vestibulum erat tortor, tincidunt nec mattis vitae, mattis a sapien. Donec molestie imperdiet diam at maximus. Curabitur pulvinar, arcu vel mollis lobortis, eros eros finibus sapien, non dapibus neque dolor vitae tellus. Integer id ornare purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vitae dolor arcu. Pellentesque venenatis nulla et elit aliquam, nec semper magna iaculis. Proin eget velit sodales, condimentum libero vel, vehicula tortor. Duis sed massa lobortis ante consequat luctus a id odio. Praesent eu mollis dui, at aliquam massa. Nulla quam leo, mattis vel bibendum sit amet, pellentesque eu sapien. Fusce non porttitor justo. Duis tempus, ligula sed rhoncus volutpat, tortor felis placerat nunc, a scelerisque eros odio id justo. Integer vulputate tincidunt odio non congue. Fusce mollis arcu in mauris dignissim porttitor.
      </p>
      <p>
      Curabitur a justo ut est sollicitudin feugiat. Sed ut ex mattis, molestie orci at, elementum augue. Nam tempus fringilla nibh, ut auctor leo accumsan eu. Duis facilisis nulla nec nibh suscipit, vel dictum eros ultrices. Donec nec magna libero. Vestibulum venenatis diam non fermentum aliquam. Nunc aliquam convallis ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus iaculis tincidunt condimentum. Sed vehicula semper risus, eu porttitor nulla pulvinar eget. Mauris cursus auctor consequat. Donec volutpat ligula a egestas porta. Sed luctus, neque a aliquet pharetra, ante neque vestibulum elit, et aliquet tortor neque id quam. Donec fermentum nibh non blandit mattis. Mauris id urna elit. Pellentesque tincidunt diam eu tincidunt consequat.
      </p>
      <p>
      Sed dignissim lacinia urna. Sed quam massa, ultricies vitae porta a, rhoncus ut diam. Aliquam finibus libero eget ante tristique finibus. Donec fermentum neque non venenatis laoreet. Nulla ullamcorper dolor nec nibh rhoncus, ut porttitor metus egestas. Nulla eget lorem luctus, rutrum est et, posuere sem. Duis efficitur gravida lectus, in efficitur lorem feugiat consequat. Phasellus fringilla hendrerit ex in semper. Mauris ultrices dui ligula, vel tristique elit bibendum a. Aliquam sed mollis orci, sed auctor leo. Duis orci purus, molestie nec enim sit amet, tincidunt varius dui. Integer iaculis arcu sed neque interdum, in dictum neque luctus. Pellentesque luctus luctus efficitur.
      </p>
    </div>
    <div id="some-gif"></div>

    <script>  
      $(document).ready(function() {
        // Giphy API defaults
        const giphy = {
          baseURL: "https://api.giphy.com/v1/gifs/",
          apiKey: "0UTRbFtkMxAplrohufYco5IY74U8hOes",
          tag: "fail",
          type: "random",
          rating: "pg"
        };
        const $gif_wrap = $("#some-gif");
        // Giphy API URL
        const giphyURL = encodeURI(
          giphy.baseURL +
            giphy.type +
            "?api_key=" +
            giphy.apiKey +
            "&tag=" +
            giphy.tag +
            "&rating=" +
            giphy.rating
        );

        // Call Giphy API and render data
        const newGif = () => $.getJSON(giphyURL, json => renderGif(json.data));

        // Display Gif in gif wrap container
        const renderGif = _giphy => {
          console.log(_giphy);
          // Set gif as bg image
          $gif_wrap.css({
            "background-image": 'url("' + _giphy.image_original_url + '")'
          });

        };
        newGif();

      });

    </script>

  </body>
  </html>
`;

app.get('/', (req, res) => {
  console.log(req.path, req.query); // / { '9': ''}
  res.send(htmlDocument);
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`),
);
