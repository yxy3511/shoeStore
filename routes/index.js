var express = require('express');
var resource = require('./../dao/Resource.js');

// home page
exports.home = function(req, res) {
	res.render('index', {});
};
exports.test = function(req, res) {
    res.render('test', {});
};
exports.resource = function(req, res) {
    res.render('resource', {});
};
exports.addResouce=function(req,res){
    resource.saveResource(req,res);
    res.redirect('/resource');
};

// 查询所有资源
exports.findResource = function(req, res) {
    try {
        var index = req.query.index || 1;
        var size = req.query.size || 100;
        var search = req.query.search;


        var result = {};
        result.index = index;
        result.size = size;
        result.search = search ? search : '';

        var params = {};
        // search by keyword

        // params.model = '';
        params.sort = '-timestamp';
        params.from = (index - 1) * size;
        params.limit = size;

        // blogs in current page
        resource.findAll(params, function (resources) {
            result.resources = resources;

            resource.count(params, function (count) {
                result.pageCount = Math.ceil(count / size);
                result.totalCount = count;
                res.render('resource', result);
            });

        });
    } catch (e) {
        console.log(e);
    }
};



//修改资源配置信息
exports.editResourceContent= function (req, res) {
    var hMasterAddress=req.query.hMasterAddress;
    var hSlaveAddress =req.query.hSlaveAddress;
    var mac =req.query.mac;
    var sn=req.query.sn;
    var type=req.query.type;
    var id=req.query.id;
    var params = {};
    params.hMasterAddress=hMasterAddress==undefined?"":hMasterAddress;
    params.hSlaveAddress=hSlaveAddress==undefined?"":hSlaveAddress;
    params.sn=sn==undefined?"":sn;
    params.mac=mac==undefined?"":mac;
    params.type=type==undefined?"":type;
    params.id=id;
    res.render('resourceEdit', params);
};

exports.updateResource =function(req, res){
    req.setEncoding("utf-8");
    var id =req.body.id;
    var hMasterAddress=   req.body.hMasterAddress  ;
    var hSlaveAddress= req.body.hSlaveAddress;
    var mac =req.body.mac;
    var sn=req.body.sn;
    var type=req.body.type;

    var params={};
    params.hMasterAddress=hMasterAddress==undefined?"":hMasterAddress;
    params.hSlaveAddress=hSlaveAddress==undefined?"":hSlaveAddress;
    params.sn=sn==undefined?"":sn;
    params.mac=mac==undefined?"":mac;
    params.type=type==undefined?"":type;
    params.id=id;

    var flag=true;
    if(null ==hMasterAddress || ""==hMasterAddress){
        params.message="主采集上报地址不能为空";
        res.render('resourceEdit', params);
        return false;
    }
    if(null ==hSlaveAddress || ""==hSlaveAddress){
        params.message="备采集上报地址不能为空";
        res.render('resourceEdit', params);
        return false;
    }
    if(null==type|| ""==type){
        params.message="分配类型不能为空";
        res.render('resourceEdit', params);
        return false;
    }


    if('undefined'==id || null==id  || ""==id ){
        var countparam={};
        //如果是默认配置只允许有一条数据
        if("0"==params.type){
            countparam.type="0";
            resource.count(countparam, function (count) {
                if(count>0){
                    params.message="默认配置只能有一条数据！";
                    res.render('resourceEdit', params);
                }else{
                    flag=  resource.saveResource(req,res);
                    if( undefined ==flag ||flag ){
                        res.redirect('/resource');
                    }else{
                        res.send("提交失败");
                    }
                }
            });
        }else {
            flag=  resource.saveResource(req,res);
            if( undefined ==flag ||flag ){
                res.redirect('/resource');
            }else{
                res.send("提交失败");
            }
        }
    }else {
        flag=  resource.updateResource(req,res);
        if( undefined ==flag ||flag ){
            res.redirect('/resource');
        }else{
            res.send("提交失败");
        }
    }


};


exports.delResourceContent=function (req,res) {
    resource.del(req,res);
    res.redirect('/resource');
}

exports.queryResourceByParam=function (req,res) {
    var index = req.query.index || 1;
    var size = req.query.size || 100;
    var search = req.query.search;
    var result = {};
    result.index = index;
    result.size = size;
    result.search = search ? search : '';

    var params = {};
    // search by keyword
    var hMasterAddress=req.body.hMasterAddress;
    var hSlaveAddress =req.body.hSlaveAddress;
    var mac =req.body.mac;
    var sn=req.body.sn;
    var type=req.body.type;
    // params.model = '';
    params.sort = '-timestamp';
    params.from = (index - 1) * size;
    params.limit = size;
    params.hMasterAddress=hMasterAddress==undefined?"":hMasterAddress;
    params.hSlaveAddress=hSlaveAddress==undefined?"":hSlaveAddress;
    params.sn=sn==undefined?"":sn;
    params.mac=mac==undefined?"":mac;
    params.type=type==undefined?"":type;
    resource.findbyparams(params,
        function (resources) {
            result.resources = resources;
            resource.count(params, function (count) {
                result.pageCount = Math.ceil(count / size);
                result.totalCount = count;
                res.render('resource', result);
            });
            // res.render('resource', result);
        }
    );
}

