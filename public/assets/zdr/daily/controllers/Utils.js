var monent = require("moment");

/**
 * 计算指定的知乎日期的后一天
 * @param String p_date 形如 "20150727"的日期字符串
 * @retrun String 返回激素计算结果，形如"20150726"; 如果 p_date 是无效的日期字符串，则将其原返回
 */
function nextZhuhuDay(p_date){
	return subZhihuDay(p_date, -1);
}

/**
 * 计算指定知乎日期的前一天
 * @param String p_date 形如"20140727"的日期字符串
 * @return String 返回计算结果，形如"20150726";如果 p_date 是无效的日期字符串，则就将其返回
 */
function prevZhihuDay(p_date){
	return subZhihuDay(p_date);
}

/**
 * 知乎日期格式前去指定的天数
 * @param String p_date 形如 “20150727”的日期字符串
 * @param Number p_day 要减去的天数，可以为负数（相当于增加天数）；如果不指定，则天数减1
 * @return String 返回计算结果，形如"20150726";如果 p_date 是无效的日期字符串，则就将其返回
 */

function subZhihuDay(p_date, p_day){
	var m = moment(p_date, "YYYYMMDD", true);
	if(m.isValid()){
		return m.subtract(p_day || 1, "day").format("YYYYMMDD");
	}else{
		return p_date;
	}
}

module.exports.nextZhihuDay = nextZhihuDay;
module.exports.prevZhihuDay = prevZhiDay;
module.exports.subZhihuDay = subZhihuDay;