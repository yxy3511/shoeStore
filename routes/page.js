/**
 * Created by xuanx on 2016/12/27
 *
 *   策略配置
 *
 *
 */
var express = require('express');
var router = express.Router();

rePage=function(req,res){
	res.redirect('/page');
}
toPage=function(req,res){
    res.render('page');
}
toAbout=function(req,res){
	res.render('aboutUs');
}
toProducts=function(req,res){
	res.render('products');
}
toProDesc=function(req,res){
    res.render('proDesc',req.params.id);
}
toContact=function(req,res){
	res.render('contact');
}

module.exports = function(app){
    router.get('/',rePage);
    router.get('/page',toPage);
    router.get('/aboutUs',toAbout);
    router.get('/products',toProducts);
    router.get('/proDesc/:id',toProDesc);
    router.get('/contact',toContact);
    app.use('/',router);
}
