var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: String,
    address: String,
    avatar:String,
    email: {
        type:String,
        unique: true
    },
    password:String,
    created: { 
        type: Date,
        default: Date.now
    }
});

var User = mongoose.model('User', userSchema);
  
 module.exports = User;