const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const upload = multer({ dest: './db/uploads'});
const { nexmo } = require('./lib/sendSMS');

const app = express();
const port = 3000;

app.use(cors());
app.use('/', express.static(path.join(__dirname, './../public/')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/sms', (req, res) => {

  let data = req.body.json.split(';');
  let outgoing = '1' + data[0].toString();
  let url = data[1];
  let $res = res;

  nexmo.message.sendSms('18777506942', outgoing, url, (err, res) => {
    if (err) {
      console.log('err = ', err);
      $res.send(400);
    } else {
      if (res.messages[0]['status'] === "0") {
        console.log("Message sent successfully.");
        $res.send(201);
      } else {
        console.log(`Message failed with error: ${res.messages[0]['error-text']}`);
        $res.send(400);
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Listening for request at http://localhost:${port}/`);
});