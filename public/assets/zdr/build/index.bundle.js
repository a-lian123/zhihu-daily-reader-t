/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(7);

	var $ = __webpack_require__(6);
	var React = __webpack_require__(9);

	var Navbar = __webpack_require__(10);
	var DailyPage = __webpack_require__(14);

	$(function(){
		React.render(
			React.createElement("div", {className: "MainContainer container-fluid"}, 
				React.createElement(Navbar, null), 
				React.createElement(DailyPage, null)
			),
			document.body
		);
	});

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ },
/* 7 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 8 */,
/* 9 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(11);
	var React = __webpack_require__(9);

	/**
	 * 头部
	 */
	var NavbarHeader = React.createClass({displayName: "NavbarHeader",
		getDefaultProps: function(){
			return {
				target: ".nav-collapse"
			}
		},
		render: function(){
			var navbarHeader = 
				React.createElement("div", {className: "navbar-header"}, 
					React.createElement("button", {className: "navbar-toggle collapsed", 
						"data-toggle": "collapse", 
						"data-target": this.props.target}, 
						React.createElement("span", {className: "sr-only"}, "导航"), 
				        React.createElement("span", {className: "icon-bar"}), 
				        React.createElement("span", {className: "icon-bar"}), 
				        React.createElement("span", {className: "icon-bar"})
				    ), 
				    React.createElement("a", {className: "navbar-brand", href: "/"}, 
				    	React.createElement("img", {alt: "知乎日报", src: __webpack_require__(13)})
				    )
				);
			return navbarHeader;
		}
	});
	/**
	 * 菜单
	 */
	 var NavbarContent = React.createClass({displayName: "NavbarContent",
	 	getDefalutProps: function(){
	 		return {
	 			id:"NavbarContent"
	 		};
	 	},
	 	render: function(){
	 		var navbarContent = 
	 			React.createElement("div", {id: this.props.id, 
	 					className: "navbar-collapse collapse"}, 
	 					React.createElement("ul", {className: "nav navbar-nav navbar-right"}, 
		 					React.createElement("li", {className: "active"}, React.createElement("a", {href: "#"}, " 日报")), 
		 					React.createElement("li", {className: "disabled"}, React.createElement("a", {href: "#"}, "专栏")), 
		 					React.createElement("li", {className: "disabled"}, React.createElement("a", {href: "#"}, "关于"))
	 					)
	 			)
	 		return navbarContent;
	 	}
	 });

	/**
	 * 导航栏
	 */
	var Navbar = React.createClass({displayName: "Navbar",
		getDefaultProps: function(){
			return{
				id:"Navbar"
			}
		},
		render:function(){
			var navbar = 
				React.createElement("nav", {id: this.props.id, 
					className: "Navbar navbar navbar-default navbar-fixed-top"}, 
					React.createElement("div", {className: "container"}, 
						React.createElement(NavbarHeader, {target: "#NavbarContent"}), 
						React.createElement(NavbarContent, null)
					)
				)
				return navbar;
		}
	});
	module.exports = Navbar;




/***/ },
/* 11 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 12 */,
/* 13 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(15);

	var $ = __webpack_require__(6);
	var moment = __webpack_require__(17);
	var React = __webpack_require__(9);
	var ReactUpdate = React.addons.update;
	var PureRenderMixin = React.addons.PureRenderMixin;
	var DailyManager = __webpack_require__(18);
	var Utils = __webpack_require__(20);

	// var Carousel = require("./components/Carousel");
	var FlexView = __webpack_require__(21);
	var ArticleView = __webpack_require__(28);

	/**
	 *  知乎日报页面
	 */
	var DailyPage = React.createClass({displayName: "DailyPage",
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
					React.createElement("div", {className: "DailyPage container-fluid"}, 
						React.createElement(FlexView, {onTileClick: this._tileClickHandler, indexes: this.state.storyIndexes, loading: this.state.loading}), 
						React.createElement(ArticleView, {story: this.state.currentStroy})
					);
			return page;
		}
	});

	module.exports = DailyPage;

