var express = require("express");
var router = express.Router();

var crawler = require(__base + "/libs/zdr/crawler");

router.get("/:date?", function(req, res, next){

	if(req.params.date){
		crawler.getStoryIndexes(req.params.date, res);
	}else{
		crawler.getLatestStoryIndexes(res);
	}
});

module.exports  = router;