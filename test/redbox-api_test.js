'use strict';

var redbox = require('../lib/redbox-api');
var assert = require('should');

describe('redbox', function () {

  // it('should be awesome', function () {
  //   redboxApi().should.equal('awesome');
  // });

  var apiKey = '12345';

  it('should return games', function () {
    redbox(apiKey).games.all().then(console.log);
  });

  it('should return inventory', function () {
    redbox(apiKey).inventory.byPostalCode(53051).then(console.log);
  });

  it('should return movies', function () {
    redbox(apiKey).movies.all().then(console.log);
  });

  it('should return products', function () {
    redbox(apiKey).products.all().then(console.log);
  });

  it('should return stores', function () {
    redbox(apiKey).stores.byPostalCode(53051).then(console.log).catch(console.log);
  });

});
