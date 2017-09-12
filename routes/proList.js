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

// toProListEdit=function(req,res){
//     res.render('proListEdit', {});
// }
// toProList = function(req,res){
//     res.render('proList')
// }

module.exports = function (app) {
    router.get('/proList',getProList);
    router.get('/editPro',editPro);
}


getProList = function(req,res){
    try{
        //获取商品列表
        var pname = req.query.pname || null
        var price = req.query.price || null
        var desc = req.query.desc || null
        var sort = req.query.sort || null
        // var state = req.query.state || null
        // var imgs = req.query.imgs || null

        var str = {};

        pname ? str.pname = pname :  null
        price ? str.price = price :  null
        desc ? str.desc = desc :  null
        sort ? str.sort = sort :  null
        // state ? str.state = state :  null
        // imgs ? str.imgs = imgs :  null
        var cunt = 0;
        var queryStr = '';
        for(var i in str){
            console.log('i '+i)
            if(cunt == 0){
                queryStr = '?' + i+'='+str.i
            }else{
                queryStr = queryStr + ',' + i + '=' + str.i
            }
        }
        console.log('queryStr'+queryStr)
        if(queryStr == ''){
            proListContent.getProList(function(qerr,vals,fields){
                render('proList',vals)
            })
        }else{
            proListContent.searchPro(queryStr,function(qerr,vals,fields){
                render('proList',vals)
            })
        }
        
        
    }catch(e){
        console.log(e)
    }
}

editPro = function(req,res){
    //编辑商品时，获取商品详情
    var pname = req.query.pname || null
    var price = req.query.price || null
    var desc = req.query.desc || null
    var sort = req.query.sort || null
    var state = req.query.sort || null
    var imgs = req.query.sort || null
    var str = {};

    pname ? str.pname = pname :  null
    price ? str.price = price :  null
    desc ? str.desc = desc :  null
    sort ? str.sort = sort :  null
    state ? str.state = state :  null
    imgs ? str.imgs = imgs :  null
    //添加商品时
    if(str == null){
        render('uploadImg')
    }else{
        //编辑商品时
        render('uploadImg',str)
    }
}
