require("./res/index.less");

var $ = require("jquery");
var React = require("react");

var Navbar = require("./components/Navbar");
var DailyPage = require("./daily/DailyPage");

$(function(){
	React.render(
		<div className = "MainContainer container-fluid">
			<Navbar/>
			<DailyPage/>
		</div>,
		document.body
	);
});