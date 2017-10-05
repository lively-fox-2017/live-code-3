const express = require('express');
const router = express.Router()

router.get('/list', function(req, res){
  res.render('subject');
})

router.post('/list', function(req, res){

})

module.exports = router;
