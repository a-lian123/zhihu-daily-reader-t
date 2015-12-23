var moment = require("moment");
var cheeiro = require("cheerio");
var querystring = require("querystring");

var options = {baseUrl:"http://news-at.zhihu.com/api/4/"};
var dailyRequest = require("request").defaults(options);
var imgRequest = require("request");

const PREFIX = "/api/4/imgs/";

/**
* 获取最新日报（即今天截止目前为止的日报）的索引
*/
function getLatestStroyIndexes(p_res){
	dailyRequest.get({url:"/news/latest", json: true}, function(error, res, body){
		if(!error && res.statusCode == 200){
			//因为知乎日报的API返回的图片太小，这里直接对其，后面在通过其他入境获取图片
			var indexed = body.stories.map(function(item){
				return item.id;
			});

			p_res.set(res.headers);
			p_res.json({
				date:body.date,
				indexes:indexes
			});
		}else{
			p_res.status(404).render("error_404");
		}
	});
}

/**
 * 获取最新热门日报的索引
 */
function getTopStoryIndexes(p_res){
	dailyRequest.get({url:"/news/latest", json: true}, function(error, response, body){
		if(!error && response.statusCode == 200){
			var indexes = body.top_stoies.map(function(item){
				return {
					id: item.id,
					title: item.title,
					images: PREFIX + querystring.escape(item.image)
				};
			});
		}

		p_res.set(response.headers);
		p_res.json({
			date:body.date,
			indexes: indexes
		});
	})
}





/**
 * 获取指定的图片地址
 * @param p_url 图片地址
 */
 function getImage(p_url, p_res){
 	imgRequest.get(p_url).on("error", function(){
 		p_res.status(404).render("error_404");
 	}).pipe(p_res);
 }


 module.exports.getImage = getImage;
 module.exports.getTopStoryIndexes = getTopStoryIndexes;
