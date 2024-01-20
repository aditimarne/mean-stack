const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    firstName:String,
    lastName: String,
});
const model = mongoose.model('User', userSchema);

module.exports=model;