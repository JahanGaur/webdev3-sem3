use('HospitalDB');

// INSERT

// db.doctor.insert({
//     name: 'Dr. Smith',
//     specialization: 'Cardiology',
//     hospital: 'City Hospital',
//     salary: 150000,
// })

// db.doctor.insert({
//     name: 'Dr. John',
//     specialization: 'Ortho',
//     hospital: 'City Hospital',
//     salary: 140000,
// })

// READ

// db.doctor.f    ind()
// db.doctor.find({hospital: 'City Hospital'})



// UPDATE

// db.doctor.updateOne(
//     {name: 'Dr. Smith'},
//     {
//         $set: {
//             salary: 160000
//         }
//     }
// )


// FIND

// db.doctor.find()

// db.doctor.find(
//     {
//         salary: {
//             $gt: 150000
//         }
//     }
// )

/*
$gt: greater than
$gte: greater than or equal to
$lt: less than
$lte: less than or equal to
$eq: equal to
$ne: not equal to
$or: logical OR
$and: logical AND
*/

// db.doctor.find(
//     {
//         $or: [
//             {department: 'Cardiology'},
//             {salary: {$gt: 150000}}
//         ]
//     }
// )

// PROJECTION - all data but limited/specific fieldsm     

// db.doctor.find({}, {name: 1, specialization: 1, _id: 0})

// db.doctor.find().skip(2).list(2) - pagination

  

