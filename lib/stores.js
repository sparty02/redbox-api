'use strict';

var Client = require('./client');

function StoresClient(apiKey) {
  var baseUrl = 'https://api.redbox.com/v3/inventory/stores';
  var self = StoresClient.prototype.isPrototypeOf(this) ? this : new StoresClient();
  Client.call(self, baseUrl, apiKey);
  return self;
}

StoresClient.prototype = Object.create(Client.prototype);

StoresClient.prototype.all = function () {
  var request = {
    path : '?apiKey=:apiKey',
  };

  return this.getEntity(request);
};

StoresClient.prototype.byCoordinates = function (latitude, longitude) {
  var request = {
    path : 'latlong/:lat,:long?apiKey=:apiKey',
    params : {
      lat : latitude,
      long : longitude
    }
  };

  return this.getEntity(request);
};

StoresClient.prototype.byPostalCode = function (postalCode) {
  var request = {
    path : '/postalcode/:postalcode?apiKey=:apiKey',
    params : {
      postalCode : postalCode
    }
  };

  return this.getEntity(request);
};

StoresClient.prototype.byIds = function (ids) {
  var request = {
    path : ':id?apiKey=:apiKey&storeList=:ids',
    params : {
      ids : ids.join(',')
    }
  };

  return this.getEntity(request);
};

module.exports = StoresClient;
