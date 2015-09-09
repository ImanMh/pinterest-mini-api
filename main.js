var jsdom = require('jsdom'),
    express = require('express');

    var app = new express();

app.get('/pins', function (req, res) {
  jsdom.env(
    req.headers.target,
    ['http://code.jquery.com/jquery.js'],
    function (errors, window) {
      var srcs = [],
          pins = window.$('.pinHolder img.pinImg');
          pins.each(function () {
            var $pin = window.$(this);
            srcs.push($pin.attr('src'));
          });

          res.send(srcs);
    }
  );
});

var port = process.env.PORT || 30000;
app.listen(port, function () {
  console.log('app started...');
});
