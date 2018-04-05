const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const db = require('./db/model.js');
const seed = require('./initialdbSeed.js');
const cors = require('cors')
const request = require('request');
const https = require('https');
const mongoose = require('mongoose');
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(morgan('dev'));

mongoose.connect('mongodb://localhost:27017/CryptoCurrency');

//app.use('/', (req, res) => res.sendFile(path.join(__dirname + '/public/index.html')));
app.use('/', express.static(path.join(__dirname + '/public')));

app.use('/api/:start/:end', (req, res) => {
  db.findLatest((latestDate) => {
    let latest = latestDate[0].date;
    let today = new Date();
    let currentDate = seed.formatDate(today);
    console.log(latest, currentDate);
    if(latest !== currentDate) {
      seed.seedDb(latest, currentDate);
    }
    let start = req.params.start;
    let end = req.params.end;
    let url = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start}&end=${end}`;
    var options = {
      "method": "get",
      "url": url
    };
    axios(options)
    .then((response) => {
      res.send(response.data.bpi);
    })
    .catch((err) => {
      console.log(err);
    })
  })

})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
