/**
 * Created by xuanx on 2016/12/27
 *
 *   策略配置
 *
 *
 */
var express = require('express');
var router = express.Router();
var proListContent = require('./../dao/proList.js');
toProListEdit=function(req,res){
    res.render('proListEdit', {});
}

module.exports = function (app) {
    router.get('/proList',findPro);
    //app.get('/resource',index.findResource);
    router.get('/toProListEdit',toProListEdit);
    //查询
    router.get('/proQuery/',findProList);
    //策略配置保存
    router.post('/ProListForm/',save);
    //策略配置删除
    router.get('/Prodel/', del);
    //策略配置修改
    router.get('/proEdit/',edit);

    
}

// 查询所有
findPro = function(req, res) {
    try {
        var id = req.query.id || 1;
        var pname = req.query.pname || 100;
        var price = req.query.price;
        var desc = req.query.desc;
        var sort = req.query.sort;

        var result = {};
        result.id = id;
        result.pname = pname;
        result.price=price;
        result.desc=desc;
        result.sort=sort;

        var params = {};
        // params.model = '';
        // params.sort = '_id';
        // params.from = (index - 1) * size;
        params.limit = size;
        if(id!=''){
            params.id=id;
        }
        if(pname!=''){
            params.pname=pname;
        }
        if(price!=''){
            params.price=price;
        }
        if(desc!=''){
            params.desc=desc;
        }
        if(sort!=''){
            params.sort=sort;
        }
        // blogs in current page
        proListContent.findAll(params, function (proList) {
            result.proList = proList;
            proListContent.count(params, function (count) {
                // result.pageCount = Math.ceil(count / size);
                result.pageCount = 10;
                // result.totalCount = count;
                result.totalCount = 20;
                res.render('proList', result);
            });
        });
    }catch (e){
        console.log(e);
    }

}
/**
 * 保存------------改到这-----------------------------
 */
save = function(req, res) {
    console.log('save')
    req.setEncoding("utf-8");
    var f_mac=req.body.mac;
    var f_sn=req.body.sn;
    var f_region=req.body.region ? req.body.region:'';
    var f_sw=req.body.sw ? req.body.sw:'';
    var f_hw=req.body.hw ? req.body.hw:'';
    var f_enable=req.body.enable ? req.body.enable:0;
    var f_confUpdateMode=req.body.confUpdateMode ? req.body.confUpdateMode:0;
    var f_confUpdatePeriod=req.body.confUpdatePeriod;
    var f_protocol=req.body.protocol;
    var f_period=req.body.period;
    var f_actionMax=req.body.actionMax;
    var f_resendNum=req.body.resendNum;
    var f_sendArray={};
    var sendArray=req.body.sendArray;
    if(sendArray.indexOf(",")>0){
        f_sendArray=sendArray.split(",");
    }else{
        f_sendArray=sendArray;
    }
    var f_extralArray={};
    var extralArray=req.body.extralArray;
    if(extralArray.indexOf(",")>0){
        f_extralArray=extralArray.split(",");
    }else{
        f_extralArray=extralArray;
    }
    var f_id=req.body.objId;
    console.log(f_id);
    try {
        var data={};
        data.mac=f_mac;
        data.sn=f_sn;
        data.region=f_region;
        data.sw=f_sw;
        data.hw=f_hw;
        data.enable= f_enable;
        data.confUpdateMode=f_confUpdateMode;
        data.confUpdatePeriod=f_confUpdatePeriod;
        data.protocol=f_protocol;
        data.period=f_period;
        data.actionMax=f_actionMax;
        data.resendNum=f_resendNum;
        data.sendArray=f_sendArray;
        data.extralArray=f_extralArray;
        if(f_id==''||f_id==null){
            StrategyContent.save(data,function(err,docs){
                console.log(err);
            });
        }else{
            data._id=f_id;
            StrategyContent.update(data,function(err,docs){
                console.log(err);
            });
        }
    } catch (e) {
        console.log(e);
        res.redirect('/manage/admin');
    }
    res.redirect('/manage/admin');
}
/**
 * 修改
 */
edit = function(req, res) {
    req.setEncoding("utf-8");
    var sid=req.query.sid;
    var result = {};
    try {
        var data={};
        data._id=sid;
        StrategyContent.find(data,function(strategy){
            if(strategy.length>0){
                result.ustrategy = strategy[0]._doc;
                res.render('strategyEdit', result);
            }else{
                res.render('strategyEdit', {});
            }
        });
    } catch (e) {
        console.log(e);
        res.render('strategyEdit', {});
    }
}

/**
 * 删除
 */
del = function(req, res) {
    req.setEncoding("utf-8");
    var sid=req.query.sid;
    try {
        var data={};
        data._id=sid;
        StrategyContent.del(data,function(err,docs){
            console.log(err);
        });
    } catch (e) {
        console.log(e);
        res.redirect('/manage/admin');
    }
    res.redirect('/manage/admin');
}

