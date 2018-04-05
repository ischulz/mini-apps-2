const mongoose = require('mongoose');
const db = require('./db/model.js');
const axios = require('axios');

mongoose.connect('mongodb://localhost:27017/CryptoCurrency');


const formatDate = (date) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

let today = new Date();
let currentDate = formatDate(today);

const seedDb = (lastDate, today) => {
  //let start = '2010-07-17';
  let url = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${lastDate}&end=${today}`;
  var options = {
    "method": "get",
    "url": url
  };
  axios(options)
  .then((response) => {
    let data = response.data.bpi;
    let resultArray = [];
    let keys = Array.prototype.slice.call(Object.keys(data));
    keys.forEach((entry, index) => {
      let crypto = {
        "date":entry,
        "price":keys[index]
      }
      resultArray.push(crypto);
    })
    db.insert(resultArray, function(err) {
      if (err) {
        throw err;
      }
      console.log('Inserted MockData!', data);
      mongoose.connection.close();
    });
  })
  .catch((err) => {
    console.log(err);
  })
};

// seedDb('2010-07-17', '2015-09-12');
exports.formatDate = formatDate;
exports.seedDb = seedDb;


