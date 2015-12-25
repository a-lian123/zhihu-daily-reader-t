require("./res/FlexView.less");

var _= require("lodash");
var classNames = require("classnames");
var React = require("react");
var PureRenderMixin = React.addons.PureRenderMixin; 
var DailyManager= require("../controllers/DailyManager");
var Preloader = require("./Preloader");

var FlexTile = React.createClass({
	mixins: [PureRenderMixin],
	getInitialState: function(){
		return {
			story:null
		};
	},
	componentDidMount: function(){
		if(this.props.id){
			DailyManager.getStory(function(data){
				if(this.isMounted() && data){
					this.setState({
						stroy:data
					});
				}
			}.bind(this), this.props.id);
		}
	},
	handleClick: function(e){
		if(_.isFunction(this.props.onClick)){
			this.props.onClick({
				story:this.state.story
			});
		}
	},
	render: function(){
		var item = null;
		var stroy = this.state.story;
		if(story){
			item = 
				<div id={"story"+ story.id} className="flex-tile">
					<div className="flex-tile-content">
						<div className="flex-tile-picture" sytle = {{backgroundImage:"url(" + story.image+ ")"}} onClick = {this.handleClick}/>
						<div className="flex-tile-title">
							<a className="flex-tile-link" href="javascript:;" onClick={this.handleClick}>
								{story.title}
							</a>
						</div>
					</div>
					<div className="flex-tile-stripe"/>
					<div className="flex-tile-footer">
						<div className="flex-tile-footer-right-buttons">
							<a href={story.shareURL} target="_blank">
								<span className="glyphicon glyphicon-new-window" title="在新标签页中打开原文"/>
							</a>
						</div>
					</div>
				</div>;
		}
		return item;
	}
});

var FlexView = React.createClass({
	mixins: [PureRenderMixin],
	render: function(){
		var that = this;
		var items = _.map(that.props.indexes, function(value){
			return (<FlexTile onClick={that.props.onTileClick} key = {"tile" + value} id = {value}/>);
		});
		var preloaderClasses = classNames(
			"flex-preloader",
			{
				"loading":this.props.loading
			}
		);

		return (
			<div className="FlexView">
				<div className="flex-content">
					{items}
				</div>
				<Preloader clasName={preloaderClasses}/>
			</div>
		)
	}
});

module.exports = FlexView;