const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        require: true
  },
    password: {
        type: String,
        require: true  
    },
    username: {
        type: String,
        unique: true,
        require: true,
        default: ""
    },

    createdDate: {
        type: Date,
        default: Date.now
    },
    lastLogin: {
        type: Date,
        default: Date.now
    }
})

UserSchema.plugin(require('mongoose-bcrypt'));
module.exports = UserSchema;