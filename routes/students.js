const express = require('express');
const router = express.Router();

const Student = require('../models/Student');
const Student_Subject = require('../models/Student_Subject');

router.get('/list', (req, res) => {

  Student.fetchAll().then((students) => {
    res.render('students/list', {
      students: students
    });
  });

});

router.get('/subjects-assigned/:id', (req, res) => {

  Student.fetchById(req.params.id).then((student) => {

    if (student) {

      Student_Subject.fetchSubjectAssigned(req.params.id).then((subjects) => {

        res.render('students/subjects-assigned', {
          student: student,
          subjects: subjects
        });

      });

    } else {
      res.redirect('/students/list');
    }

  });

});

router.get('/add', (req, res) => {

  res.render('students/add');

});

router.post('/add', (req, res) => {

  Student.insert(req.body).then(() => {

    res.redirect('/students/list');

  });

});

router.get('/update/:id', (req, res) => {

  Student.fetchById(req.params.id).then((student) => {

    if (student) {

      res.render('students/update', {
        student: student
      });

    } else {
      res.redirect('/students/list');
    }

  });

});

router.post('/update/:id', (req, res) => {

  Student.fetchById(req.params.id).then((student) => {

    if (student) {

      Student.update(req.body, req.params.id).then(() => {
        res.redirect('/students/list');
      });

    } else {
      res.redirect('/students/list');
    }

  });

});

router.get('/delete/:id', (req, res) => {

  Student.delete(req.params.id).then(() => {
    res.redirect('/students/list');
  });

});

module.exports = router;
