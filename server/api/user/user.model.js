const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
emailId:{type:String, required: true},
Password:{type:String, required: true}
});
const model = mongoose.model('User', UserSchema);

module.exports=model;