var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');



var app = express();//生成一个app实例

// base dir setup
global.__base = __dirname;

// view engine setup
app.set('views', path.join(__dirname, 'views')); //设置views文件夹为存放视图的文件夹
app.set('view engine', 'jade');//设置模板引擎

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));//设置ico路径
app.use(logger('dev'));//加载日志中间件
app.use(bodyParser.json());//加载解析json中间件
app.use(bodyParser.urlencoded({ extended: false }));//加载解析urlencoded请求体中间件
app.use(cookieParser());//加载解析cookie中间件
app.use(express.static(path.join(__dirname, 'public')));//设置public文件夹为存放静态文件的目录

//路由控制器
app.use('/',  require('./routes'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
module.exports = app;
