const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: String,
    firstName:String,
    lastName: String,
});
const model = mongoose.model('employee', EmployeeSchema);

module.exports=model;