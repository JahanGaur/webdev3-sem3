const express = require('express');
const router = express.Router();
const { getEmployees, getEmployeeById, addEmployee, updateEmployee, deleteEmployee } = require('../controller/employeeController');


router.get('/', getEmployees);

router.get('/:Id', getEmployeeById);

// Create
router.post('/', addEmployee);

//  Update
router.put('/:Id', updateEmployee);

// Delete
router.delete('/:Id', deleteEmployee);

module.exports = router;