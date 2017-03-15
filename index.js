var path = require('path');
var request = require('request');
var es = require('event-stream');
var through = require('through2');
var File = require('vinyl');

module.exports = function(urls, options) {
  return es.readArray(urls).pipe(es.map(function(data, cb) {
    var url = data;
    request({
      url: url,
    }, function(error, response, body) {
      if (!error) {
        var file = new File({
          cwd: '/',
          base: path.dirname(url),
          path: url,
          contents: new Buffer(body),
        });
        cb(null, file);
      }
    });
  }));
};
