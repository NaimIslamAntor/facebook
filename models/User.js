const mongoose = require('mongoose')
// const bcrypt = require('bcrypt')



const Schema = mongoose.Schema

const user = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },


},
{
    timestamps: true,
});


mongoose.models = {};

const User = mongoose.model('users', user);

module.exports = User