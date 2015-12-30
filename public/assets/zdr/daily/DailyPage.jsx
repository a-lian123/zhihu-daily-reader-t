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
var ArticleView = require("./components/ArticleView");

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
	componentDidMount:function(){
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
					this._addStoryIndexes(p_data.indexes);
					this._loadPrevStories();
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
	_loadPrevStories: function(p_callback){
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
		this.setState(
        {
            storyIndexes: ReactUpdate(this.state.storyIndexes,
            {
                $push: p_indexes
            })
        });
	},

	_tileClickHandler: function(e){
		this._showArticle(e.story);
	},

	/**
	 * 打开ArticleView并加载制定的日报
	 */
	_showArticle: function(p_story){
		this._loadArticle(p_story, function(){
			this._setCurrentIndex(this._getStoryIndexById(p_story.id));
			this._openArticleView();
		});
	},

	/**
	 * 打开ArticleView
	 */

	_openArticleView: function(){
		if(!this._isArticleViewVisible){
			this._$ArticleView.modal();
		}
	},

	/**
	 * 获取指定唯一标识的日报索引
	 */
	_getStoryIndexById: function(p_id){
		return _.indexOf(this.state.storyIndexes, p_id);
	},

	/**
     * 向ArticleView 中加载指定的日报（仅改变内容不改变转改
     */
    _loadArticle: function(p_story, p_callback){
    	if(p_story){
    		this.setState({
    			currentStroy: p_story
    		}, p_callback);
    	}
    },

    /**
     * 打开ArticleView
     */
    _opendArticleView: function(){
    	if(!this._isArticleViewVisible){
    		if(!this._isArticleViewVisible){
    			this._$ArticleView.modal();
    		}
    	}
    },

    /**
     * 关闭ArticleView
     */
    _closeArticleView: function(){
    	if(this._isArticleViewVisible){
    		this._$ArticleView.modal("hide");
    	}
    }, 

    /**
     * 当前日报索引增加
     */
    _addCurrentIndex: function(){
    	if(this._currentIndex + 1 < this.state.stroyIndexes.length){
    		this._setCurrentIndex(this._currentIndex + 1);
    	}
    },

    /**
     * 设置日报索引
     */
    _setCurrentIndex: function(p_index){
    	var e = {oldIndex: this._currentIndex, newIndex: p_index};
    	this._currentIndex = p_index;
    	this._currentIndexChangeHandler(e);
    },

    _currentIndexChangeHandler: function(e){
    	this._updateCurrentTile(e.oldIndex, e.newIndex);
    },

    /**
     * 更新当前 FlexTile样式
     */
    _updateCurrentTile: function(p_oldIndex, p_newIndex){
    	if(p_oldIndex >= 0){
    		$("#stroy" + this.state.storyIndexes[p_oldIndex]).removeClass('current');
    	}

    	var $newTile = $('#story' + this.state.storyIndexes[p_newIndex]);
    	$newTile.addClass('current');

    	//判断是否需要移动滚动跳的位置，以便内容可见
    	var newTop = $newTile.offset().top - 71;
    	var moveDown = newTop + $newTile.outerHeight(true) - $(document).scrollTop() > $(window).height();
    	var moveUp = newTop < $(document).scrollTop();
    	if(moveDown || moveUp){
    		//此处用 animate特的话， 存在问题， 按住按键不放会出现问题
    		$(document).scrollTop(newTop);
    	}
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

		$(document).on("keydown", this._globalKeydownHandler);
		$(document).on("scroll", this._scrollHandler);

	},

	/**
	 * 退购事件
	 */
	_removeEventHandler: function(){
		this._$ArticleView.off("hide.bs.modal");
		$(document).on("keydwon");
		$(document).on("scroll");
	},

	/**
	 * 处理全局案件事件。
	 */
	_globalKeydownHandler:function(e){
		var code = e.which;
		var extraKey = e.altKey || e.ctrlKey || e.shiftKey || e.metaKey;
		if(!extraKey){
			if(code == 27){
				//ESC: 关闭 ArticleView
				this._closeArticleView();
			}else if(code == 74){
				//J: ArticleView 显示下一个日报（如果未打开 ArticleView 则自动打开）
				this._keydownShowNextStory();
			}else if(code == 75){
				//K: ArticleView 显示上一个日报（如果当前未打开 ArticleVeiw 则自动打开）
				this._keydownShowPrevStory();
			}else if(code ==13 || code == 79){
				//Enter 0: 打开选中的日报
				if(!this._isArticleViewVisible){
					this._showArticle(DailyManager.getFetchedStories()[this.state._currentIndex]);
				}
			}else if(code == 37){
				//左方向： 切换到上一个日报
				if(this._isArticleViewVisible){
					this._keydownShowPrevStory();
				}else{
					this._minusCurrentIndex();
				}
			}else if(code == 39){
				//右方向：切换到下一个日报
				if(this._isArticleViewVisible){
					this._keydownShowNextStory();
				}else{
					this._addCurrentIndex();
				}
			}else if(code == 86){
				//V: 打开原始链接
				if(this._isArticleViewVisible){
					$(".view-more a").map(function(p_index, p_object){
						p_object.click();
					});
				}
			}
		}
	},

	/**
	* 当前日报索引减少1
	*/
	_minusCurrentIndex: function(){
		if(this._currentIndex > 0){
			this._setCurrentIndex(this._currentIndex - 1);
		}
	},

	/**
	 * 当前日报索引增加1
	 */
	_addCurrentIndex: function(){
		if(this._currentIndex + 1 < this.state.storyIndexes.length){
			this._setCurrentIndex(this._currentIndex + 1);
		}
	},

	/**
	 * ArricleView 显示下一个日报（如果当前未打开ArticleView则自动打开）
	 */
	_keydownShowNextStory: function(){
		var index = this._currentIndex + 1;
		if(index < this.state.storyIndexes.length){
			if(!this._isLoading){
				var story = DailyManager.getFetchedStories()[this.state.storyIndexes[index]];
				if(this._isArticleViewVisible){
					this._loadArticle(story, function(){
						this._addCurrentIndex();
						this._resetArticleViewScroll();
					});
				}
			}else{
				this._showArticle(story);
			}
		}else{
			//自动加载前一天
			if(!this._isLoading){
				this._isLoading = true;
				this._isloadPrevStories(function(){
					this._isLoading = false;
				}.bind(this));
			}
		}
	},

	/**
	 * 显示上一个日报（如果没有打开ArticleView 则自动打开）
	 */
	_keydownShowPrevStory: function(){
		var index = this._currentIndex -1;
		if(index >= 0){
			var story = DailyManager.getFetchedStories()[this.state.storyIndexes[index]];
			if(this._isArticleViewVisible){
				this._loadArticle(story, function(){
					this._minusCurrentIndex();
					this._resetArticleViewScroll();
				});
			}else{
				this._showArticle(story);
			}
		}
	},

	/**
	 * 垂直滚动动态加载内容
	 */ 
	_scrollHandler: function(){
		if(!this._sLoading && ($(document).scrollTop() >= $(document).height() - $(window).height())){
			this._isLoading = true;
			this._loadPrevStories(function(){
				this._isLoading = false;
			}.bind(this));
		}
	},

	/**
	 * 重设Articleview 的垂直滚动条
	 */
	_resetArticleViewScroll:function(){
		this._$ArticleViewContent.scrollTop(0);
	},


	render: function(){
		// <div className = "CarouselContainer container-fluid">
		// 	// <Carousel onClick = {this._carouselClickHandler} indexes={this.state.storyIndexes}/>
		// </div>
		var page = 
				<div className = "DailyPage container-fluid">
					<FlexView onTileClick={this._tileClickHandler} indexes={this.state.storyIndexes} loading={this.state.loading}/>
					<ArticleView story={this.state.currentStory}/>
				</div>;
		return page;
	}
});

module.exports = DailyPage;