// express
const express = require('express');
const router = express.Router();

router.get('/subject', function(req, res){
	res.render('subject');
});

module.exports = router;
