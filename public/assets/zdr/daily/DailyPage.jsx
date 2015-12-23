require("./res/DailyPage.less");

var $ = require("jquery");
var moment = require("moment");
var React = require("react");
var PureRenderMixin = React.addons.PureRenderMixin;
var DailyManager = require("./controllers/DaulyManager");
var Utils = require("./controllers/Utils");

var Carousel = require("./components/Carousel");
var FlexView = require("./components/FlexView");
var ArticleViw = require("./components/ArticleViw");

