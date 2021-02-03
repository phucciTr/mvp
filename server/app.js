const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());
app.use('/', express.static(path.join(__dirname, './../public/')));


app.listen(port, () => {
  console.log(`Listening for request at http://localhost:${port}/`);
});