/***/ },
/* 15 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 16 */,
/* 17 */
/***/ function(module, exports) {

	module.exports = moment;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(19);
	var $ = __webpack_require__(6);

	var _stories = {};

	/**
	 * 获取目前已从服务端获取到的所有日报内容的缓存（以日报id进行检索，无序，请勿用index检索）
	 */
	function getFetchedStories(){
		return _stories;
	}

	/**
	 * 获取最新热门日报索引
	 */
	function getTopStoryIndexes(callback){
		$.get("/api/4/news/top", function(p_data){
			callback(p_data);
		}).fail(function(){
			callback({error:"error"});
		});
	}

	/**
	 * 获取指定日期的日报索引
	 * @param String p_date 指定的日期。如果未指定，则返回最新日报的索引；如果小于20130519，则返回{}。
	 */
	function getStoryIndexes(callback, p_date){
		if(_.isEmpty(p_date)){
			// $.get("/api/4/news/before", function(p_data){
			// 	callback(p_data);
			// }).fail(function(){
			// 	callback({error:"error"});
			// });

			 $.get("/api/4/news/before", function (p_data)
	        {
	            callback(p_data);
	        }).fail(function ()
	        {
	            callback({ error: "error" });
	        });
		}else{
			$.get("/api/4/news/before/" + p_date, callback).fail(function(){
				callback({error:"error"});
			});
		}
	}

	/**
	 * 获取指定唯一标识的日报
	 * @param String p_id 指定的唯一标识
	 */
	 function getStory(callback, p_id){
	 	$.get("/api/4/news/" + p_id, function(p_data){
	 		_stories[p_id] = p_data;
	 		callback(p_data);
	 	}).fail(function(){
	 		callback({error:"error"});
	 	});
	 }
	 module.exports.getTopStoryIndexes = getTopStoryIndexes;
	 module.exports.getStoryIndexes = getStoryIndexes;
	 module.exports.getStory = getStory;
	 module.exports.getFetchedStories = getFetchedStories;


/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = _;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var monent = __webpack_require__(17);

	/**
	 * 计算指定的知乎日期的后一天
	 * @param String p_date 形如 "20150727"的日期字符串
	 * @retrun String 返回激素计算结果，形如"20150726"; 如果 p_date 是无效的日期字符串，则将其原返回
	 */
	function nextZhihuDay(p_date){
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
	module.exports.prevZhihuDay = prevZhihuDay;
	module.exports.subZhihuDay = subZhihuDay;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(22);

	var _= __webpack_require__(19);
	var classNames = __webpack_require__(24);
	var React = __webpack_require__(9);
	var PureRenderMixin = React.addons.PureRenderMixin; 
	var DailyManager= __webpack_require__(18);
	var Preloader = __webpack_require__(25);

	var FlexTile = React.createClass({displayName: "FlexTile",
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
							story:data
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
			var story = this.state.story;
			if(story){
				console.log();
				item = 
					React.createElement("div", {id: "story"+ story.id, className: "flex-tile"}, 
						React.createElement("div", {className: "flex-tile-content"}, 
							React.createElement("div", {className: "flex-tile-picture", style: {backgroundImage: "url(" + story.image + ")"}, onClick: this.handleClick}), 
							React.createElement("div", {className: "flex-tile-title"}, 
								React.createElement("a", {className: "flex-tile-link", href: "javascript:;", onClick: this.handleClick}, 
									story.title
								)
							)
						), 
						React.createElement("div", {className: "flex-tile-stripe"}), 
						React.createElement("div", {className: "flex-tile-footer"}, 
							React.createElement("div", {className: "flex-tile-footer-right-buttons"}, 
								React.createElement("a", {href: story.shareURL, target: "_blank"}, 
									React.createElement("span", {className: "glyphicon glyphicon-new-window", title: "在新标签页中打开原文"})
								)
							)
						)
					);
			}
			return item;
		}
	});

	var FlexView = React.createClass({displayName: "FlexView",
		mixins: [PureRenderMixin],
		render: function(){
			var that = this;
			var items = _.map(that.props.indexes, function(value){

				return (React.createElement(FlexTile, {onClick: that.props.onTileClick, key: "tile" + value, id: value}));
			});
			var preloaderClasses = classNames(
				"flex-preloader",
				{
					"loading":this.props.loading
				}
			);
			console.log(that.props.indexes);
			return (
				React.createElement("div", {className: "FlexView"}, 
					React.createElement("div", {className: "flex-content"}, 
						items
					), 
					React.createElement(Preloader, {clasName: preloaderClasses})
				)
			)
		}
	});

	module.exports = FlexView;

/***/ },
/* 22 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 23 */,
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes += ' ' + arg;
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}

			return classes.substr(1);
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(26);

	var _=__webpack_require__(19);
	var React = __webpack_require__(9);
	var classNames = __webpack_require__(24);

	var Preloader = React.createClass({displayName: "Preloader",
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
				React.createElement("div", {className: classes}, 
					React.createElement("span", {className: "wave1"}), 
					React.createElement("span", {className: "wave2"}), 
					React.createElement("span", {className: "wave3"}), 
					React.createElement("span", {className: "wave4"}), 
					React.createElement("span", {className: "wave5"})
				)
			);
		}
	});
	module.exports = Preloader;

