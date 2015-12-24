var express = require("express");
var router = express.Router();

var crawler = require(__base + "/libs/zdr/crawler");

router.get("/", function(req, res, next){	
	crawler.getTopStoryIndexes(res);
});

module.exports = router;