require("./res/ArticleView.less");

var $ = require("jquery");
var _ = require("lodash");
var classNames = require("classnames");
var React = require("react");
var PureRenderMixin = React.addons.PureRenderMixin;

var ArticleHeader = React.createClass({
	render: function(){
		var hasBackgrounds = this.props.story.backgrounds.length > 0;
		var classesHeaderPiture = classNames(
			"article-header-picture",{
				"radius-all": !hasBackgrounds,
				"radius-top": hasBackgrounds
			}
		);

		var classesHeaderCaption = classNames("article-header-picture",
			{
				"radius-bottom":!hasBackgrounds
			}
		);

		//没有版权信息时隐藏
		var classesImageSource = classNames(
			{
				"hide":!this.props.story.imageSource
			}
		);

		var rows = [];
		var titleRow = 
			<div className="article-header-title" key="article-header">
				<button type="button" className="close" data-diamiss="modal">
					<span>&times;</span>
				</button>
				<div className={classesHeaderPiture} style={{background: "url(" + this.props.story.image + ")"}}>
					<div className ={classesHeaderCaption}>
						<a href={this.props.story.hsareURL} target="_blank">
							<h3>{this.props.story.title}</h3>
						</a>
						<a className={classesImageSource} target="_blank" href={"https://www.google.com/search?q=" + this.props.story.imageSource}>
							<span className="glyphicon glyphicon-copyright-mark"/>
							{this.props.story.imageSource}
						</a>
					</div>
				</div>
			</div>;
		rows.push(titleRow);

		if(hasBackgrounds){
			var backgroundRows = _.map(this.props.story.backgrounds, function(value, i){
				return (
					<a className="article-backgrounds-content"
					 href={value.href}
					 target="_blank"
					 key={"background" + i}>
					 	<h4>{value.title + ":" + value.text}</h4>
					</a>
				);
			});

			rows.push(
				<div className="article-backgrounds" key="article-backgrounds">
					{backgroundRows}
					<span className="article-backgrounds-arrow glyphicon glyphicon-chevron-right"/>
				</div>
			);
		}

		return (
			<div className="ArticleHeader modal-header">
				{rows}
			</div>
		);
	}
});

var ArticleBody = React.createClass({
	render: function(){
		var questions = [];
		var item = null;
		var length = this.props.contents.length;
		console.log(this.props.contents);
		for(var i = 0; i< length; i++){
			//innerRows 包含标题、答案、外链
			var innerRows = [];
			item = this.props.contents[i];

			//1、标题
			if(!_.isEmpty(item.title)){
				innerRows.push(<h3 classNames="questions-title" key={"questions-title"+i}>{item.title}</h3>)
			}
			//2、答案
			var answers = _.map(item.answers, function(value, j){
				var classesAvatar = classNames(
					"avatar",
					{
						"hide":_.isEmpty(value.avatar)
					}
				);

				return (
					<div className="question-answer" key={"question-answer-"+i+"-"+j}>
						<div className="questions-answer-meta">
							<img className={classesAvatar} src={value.avatar}/>
							<span className="author">{value.name}</span>
							<span className="bio">{value.name}</span>
						</div>
						<div className="question-answer-content" dangerouslySetInnerHTML={{__html:value.content}}/>
					</div>
				);
			});

			Array.prototype.push.apply(innerRows, answers);
			
			//外链
			if(item.link){
				innerRows.push(
					<div className="view-more" key={"view-more" + i}>
						<a href={item.link.href} target="_blank"><b>{item.link.text}</b></a>
					</div>
				);
			}

			questions.push(
				<div className="question" key={"question" + i}>
					{innerRows}
				</div>
			);

			//分隔符
			if(i < length -1){
				questions.push(<hr className="question-separator" key={"question-separator" + i}/>);
			}
		}
		return (
			<div className="ArticleBody modal-body">
				{questions}
			</div>
		);
	}
});

var ArticleView = React.createClass({
	mixins:[PureRenderMixin],
	getDefaultProps: function(){
		return {
			id: "ArticleView"
		};
	},

	render: function(){
		var rows = [];
		if(this.props.story){
			rows = [
				<ArticleHeader key="header" story={this.props.story}/>,
				<ArticleBody key="body" contents={this.props.story.contents}/>
			];
		}

		return (
			<div id={this.props.id} className="ArticleView modal fade">
				<div className="modal-dialog modal-lg">
                    <div className="modal-content">
					{rows}
					</div>
				</div>
			</div>
		);
	}
});

module.exports = ArticleView;