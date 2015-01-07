/*
 * redbox-api
 * https://github.com/sparty02/redbox-api
 *
 * Copyright (c) 2015 Ryan Dunckel
 * Licensed under the MIT license.
 */

'use strict';

var games = require('./games');
var inventory = require('./inventory');
var movies = require('./movies');
var products = require('./products');
var stores = require('./stores');

function redbox(apiKey) {
  return {
    games : games(apiKey),
    inventory : inventory(apiKey),
    movies : movies(apiKey),
    products : products(apiKey),
    stores : stores(apiKey)
  };
}

module.exports = redbox;
