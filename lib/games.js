'use strict';

var Client = require('./client');

function GamesClient(apiKey) {
  var baseUrl = 'https://api.redbox.com/v3/products/games';
  var self = GamesClient.prototype.isPrototypeOf(this) ? this : new GamesClient();
  Client.call(self, baseUrl, apiKey);
  return self;
}

GamesClient.prototype = Object.create(Client.prototype);

GamesClient.prototype.all = function () {
  var request = {
    path : '/?apiKey=:apiKey'
  };

  return this.getEntity(request);
};

GamesClient.prototype.default = function () {
  var request = {
    path : '/default?apiKey=:apiKey'
  };

  return this.getEntity(request);
};

module.exports = GamesClient;
