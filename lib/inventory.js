'use strict';

var Client = require('./client');

function InventoryClient(apiKey) {
  var baseUrl = 'https://api.redbox.com/v3/inventory/stores';
  var self = InventoryClient.prototype.isPrototypeOf(this) ? this : new InventoryClient();
  Client.call(self, baseUrl, apiKey);
  return self;
}

InventoryClient.prototype = Object.create(Client.prototype);

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
