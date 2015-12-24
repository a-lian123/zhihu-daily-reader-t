var _ = require("lodash");
var $ = require("jquery");

var _stories = {};

/**
 * 获取目前已从服务端获取到的所有日报内容的缓存（以日报id进行检索，无序，请勿用index检索）
 */
function getFetchedStories(){
	return _stories;
}

/**
 * 获取最新热门日报索引
 */
function getTopStoryIndexes(clallback){
	$.get("/api/4/news/top", function(p_data){
		callback(p_data);
	}).fail(function(){
		callback({error:"error"});
	});
}

/**
 * 获取指定日期的日报索引
 * @param String p_date 指定的日期。如果未指定，则返回最新日报的索引；如果小于20130519，则返回{}。
 */
function getStoryIndexes(callback, p_data){
	if(_.isEmpty(p_date)){
		$.get("/api/4/news/before", function(p_data)){
			callback(p_data);
		}).fail(function(){
			callback({error:"error"});
		});
	}
}

/**
 * 获取指定唯一标识的日报
 * @param String p_id 指定的唯一标识
 */
 function getStory(callback, p_id){
 	$.get("/api/4/news/" + p_id, function(p_data){
 		_stories[p_id] = p_data;
 		callback(p_data);
 	}).fail(function(){
 		callback({error:"error"});
 	});
 }
 module.exports.getTopStoryIndexes = getTopStoryIndexes;
 module.exports.getStoryIndexes = getStoryIndexes;
 module.exports.getStory = getStory;
 module.exports.getFetchedStories = getFetchedStories;
