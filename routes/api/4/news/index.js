var express = require("express");
var router = express.Router();

var crawler = require(__base +"/libs/zdr/crawler");

var apis = [
	"/before",
	"/top"
];

apis.forEach(function(p_api){
	router.use(p_api, require("." + p_api));
});

router.get("/:id", function(req, res, next){
	crawler.getStory(req.params.id,res);
});

module.exports = router;
