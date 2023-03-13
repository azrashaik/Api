const express = require('express');
const controller=require('./controller')
const router = express.Router();

// router.get('/api/students', (req, res) => {
//     res.send("hello students..!")
// });

router.get('/', controller.getStudents)
router.get('/:id',controller.getStudentById)

router.post('/',controller.addStudent)
 
// router.get('/api/teachers', (req, res) => {
//     res.send("hello teachers..!")
// })

module.exports = router;