var URL = require('url');
var path = require('path');
var fs = require('fs');
var request = require('request');
var es = require('event-stream');
var through = require('through2');
var File = require('vinyl');

module.exports = function(urls, options) {
  return es.readArray(urls).pipe(es.map(function(data, cb) {
    var url = data;
    var urlInfo = URL.parse(url);

    if (urlInfo.protocol) {
      request({
        url: url,
      }, function(error, response, body) {
        if (!error && (response.statusCode >= 200 && response.statusCode < 300)) {
          var file = new File({
            cwd: '/',
            base: path.dirname(url),
            path: url,
            contents: new Buffer(body),
          });
          cb(null, file);
        }
        else {
          error = new Error("Request " + url + " failed with status code:" + response.statusCode);
          cb(error);
        }
      });
    }
    else {
      var file = new File({
        cwd: '/',
        base: path.dirname(url),
        path: url,
        contents: fs.readFileSync(url),
        // contents: request(requestOptions).pipe(through2())
      });

      cb(null, file);
    }
  }));
};
