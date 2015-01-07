'use strict';

var rest = require('rest');
var pathPrefix = require('rest/interceptor/pathPrefix');
var errorCode = require('rest/interceptor/errorCode');
var mime = require('rest/interceptor/mime');
var defaultRequest = require('rest/interceptor/defaultRequest');
var q = require('q');

function Client (baseUrl, apiKey) {
  var self = Client.prototype.isPrototypeOf(this) ? this : new Client();
  self.client = rest.wrap(mime)
                .wrap(errorCode, { code: 500 })
                .wrap(errorCode, { code: 401 })
                .wrap(pathPrefix, { prefix: baseUrl })
                .wrap(defaultRequest, { params : { apiKey : apiKey } });

  return self;
}

Client.prototype.getEntity = function (request) {
  return this.client(request).then(function (response){
    return response.entity;
  }).catch(function (response) {
    return q.reject(response.status);
  });
};

module.exports = Client;
