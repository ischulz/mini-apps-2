var mongoose = require('mongoose');

var CryptoCurrency = mongoose.Schema({
  date: {type: String, unique: true},
  price: String,
});

var crypto = mongoose.model('crypto', CryptoCurrency);

function findAll(callback) {
  crypto.find().then((result) => callback(result));
}

function insert(id, callback) {
  crypto.create(id, callback);
}

function findLatest(callback) {
  crypto.find().sort({$natural:-1}).limit(1).then((result => callback(result)));
}

exports.findAll = findAll;
exports.insert = insert;
exports.crypto = crypto;
exports.findLatest = findLatest;