/***/ },
/* 26 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 27 */,
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(29);

	var $ = __webpack_require__(6);
	var _ = __webpack_require__(19);
	var classNames = __webpack_require__(24);
	var React = __webpack_require__(9);
	var PureRenderMixin = React.addons.PureRenderMixin;

	var ArticleHeader = React.createClass({displayName: "ArticleHeader",
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
				React.createElement("div", {className: "article-header-title", key: "article-header"}, 
					React.createElement("button", {type: "button", className: "close", "data-diamiss": "modal"}, 
						React.createElement("span", null, "×")
					), 
					React.createElement("div", {className: classesHeaderPiture, style: {background: "url(" + this.props.story.image + ")"}}, 
						React.createElement("div", {className: classesHeaderCaption}, 
							React.createElement("a", {href: this.props.story.hsareURL, target: "_blank"}, 
								React.createElement("h3", null, this.props.story.title)
							), 
							React.createElement("a", {className: classesImageSource, target: "_blank", href: "https://www.google.com/search?q=" + this.props.story.imageSource}, 
								React.createElement("span", {className: "glyphicon glyphicon-copyright-mark"}), 
								this.props.story.imageSource
							)
						)
					)
				);
			rows.push(titleRow);

			if(hasBackgrounds){
				var backgroundRows = _.map(this.props.story.backgrounds, function(value, i){
					return (
						React.createElement("a", {className: "article-backgrounds-content", 
						 href: value.href, 
						 target: "_blank", 
						 key: "background" + i}, 
						 	React.createElement("h4", null, value.title + ":" + value.text)
						)
					);
				});

				rows.push(
					React.createElement("div", {className: "article-backgrounds", key: "article-backgrounds"}, 
						backgroundRows, 
						React.createElement("span", {className: "article-backgrounds-arrow glyphicon glyphicon-chevron-right"})
					)
				);
			}

			return (
				React.createElement("div", {className: "ArticleHeader modal-header"}, 
					rows
				)
			);
		}
	});

	var ArticleBody = React.createClass({displayName: "ArticleBody",
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
					innerRows.push(React.createElement("h3", {classNames: "questions-title", key: "questions-title"+i}, item.title))
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
						React.createElement("div", {className: "question-answer", key: "question-answer-"+i+"-"+j}, 
							React.createElement("div", {className: "questions-answer-meta"}, 
								React.createElement("img", {className: classesAvatar, src: value.avatar}), 
								React.createElement("span", {className: "author"}, value.name), 
								React.createElement("span", {className: "bio"}, value.name)
							), 
							React.createElement("div", {className: "question-answer-content", dangerouslySetInnerHTML: {__html:value.content}})
						)
					);
				});

				Array.prototype.push.apply(innerRows, answers);
				
				//外链
				if(item.link){
					innerRows.push(
						React.createElement("div", {className: "view-more", key: "view-more" + i}, 
							React.createElement("a", {href: item.link.href, target: "_blank"}, React.createElement("b", null, item.link.text))
						)
					);
				}

				questions.push(
					React.createElement("div", {className: "question", key: "question" + i}, 
						innerRows
					)
				);

				//分隔符
				if(i < length -1){
					questions.push(React.createElement("hr", {className: "question-separator", key: "question-separator" + i}));
				}
			}
			return (
				React.createElement("div", {className: "ArticleBody modal-body"}, 
					questions
				)
			);
		}
	});

	var ArticleView = React.createClass({displayName: "ArticleView",
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
					React.createElement(ArticleHeader, {key: "header", story: this.props.story}),
					React.createElement(ArticleBody, {key: "body", contents: this.props.story.contents})
				];
			}

			return (
				React.createElement("div", {id: this.props.id, className: "ArticleView modal fade"}, 
					React.createElement("div", {className: "modal-dialog modal-lg"}, 
	                    React.createElement("div", {className: "modal-content"}, 
						rows
						)
					)
				)
			);
		}
	});

	module.exports = ArticleView;

/***/ },
/* 29 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);