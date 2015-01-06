'use strict';

var rest = require('rest');
var pathPrefix = require('rest/interceptor/pathPrefix');
var errorCode = require('rest/interceptor/errorCode');
var mime = require('rest/interceptor/mime');
var defaultRequest = require('rest/interceptor/defaultRequest');

function InventoryClient (apiKey) {
  var self = InventoryClient.prototype.isPrototypeOf(this) ? this : new InventoryClient();
  self.client = rest.wrap(mime)
                .wrap(errorCode, { code: 500 })
                .wrap(pathPrefix, { prefix: 'https://api.redbox.com/v3/inventory/stores' })
                .wrap(defaultRequest, { params : { apiKey : apiKey } });

  return self;
}

InventoryClient.prototype.getEntity = function (request) {
  return this.client(request).then(function (response){
    return response.entity;
  });
};

InventoryClient.prototype.byStoreId = function (id) {
  var request = {
    path : ':id?apiKey=:apiKey',
    params : {
      id : id
    }
  };

  return this.getEntity(request);
};

InventoryClient.prototype.byPostalCode = function (postalCode) {
  var request = {
    path : '/postalcode/:postalcode?apiKey=:apiKey',
    params : {
      postalCode : postalCode
    }
  };

  return this.getEntity(request);
};

InventoryClient.prototype.byCoordinates = function (latitude, longitude) {
  var request = {
    path : 'latlong/:lat,:long?apiKey=:apiKey',
    params : {
      lat : latitude,
      long : longitude
    }
  };

  return this.getEntity(request);
};

module.exports = InventoryClient;
