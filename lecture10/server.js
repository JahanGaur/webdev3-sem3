const express = require('express');
const app = express();

app.use(express.json());


const employees = [
    {empid: 1, name: 'kevin', salary: 60000, department: 'IT'},
    {empid: 2, name: 'tanuj', salary: 75000, department: 'HR'},
    {empid: 3, name: 'harsh', salary: 50000, department: 'Finance'},
    {empid: 4, name: 'rohit', salary: 80000, department: 'IT'},
];


app.get('/employees', (req, res) => {
    res.json(employees);
});

app.get('/employees/:Id', (req, res) => {
    const id = req.params.Id
    const employee =  employees.find(emp => emp.empid == id);

    if (!employee) {
        res.status(404).json({ success: false, message: 'Employee not found' });
    }

    res.json(employee);
});

// Create
app.post('/employees', (req, res) => {
    const newEmployee = req.body;
    employees.push({ empid: employees.length + 1, ...newEmployee });
    res.status(201).json({ success: true, message: 'Employee added successfully' });
});

//  Update
app.put('/employees/:Id', (req, res) => {
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
});


// Delete
app.delete('/employees/:Id', (req, res) => {
    const id = req.params.Id;
    const result = employees.find(emp => emp.empid == id);
    if (!result) {
        res.status(404).json({ success: false, message: 'Employee not found' });
    } 
    employees.splice(id-1, 1);
    res.json({ success: true, message: 'Employee deleted successfully' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});