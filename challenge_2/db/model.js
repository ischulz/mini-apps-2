var mongoose = require('mongoose');

var ShoppingCart = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  city: String,
  state: String,
  zipcode: String,
  adress_line1: String,
  adress_line2: String,
  creditCardNum: String,
  expiryDate: String,
  cvv: String,
  billingZip: String,
});

var userEntry = mongoose.model('shopping', ShoppingCart);

function findAll(callback) {
  userEntry.find().then((result) => callback(result));
}

function insert(toInsert, callback) {
  userEntry.create(toInsert, callback);
}


exports.findAll = findAll;
exports.insert = insert;
exports.userEntry = userEntry;
