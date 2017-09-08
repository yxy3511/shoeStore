/**
 * Created by xuanx on 2016/12/27
 *
 *   策略配置
 *
 *
 */
var express = require('express');
var router = express.Router();
var StrategyContent = require('./../dao/StrategyContent.js');
toStrategyEdit=function(req,res){
    res.render('strategyEdit', {});
}

// 查询所有
findStrategy = function(req, res) {
    try {
        var index = req.query.index || 1;
        var size = req.query.size || 100;
        var mac = req.query.fmac;
        var sn = req.query.fsn;
        var region = req.query.fregion;
        var sw = req.query.fsw;
        var hw = req.query.fhw;

        var result = {};
        result.index = index;
        result.size = size;
        result.mac=mac;
        result.sn=sn;
        result.region=region;
        result.sw=sw;
        result.hw=hw;

        var params = {};
        // params.model = '';
        params.sort = '_id';
        params.from = (index - 1) * size;
        params.limit = size;
        if(mac!=''){
            params.mac=mac;
        }
        if(sn!=''){
            params.sn=sn;
        }
        if(region!=''){
            params.region=region;
        }
        if(sw!=''){
            params.sw=sw;
        }
        if(hw!=''){
            params.hw=hw;
        }
        // blogs in current page
        StrategyContent.findAll(params, function (strategy) {
            console.log('strategy',strategy)
            result.strategy = strategy;
            StrategyContent.count(params, function (count) {
                result.pageCount = Math.ceil(count / size);
                result.totalCount = count;
                res.render('strategy', result);
            });
        });
    }catch (e){
        console.log(e);
    }

}
/**
 * 保存
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
    console.log('del')
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

router.get('/admin',findStrategy);
//app.get('/resource',index.findResource);

router.get('/toStrategyPage',toStrategyEdit);
//查询
router.get('/strategQuery/',findStrategy);
//策略配置保存
router.post('/strategyForm/',save);
//策略配置删除
router.get('/strategydel/', del);
//策略配置修改
router.get('/strategyeedit/',edit);

module.exports = router