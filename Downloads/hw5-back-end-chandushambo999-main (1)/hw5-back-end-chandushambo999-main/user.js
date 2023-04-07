var mongoose = require("mongoose");


var UserSchema = mongoose.Schema({
        username: String,
    password: String,
})
module.exports = mongoose.model('user', UserSchema);
