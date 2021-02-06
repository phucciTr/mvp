const Nexmo = require('nexmo');
const { NEXMO_KEY } = require('./../config/nexmo.js');

const nexmo = new Nexmo({
  apiKey: '433d3d58',
  apiSecret: NEXMO_KEY,
});

module.exports = { nexmo : nexmo }