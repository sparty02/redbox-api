'use strict';

var Client = require('./client');

function ProductsClient(apiKey) {
  var baseUrl = 'https://api.redbox.com/v3/products';
  var self = ProductsClient.prototype.isPrototypeOf(this) ? this : new ProductsClient();
  Client.call(self, baseUrl, apiKey);
  return self;
}

ProductsClient.prototype = Object.create(Client.prototype);

ProductsClient.prototype.all = function () {
  var request = {
    path : '?apiKey=:apiKey',
  };

  return this.getEntity(request);
};

ProductsClient.prototype.byId = function (id) {
  var request = {
    path : ':id?apiKey=:apiKey',
    params : {
      id : id
    }
  };

  return this.getEntity(request);
};

ProductsClient.prototype.byIds = function (ids) {
  var request = {
    path : ':id?apiKey=:apiKey&productIds=:ids',
    params : {
      ids : ids.join(',')
    }
  };

  return this.getEntity(request);
};

ProductsClient.prototype.byQuery = function (query) {
  var request = {
    path : ':id?apiKey=:apiKey&q=:query',
    params : {
      query : query
    }
  };

  return this.getEntity(request);
};

module.exports = ProductsClient;
