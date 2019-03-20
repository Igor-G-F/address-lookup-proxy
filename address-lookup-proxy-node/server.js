var express = require('express'),
  app = express(),
  port = process.env.PORT || 8080;
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require('./api/route/AddressLookupRoutes');
routes(app);

app.listen(port);

console.log('address lookup proxy node RESTful API server started on: ' + port);