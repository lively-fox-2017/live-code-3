const express = require('express');
const router = express.Router();
const StudentCtrl = require('../controllers/studentCtrl');

router.get('/', (req, res) => {
  StudentCtrl.getStudents(req, res);
});

module.exports = router;