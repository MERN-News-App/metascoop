const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Bcrypt = require('mongoose-bcrypt')
const passportLocalMongoose = require('passport-local-mongoose');


const User = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
  },

    username: {
        type: String,
        unique: true,
        required: true,
        default: ""
    },


});


User.plugin(passportLocalMongoose)


module.exports = mongoose.model('User', User);