const Nexmo = require('nexmo');
const { NEXMO_KEY } = require('./../config/nexmo.js');

const nexmo = new Nexmo({
  apiKey: '433d3d58',
  apiSecret: NEXMO_KEY,
});

var from = '18777506942';


// nexmo.message.sendSms(from, to, text, (err, res) => {
//   if (err) {
//     console.log('err = ', err);
//   } else {
//     if (res.messages[0]['status'] === "0") {
//         console.log("Message sent successfully.");
//     } else {
//         console.log(`Message failed with error: ${res.messages[0]['error-text']}`);
//     }
//   }
// });


module.exports = { nexmo : nexmo }