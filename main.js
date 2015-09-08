'use strict';

var request = require('request'),
    fs = require('fs'),
    jsdom = require('jsdom');

// request.get('http://www.pinterest.com/imanmohamadi/web-designers-idea-board/', function (err, resp, body) {
//   console.log(body);
// });

// jsdom.env(
//   'http://www.pinterest.com/imanmohamadi/web-designers-idea-board/',
//   ['http://code.jquery.com/jquery.js'],
//   function (err, window) {
//     var srcs = [],
//         pins = window.$('.pinHolder img.pinImg');
//
//     pins.each(function (pin) {
//       srcs.push(pin.attr('src'));
//     });
//
//     console.log(JSON.stringify(srcs));
//   });

jsdom.env(
  'http://www.pinterest.com/imanmohamadi/web-designers-idea-board/',
  ['http://code.jquery.com/jquery.js'],
  function (errors, window) {
    var srcs = [],
        pins = window.$('.pinHolder img.pinImg');
        pins.each(function () {
          var $pin = window.$(this);
          srcs.push($pin.attr('src'));
        });

        console.log(JSON.stringify(srcs));
        // console.log(pins);
  }
);

// request('http://www.pinterest.com/imanmohamadi/web-designers-idea-board/').pipe(fs.createWriteStream('test.html'));
