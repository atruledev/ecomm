const mongoose = require('mongoose');

const userScheme = new mongoose.Schema({
    username: {type: String},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    token:{type: String}

})

 const userData = mongoose.model('userData', userScheme)
 module.exports = userData;