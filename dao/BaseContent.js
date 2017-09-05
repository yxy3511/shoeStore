/**
 * Created by xuanx on 2016/11/30.
 *
 *  数据 采集 基础 日志信息
 *
 service:    {type: Number, default: 0},  //业务类型 场景
 time:       {type: Number, default: 0},//当前事件发生时间，采用UTC时间描述，单位毫秒，如2014年10月1日 00:00:00用UTC时间应表示为1414800000000。
 uid:        String,//用户唯一标识，比如：智能卡号、机顶盒序列号、运营商自定义用户id等
 ca:	        String,//智能卡号
 sn:	        String,//机顶盒序列号
 mac:		String,// mac
 ip:		    String,// 客户端IP
 wlanmac:    String,// WIFI mac
 model:      String,//型号
 romversion: String,// rom版本
 deviceversion:  String,// 硬件版本
 lanucherversion:    String,// lanucher 版本
 actiontype:         String,// 采集数据类型
 actionInfo:         String// 扩展内容
 *
 *
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BaseContentSchema = new Schema({
    service:    {type: Number, default: 0},
    time:       {type: Number, default: 0},
    uid:        String,
    ca:	        String,
    sn:	        String,
    mac:		String,
    ip:		    String,
    wlanmac:    String,
    model:      String,
    romversion: String,
    deviceversion:  String,
    lanucherversion:    String,
    actiontype:         String,
    actionInfo:         String
});

mongoose.model("baseContent", BaseContentSchema)
var BaseContent = mongoose.model('baseContent');


exports.findAll = function(callback) {
    BaseContent.find({removed: false})
        .sort('-time')
        .exec(function(err, contents) {
            callback(err ? {} : contents);
        });
}
// find BaseContent
exports.find = function(params, callback) {
    var model = params.model;
    var mac = params.mac;
    var sort = params.sort;
    var from = params.from;
    var limit = params.limit;
    //model, mac
    BaseContent.find()
        .sort(sort)
        .skip(from)
        .limit(limit)
        .exec(function(err, content) {
            callback(err ? {} : content);
        });
}

// find content' count
exports.count = function(params, callback) {
    BaseContent.count(function(err, count) {
        callback(err ? 0 : count);
    });
}

// find content by _id
exports.findById = function(_id, callback) {
    BaseContent.findOne({_id: _id}, function(err, content) {
        callback(err ? undefined : content);
    });
}

// save or update a content
exports.saveOrUpdate = function(content) {
    BaseContent.findByIdAndUpdate(content._id, content, {upsert: true}, function(err) {
        console.log(err);
    });
}

exports.updateById = function(_id, content) {
    BaseContent.update({_id: _id}, content, function(err) {
        console.log(err);
    });
}

exports.sticky = function(_id, callback) {
    BaseContent.findOne({_id: _id}, function(err, content) {
        if (err) {
            console.log(err);
        } else if (content.sticky != undefined){
            var sticky = content.sticky + 1;
            BaseContent.update({_id: _id}, {sticky: sticky}, function(err) {
                callback(err);
            });
        }
    });
}

exports.newInstance = function() {
    return new BaseContent();
}

