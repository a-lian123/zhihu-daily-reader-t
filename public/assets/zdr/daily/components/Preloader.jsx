require("./res/Preloader.less");

var _=require("lodash");
var React = require("react");
var classNames = require("classnames");

var Preloader = React.createClass({
	getDefaulProps: function(){
		return{
			className: null
		};
	},

	render: function(){
		var classes = "Preloader";
		if(!_.isEmpty(this.props.clssName)){
			classes = classes + " " + this.props.className;
		}

		return (
			<div className = {classes}>
				<span className = "wave1"/>
				<span className = "wave2"/>
				<span className = "wave3"/>
				<span className = "wave4"/>
				<span className = "wave5"/>
			</div>
		);
	}
});
module.exports = Preloader;