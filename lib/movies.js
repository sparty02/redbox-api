'use strict';

var Client = require('./client');

function MoviesClient(apiKey) {
  var baseUrl = 'https://api.redbox.com/v3/products/movies';
  var self = MoviesClient.prototype.isPrototypeOf(this) ? this : new MoviesClient();
  Client.call(self, baseUrl, apiKey);
  return self;
}

MoviesClient.prototype = Object.create(Client.prototype);

MoviesClient.prototype.all = function () {
  var request = {
    path : '?apiKey=:apiKey'
  };

  return this.getEntity(request);
};

MoviesClient.prototype.comingSoon = function () {
  var request = {
    path : 'comingsoon?apiKey=:apiKey'
  };

  return this.getEntity(request);
};

MoviesClient.prototype.default = function () {
  var request = {
    path : 'default?apiKey=:apiKey'
  };

  return this.getEntity(request);
};

MoviesClient.prototype.top20 = function (period) {
  var request = {
    path : 'top20?apiKey=:apiKey&period=:period',
    params : {
      period : period
    }
  };

  return this.getEntity(request);
};

module.exports = MoviesClient;
