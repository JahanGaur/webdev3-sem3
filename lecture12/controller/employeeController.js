const employees = require('../data/employeeData');

const getEmployees = (req, res) => {
    res.json(employees);
}

const getEmployeeById = (req, res) => {
    const id = req.params.Id
    const employee =  employees.find(emp => emp.empid == id);

    if (!employee) {
        res.status(404).json({ success: false, message: 'Employee not found' });
    }

    res.json(employee);
}

const addEmployee = (req, res) => {
    const newEmployee = req.body;
    employees.push({ empid: employees.length + 1, ...newEmployee });
    res.status(201).json({ success: true, message: 'Employee added successfully' });
}

const updateEmployee = (req, res) => {
    const id = req.params.Id;
    const updatedEmployee = req.body;
    const result = employees.find(emp => emp.empid == id);

    if (!result) {
        res.status(404).json({ success: false, message: 'Employee not found' });
    }
    result.name = updatedEmployee.name;
    result.salary = updatedEmployee.salary;
    result.department = updatedEmployee.department;
    res.json({ success: true, message: 'Employee updated successfully' });
}

const deleteEmployee = (req, res) => {
    const id = req.params.Id;
    const result = employees.find(emp => emp.empid == id);
    if (!result) {
        res.status(404).json({ success: false, message: 'Employee not found' });
    } 
    employees.splice(id-1, 1);
    res.json({ success: true, message: 'Employee deleted successfully' });
}

module.exports = {
    getEmployees,
    getEmployeeById,
    addEmployee,
    updateEmployee,
    deleteEmployee
};