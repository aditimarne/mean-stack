var express = require('express');
var router = express.Router();
const employeeController = require('./employee.controller')

router.get('/', employeeController.getEmployee);
router.get('/:id',employeeController.getEmployeeById);
router.post('/', employeeController.createEmployee);
router.delete('/:id',employeeController.findByIdAndDelete);

module.exports = router;
