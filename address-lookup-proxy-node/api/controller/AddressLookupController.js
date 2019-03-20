'use strict';
const https = require("https");

exports.lookupAddress = function(req, res) {
  const getAddressHost = 'api.getAddress.io';
  const path = `/find/${req.params.postcode}/${req.params.house}`;
  const key = 'Ft_biuTX30ie06xJ-IQFLA18017';
  const params = {
    'api-key': key
  };

  https.get(requestBuilder(getAddressHost, path, params), response => {
    response.setEncoding('utf8');
    let body = '';
    response.on('data', data => {
        body += data;
    });
    response.on('end', () => {
        res.json(body);
    });
    response.on('error', () => {
        res.json('ERROR');
    });
  });
  
};

function requestBuilder(host, path, queryParams = {}) {
    let request = `https://${host}${path}`;
    const params = [];

    if(!isEmpty(queryParams)) request = `${request}?`;
    for (let param in queryParams) {
        params.push(`${param}=${queryParams[param]}`);
    }

    return `${request}${params.join('&')}`;
};

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}