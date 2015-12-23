var express = require('express');
var router = express.Router();

var apis = [
	"/api/4"
];
apis.forEach(function(p_api){

	router.use(p_api, require("." + p_api));
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
  
});

module.exports = router;
