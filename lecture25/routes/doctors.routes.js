const express = require('express');
const router = express.Router();
const { getDoctors, getDoctorById, addDoctor, editDoctor, deleteDoctor } = require('../controller/doctors.controller.js');

router.get('/doctors', getDoctors);

router.get('/doctors/:id', getDoctorById);

router.post('/doctors', addDoctor);

router.put('/doctors/:id', editDoctor);

router.delete('/doctors/:id', deleteDoctor);

module.exports = router;