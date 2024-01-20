var express = require('express');
var router = express.Router();
const userController = require('./user.controller')

router.get('/', userController.getUsers);
router.get('/:id',userController.getUserById);
router.post('/', userController.createUser);
router.delete('/:id',userController.findByIdAndDelete);

module.exports = router;
