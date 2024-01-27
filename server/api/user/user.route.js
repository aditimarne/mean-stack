const usercontroller = require('./user.controller');
const router =require('express').Router();

router.post('/resgister' ,usercontroller.Resgister);
router.post('/login', usercontroller.login);

module.exports = router