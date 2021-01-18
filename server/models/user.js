const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Bcrypt = require('mongoose-bcrypt')


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
});


// User.plugin(require('mongoose-bcrypt'));

// User.statics.findByUsername = function (user) {
//     return this.find({username: user});
// }

// User.statics.findByEmail = function (user) {
//     return this.find({email: user});
// }

// User.methods.isValidPassword = async function(password) {
//     const user = this;
//     const compare = await bcrypt.compare(password, user.password);
  
//     return compare;
// }

module.exports = mongoose.model('User', UserSchema);
