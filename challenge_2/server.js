const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const db = require('./db/model.js');
const cors = require('cors')
const mongoose = require('mongoose');
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(morgan('dev'));

mongoose.connect('mongodb://localhost:27017/ShoppingCart');

//app.use('/', (req, res) => res.sendFile(path.join(__dirname + '/public/index.html')));
app.use('/', express.static(path.join(__dirname + '/public')));


app.post('/submit', (req, res) => {
  let expiryDate = `${req.params.expiryDate_month}/${req.params.year}`;
  let name = `${req.params.firstName} ${req.params.lastName}`;
  let userEntry = {
    name: req.body.params.name,
    email: req.body.params.email,
    password: req.body.params.password,
    city: req.body.params.city,
    state: req.body.params.state,
    zipcode: req.body.params.zipcode,
    adress_line1: req.body.params.adress_line1,
    adress_line2: req.body.params.adress_line2,
    creditCardNum: req.body.params.creditCardNum,
    expiryDate: req.body.params.expiryDate,
    cvv: req.body.params.cvv,
    billingZip: req.body.params.billingZip,
  };
  console.log(userEntry);
  db.insert(userEntry, (err) => {
    if(err) throw err;
    res.end();
  })
});


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
