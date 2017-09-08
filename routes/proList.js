/**
 * Created by xuanx on 2016/12/27
 *
 *   策略配置
 *
 *
 */
var express = require('express');
var router = express.Router();
var proListContent = require('./../dao/proListContent.js');

toProListEdit=function(req,res){
    res.render('proListEdit', {});
}
toProList = function(req,res){
    res.render('proList')
}

module.exports = function (app) {
    router.get('/proList',getProList);
    
}


getProList = function(req,res){
    try{
        //获取商品列表
        var pname = req.query.pname || null
        var price = req.query.price || null
        var desc = req.query.desc || null
        var sort = req.query.sort || null
        var update = req.query.update || null

        var str = {};

        pname ? str.pname = pname :  null
        price ? str.price = price :  null
        desc ? str.desc = desc :  null
        sort ? str.sort = sort :  null
        update ? str.update = update :  null
        var cunt = 0;
        var queryStr = '';
        for(var i in str){
            console.log('i '+i)
            if(cunt == 0){
                queryStr = i+'='+str.i
            }else{
                queryStr = queryStr + ',' + i + '=' + str.i
            }
            
        }
        console.log('queryStr'+queryStr)
        query(queryStr,function(qerr,vals,fields){
            render('proList',vals)
        })
        
    }catch(e){
        console.log(e)
    }
}


