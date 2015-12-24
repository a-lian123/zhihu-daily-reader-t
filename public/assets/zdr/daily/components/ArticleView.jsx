require("./res/ArticleView.less");

var $ = require("jquery");
var _ = require("loadsh");
var className = require("classname");
var React = require("react");
var PureRenderMixin = React.addons.PureRenderMixin;

var ArticleHeader = React.createClass({
	render: function(){
		var hasBackgrounds = this.props.story.backgrounds.length > 0;
		var classesHeaderPiture = className(
			"article-header-picture",{
				"radius-all": !hasBackgrounds,
				"radius-top": hasBackgrounds
			}
		);

		var classesHeaderCaption = classNames("article-header-picture",{
			{
				"radius-bottom":!hasBackgrounds
			}
		});

		//没有版权信息时隐藏
		var classesImageSource = classnames(
			{
				"hide":!this.props.stroy.imageSource
			}
		);

		var rows = [];
		var titleRow = 
			<div className="article-header-title" key="article-header">
			</div>;
			
	}
});