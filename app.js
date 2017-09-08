var express = require('express');
var path = require('path');
var debug = require('debug')('data_collect');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//var index = require('./routes/index');
//var content = require('./routes/content');
//var admin = require('./routes/admin');
var strategy= require('./routes/strategy');
var page= require('./routes/page');
var upload = require('./routes/upload')
// var proList = require('./routes/proList')
var mongodb=require('mongodb');

var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// app.engine('html', require('jade').__express);
// app.set('view engine', 'html');
app.set('env', 'production');

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.session({ secret: "OZhCLfxlGp9TtzSXmJtq" }));
app.use(express.static(path.join(__dirname, 'public')))
app.use('/manage',strategy)
// app.use('/manage',proList)
app.use('/',page)
app.use('/',upload)

//app.get('/test', index.test);
//app.get('/contents', content.findContents);
/*app.get('/admin',strategy.findStrategy);
//app.get('/resource',index.findResource);

app.get('/toStrategyPage',strategy.toPage);
//查询
app.get('/strategQuery/',strategy.findStrategy);
//策略配置保存
app.post('/strategyForm/',strategy.save);
//策略配置删除
app.get('/strategydel/', strategy.del);
//策略配置修改
app.get('/strategyeedit/',strategy.edit);*/

app.set('port', process.env.PORT || 8300);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    res.render('404');
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
        message: 'Error',
        error: {}
    });
});

// connect to the database
mongoose.connect('mongodb://localhost/data_collect');
app.set('port', 3000);
var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
module.exports = app;
/*var server = app.listen(app.get('port'), function() {
    debug('Express server listening on port ' + server.address().port);
});*/