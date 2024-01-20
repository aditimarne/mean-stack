var express = require('express');
var usersRouter = require('./api/user/user.route.');
const mongoose = require("mongoose")
require('dotenv').config();
var app = express();

mongoose.connect(process.env.MONGODB).then(() => {
  console.log('Database connection established');
}).catch((error) => {
  console.log(error);
  console.log('Error connecting to Mongo');
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*')
  next();
});

app.use(express.json());
app.use('/users', usersRouter);

app.listen(3000, () => {
  console.log('listening on http://localhost:3000');
});
