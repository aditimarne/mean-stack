var express = require('express');
var employeesRouter = require('./api/employee/employee.route.');
var userRouter = require('./api/user/user.route')
const mongoose = require("mongoose")
require('dotenv').config();
var app = express();
app.use(express.json());

mongoose.connect(process.env.mongodb).then(() => {
  console.log('Database connection established');
}).catch((error) => {
  console.log(error);
  console.log('Error connecting to Mongo');
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  if(req.method === "OPTIONS"){
    return res.status(200).end();
  }

  next();
});

app.use('/employees', employeesRouter);
app.use('/user', userRouter);

app.listen(3000, () => {
  console.log('listening on http://localhost:3000');
});
