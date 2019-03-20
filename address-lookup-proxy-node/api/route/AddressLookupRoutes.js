'use strict';
module.exports = function(app) {
  var addressLookup = require('../controller/AddressLookupController');

  // todoList Routes
  app.route('/address/:postcode/:house')
    .get(addressLookup.lookupAddress);
};