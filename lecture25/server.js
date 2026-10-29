const express = require('express');
const mongoose = require('mongoose');
const Doctor = require('./model/doctors.model.js');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/doctors', async (req, res) => {
    try {
        const doctors = await Doctor.find();    
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

app.get('/doctors/:id', async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        if (!doctor) {
            return res.status(404).json({ success: false, message: 'Doctor not found' });
        }
        res.json(doctor);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

mongoose.connect("mongodb://localhost:27017/HospitalDB").then(()=>{
    console.log("Database Connected");
}).catch((err)=>{
    console.log(err);
})

app.post('/doctors', async (req, res) => {
    try {
        const newDoctor = new Doctor(req.body);
        await newDoctor.save();
        res.status(201).json(newDoctor);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})