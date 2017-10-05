const express = require('express');
const router = express.Router();

const Subject = require('../models/Subject');
const Student = require('../models/Student');
const Student_Subject = require('../models/Student_Subject');

router.get('/list', (req, res) => {

  Student_Subject.fetchStudentsAssigned().then((subjects) => {
    res.render('subjects/list', {
      subjects: subjects
    });
  });

});

router.get('/add-student/:id', (req, res) => {

  Subject.fetchById(req.params.id).then((subject) => {

    if (subject) {

      Student.fetchAll().then((students) => {

        res.render('subjects/add-student', {
          students: students,
          subject_id: req.params.id
        });

      });

    } else {
      res.redirect('/subjects/list');
    }

  });

});

router.post('/add-student/:id', (req, res) => {

  Subject.fetchById(req.params.id).then((subject) => {

    if (subject) {

      Student_Subject.insert(req.body.student_id, req.params.id).then(() => {
        res.redirect('/subjects/list');
      });

    } else {
      res.redirect('/subjects/list');
    }

  });

});

router.get('/add', (req, res) => {

  res.render('subjects/add', {
    error: req.query.error ? 'Subject code already exists' : ''
  });

});

router.post('/add', (req, res) => {

  Subject.insert(req.body).then((status) => {

    if (status === 'error')
      res.redirect('/subjects/add?error=duplicate-subject-code');
    else
      res.redirect('/subjects/list');

  });

});

router.get('/update/:id', (req, res) => {

  Subject.fetchById(req.params.id).then((subject) => {

    if (subject) {

      res.render('subjects/update', {
        subject: subject,
        error: req.query.error ? 'Subject code already exists' : ''
      });

    } else {
      res.redirect('/subjects/list');
    }

  });

});

router.post('/update/:id', (req, res) => {

  Subject.fetchById(req.params.id).then((subject) => {

    if (subject) {

      Subject.update(req.body, req.params.id).then((status) => {
        if (status === 'error')
          res.redirect('/subjects/update/'+req.params.id+'?error=duplicate-subject-code');
        else
          res.redirect('/subjects/list');
      });

    } else {
      res.redirect('/subjects/list');
    }

  });

});

router.get('/delete/:id', (req, res) => {

  Subject.delete(req.params.id).then(() => {
    res.redirect('/subjects/list');
  });

});

module.exports = router;
