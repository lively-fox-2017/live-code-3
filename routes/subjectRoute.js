const express = require('express');
const router = express.Router();
const SubjectCtrl = require('../controllers/subjectCtrl');

router.get('/', (req, res) => {
  SubjectCtrl.getSubjects();
});

module.exports = router;
