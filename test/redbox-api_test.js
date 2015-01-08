'use strict';

var redbox = require('../lib/redbox-api');
var assert = require('should');

describe('redbox', function () {

  // it('should be awesome', function () {
  //   redboxApi().should.equal('awesome');
  // });

  var apiKey = '12345';

  describe('games', function () {
    it('should return all games', function () {
      redbox(apiKey).games.all().then(console.log);
    });

    it('should return default games', function () {
      redbox(apiKey).games.default().then(console.log);
    });
  });

  describe('inventory', function () {
    it('should return inventory by store id', function () {
      redbox(apiKey).inventory.byStoreId(1).then(console.log);
    });

    it('should return inventory by postal code', function () {
      redbox(apiKey).inventory.byPostalCode(53051).then(console.log);
    });

    it('should return inventory by latitude/longitude', function () {
      redbox(apiKey).inventory.byCoordinates(12345, 67890).then(console.log);
    });
  });

  describe('movies', function () {
    it('should return all movies', function () {
      redbox(apiKey).movies.all().then(console.log);
    });

    it('should return movies that are coming soon', function () {
      redbox(apiKey).movies.comingSoon().then(console.log);
    });

    it('should return default movies', function () {
      redbox(apiKey).movies.default().then(console.log);
    });

    it('should return top 20 movies', function () {
      redbox(apiKey).movies.top20().then(console.log);
    });
  });

  describe('products', function () {
    it('should return all products', function () {
      redbox(apiKey).products.all().then(console.log);
    });

    it('should return products by id', function () {
      redbox(apiKey).products.byId(1).then(console.log);
    });

    it('should return products for multiple ids', function () {
      redbox(apiKey).products.byIds([1, 2, 2]).then(console.log);
    });

    it('should return products for a query', function () {
      redbox(apiKey).products.byQuery('this is a query').then(console.log);
    });
  });

  describe('stores', function () {

    it('should return all stores', function () {
      redbox(apiKey).stores.all().then(console.log).catch(console.log);
    });

    it('should return stores by latitude/longitude', function () {
      redbox(apiKey).stores.byCoordinates(12345, 67890).then(console.log).catch(console.log);
    });

    it('should return stores by postal code', function () {
      redbox(apiKey).stores.byPostalCode(53051).then(console.log).catch(console.log);
    });

    it('should return stores for multiple store ids', function () {
      redbox(apiKey).stores.byIds([1, 2, 2]).then(console.log).catch(console.log);
    });
  });

});
