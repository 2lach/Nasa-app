const mongoose = require('mongoose');
const passport = require('passport');
require('../config/passport')(passport);

// initial schema for user to create bookmark
var VerifySchema = new mongoose.Schema({
    title: String,
    author: String,
    metadata: String,
    description: String,
    type:String,
    published_date: { type: Date },
    url: String
  });

  module.exports = mongoose.model('Verify', VerifySchema);