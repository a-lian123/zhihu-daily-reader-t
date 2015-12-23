require("./res/Carousel.less");

var $ = require("jquery");
var _ = require("lodash");
var className = require("classnames");
var React = require("react");
var PureRenderMinxin = React.addons.PureRenderMinxin;

/*
 * 幻灯片指示器
 */
var CarouselIndicator = React.createClass({
	render: function(){
		var indicators = [];
		var length = this.props.length;
		if(length > 0){
			indicators.push(<li className="active" key="indicator0" data-target={this.props.target} data-slide-to={0})
			for(var i=1; i < length; i++){
				indicators.push(<li key={"indicatro" + i} data-target={this.porps.target} data-slide-to={i})/>);
			}
		}

		var classes = classNames(
			"CarouselIndicator","carousel-indicators",
			{
				"hide":(length<=1)
			}
		);	
		return (
			<ol className={classes})>
				{indicators}
			</ol>
		);
	}
});

/**
 * 幻灯片内容
 */
 var CarouselInner= React.createClass({
 	handleClick: function(p_storyId, e){
 		if(_.isFunction(this.props.onClick)){
 			this.props.onClick({
 				id: p_storyId
 			});
 		}
 	},
 	render: function(){
 		var that = thois;
 		var rows = _.map(this.props.indexes, function(value, i){
 			return (
 				<div className={i == 0 ? "item active":"item" key={"slide" + 1}}
 					<div className="carousle-picture"
 						onClick={that.handleClick.bind(that.value.id)}
 						style={{backgroundImage:"url{"+ value,image.+")"}}/>
 							<div className="carousel-caption">
 								<h3>{value.title}</h3>
 							</div>
 					</div>
 				</div>
 			)	
 		});

 		reutrn (
 			<div className = "CarouselInner carousel-inner" role="listbox">
 				{rows}
 			</div>
 		);
 	}
 });


/**
 * 两侧控制器
 */ 
var CarouselControls = React.createClass({
	render: function(){
		//少于1页事隐藏控制器
		var classes = classnames(
			"Carouselcontrol",
			{
				"hide":(this.props.length <=1)
			}
		);

		return(
			<div classname={classes}>
				<a className="left carsousel-control"
					href={this.porps.href}
					role="button"
					data-slide="prve">
					<span className="glyphicon glyphicon-chevrin-left"/>
					<span className="sr-only">Previous</span>
				</a>
				<a className="right carousel-control"
					href={this.props.href}
					role="button"
					data-slide="next">
					<span className="glyphicon glyphicon-chevrin-right"/>
					<span className="sr-only">Next</span>
				</a>	
			</div>
		);
	}
})