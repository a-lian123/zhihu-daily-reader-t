var querystring = require("querystring");
var express = require("express");
var router = express.Router();

var crawler = require(__base + "/libs/zdr/crawler");

router.get("/:url", function(req, res , next){
	crawler.getImage(querystring.unescape(req.params.url), res);
});
module.exports = router;