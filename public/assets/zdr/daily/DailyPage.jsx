require("./res/DailyPage.less");

var $ = require("jquery");
var moment = require("moment");
var React = require("react");
var ReactUpdate = React.addons.update;
var PureRenderMixin = React.addons.PureRenderMixin;
var DailyManager = require("./controllers/DailyManager");
var Utils = require("./controllers/Utils");

// var Carousel = require("./components/Carousel");
var FlexView = require("./components/FlexView");
// var ArticleViw = require("./components/ArticleView");

/**
 *  知乎日报页面
 */
var DailyPage = React.createClass({
	_currentLoadedDate:null,
	_currentIndex: -1,
	_isLoading: false,
	_isArticleViewVisible: false,

	_$ArticleView: null,
	_$ArticleViewContent: null,

	mixins: [PureRenderMixin],

	getInitialState: function(){
		return {
			topStoryIndexes:[],
			storyIndexes:[],
			currentStory:null,
			loading: false
		};
	},
	componentsDidMount:function(){
		//1、初始化
		this._$ArticleView = $("#ArticleView");
		this._$ArticleViewContent = $("#ArticleView .modal-content");

		//2、加载热门日报
		//this._loadTopStories();

		//3、加载最新日报
		this._loadOtherStories();

		//4、事件处理
		this._addEventHandler();
	},

	componentsWillUnmount: function(){
		//1、事件处理
		this._removeEventHandler();
	},

	/**
	 * 加载热门日报(Carousel)
	 */

	_loadTopStoires: function(){
		DailyManager.getTopStoryIndexes(function(p_data){
			if(this.isMounted() && p_data && !p_data.error){
				this.setState({
					topStoryIndexes: p_data.indexes
				})
			}
		}.bind(this));
	},

	/**
	 * 加载最新日报（默认仅加载今日、昨日的日报）（FlexView）
	 */
	_loadOtherStories: function(){
		this.setState({
			loading:true
		}, function(){
			DailyManager.getStoryIndexes(function(p_data){
				if(this.isMounted() && p_data && !p_data.error){
					this._currentLoadedDate = p_data.date;
					this.addStoryIndexes(p_data.indexes);
					this._loadPrevStoires();
				}

				this.setState({
					loading:false
				});
			}.bind(this));
		})
	},


	/**
	 * 加载前一天的日报（相对当前已加载日报的日期）
	 */
	_loadPrevStoires: function(p_callback){
		this.setState({
			loading:true
		},function(){
			DailyManager.getStoryIndexes(function(p_data){
				if(p_data && !p_data.error){
					this._currentLoadedDate = p_data.date;
					this._addStoryIndexes(p_data.indexes);
				}
				this.setState({
					loading: false
				});
				if(_.isFunction(p_callback)){
					p_callback();
				}
			}.bind(this), Utils.prevZhihuDay(this._currentLoadedDate));
		});
	},

	/**
	 * 增量加载指定的日报
	 */
	_addStoryIndexes: function(p_indexes){
		this.setState({
			storyIndexes: ReactUpdate(this.state.storyIndexes,{
				$push: p_indexes
			})
		})
	},

	/**
	 * 订购事件
	 */
	_addEventHandler: function(){
		this._$ArticleView.on("hide.bs.modal", function(e){
			this._resetArticleViewScroll();
		}.bind(this));

		this._$ArticleView.on("hidden.bs.modal", function(e){
			this._isArticleViewVisible= false;
		}.bind(this));

		this._$ArticleView.on("show.bs.modal", function(e){
			this._isArticleViewVisible = true;
		}.bind(this));

	},

	/**
	 * 退购事件
	 */
	_removeEventHandler: function(){
		this._$ArticleView.off("hide.bs.modal");
		$(document).on("keydwon");
		$(document).on("scroll");
	},

	render: function(){
		<div className = "CarouselContainer container-fluid">
			<Carousel onClick = {this._carouselClickHandler} indexes={this.state.storyIndexes}/>
		</div>
		var page = 
				<div clssname = "DailyPage container-fluid">
					<FlexView onTileClick={this._tileClickHandler} indexes={this.state.stroyIndexes} loading={this.state.loading}/>
				</div>;
		return page;
	}
});

module.exports = DailyPage;