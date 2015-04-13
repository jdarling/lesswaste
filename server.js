var memwatch = require('memwatch');
var heapdump = require('heapdump');

var fs = require('fs');
var path = require('path');

var DummyCollection = require('./lib/dummydb').Collection;
var reformFilter = require('./lib/dummydb').reformFilter;

var logger = require('./lib/logger');

var utils = require('./lib/utils');
var config = require('./lib/config');

var webroot = path.join(__dirname, (config.web||{}).site||'/web/site');
var server = require('./lib/server');
var sift = require('sift');

logger.info('Static content folder: '+webroot);
server.path(webroot);

try{
  fs.mkdirSync('./logs');
}catch(e){}

server.route([
    {
      method: 'GET',
      path: '/{param*}',
      handler: {
        directory: {
          path: webroot
        }
      }
    },
  ]);
