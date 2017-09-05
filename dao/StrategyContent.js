/**
 * Created by jshy on 2016/12/27.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StrategySehema=new Schema({
    mac: String,
    sn:String,
    region:String,
    sw:String,
    hw:String,
    enable: {type:Number,default:0},
    confUpdateMode: {type:Number,default:0},
    confUpdatePeriod: {type:Number,default:0},
    protocol:   String,
    period: {type:Number,default:0},
    actionMax: {type:Number,default:0},
    resendNum: {type:Number,default:0},
    sendArray: Array,
    extralArray:Array

});
mongoose.model("strategy", StrategySehema)
var StrategyContent = mongoose.model('strategy');

// 查询所有
exports.findAll = function(params, callback) {
    var mac = params.mac;
    var sort = params.sort;
    var from = params.from;
    var limit = params.limit;
    var mac=params  ? (params.mac || ''):'';
    var sn=params  ? (params.sn || ''):'';
    var region=params  ? (params.region || ''):'';
    var sw=params  ? (params.sw || ''):'';
    var hw=params  ? (params.hw || ''):'';
    var str =[];

    if(mac!=''){
        str.push({mac:mac});
    }

    if(sn!=''){
        str.push({sn:sn});
    }
    if(region!=''){
        str.push({region:region});
    }
    if(sw!=''){
        str.push({sw:sw});
    }
    if(hw!=''){
        str.push({hw:hw});
    }
    if(str.length>0){
        StrategyContent.find({
            "$and":str
        }).sort(sort).skip(from).limit(limit).exec(function(err, strategy) {
            callback(err ? {} : strategy);
        });
    }else{
        StrategyContent.find().sort(sort).skip(from).limit(limit).exec(function(err, strategy) {
            callback(err ? {} : strategy);
        });
    }
}
exports.count=function(params,callback){
    var mac = params.mac;
    var sort = params.sort;
    var from = params.from;
    var limit = params.limit;
    var mac=params  ? (params.mac || ''):'';
    var sn=params  ? (params.sn || ''):'';
    var region=params  ? (params.region || ''):'';
    var sw=params  ? (params.sw || ''):'';
    var hw=params  ? (params.hw || ''):'';
    var str =[];

    if(mac!=''){
        str.push({mac:mac});
    }

    if(sn!=''){
        str.push({sn:sn});
    }
    if(region!=''){
        str.push({region:region});
    }
    if(sw!=''){
        str.push({sw:sw});
    }
    if(hw!=''){
        str.push({hw:hw});
    }
    if(str.length>0){
        StrategyContent.count({
            "$and":str
        },function(err, count) {
            callback(err ? 0 : count);
        });
    }else{
        StrategyContent.count(function(err, strategy) {
            callback(err ? 0 : strategy);
        });
    }
}
exports.save=function(params,callback){
    StrategyContent.collection.insert(params,function(err,docs){
        console.log(err);
    });
}
exports.update=function(params,callback){
    try{
        StrategyContent.findByIdAndUpdate(params._id, params, {upsert: true}, function(err) {
            console.log(err);
        });
    }catch (e){
        console.log(e);
    }

}

exports.find=function(params,callback){
    StrategyContent.find(params,function(err,strategy){
        callback(err ? {} : strategy);
    });
}
exports.del=function(params,callback){
    StrategyContent.remove(params,function(err,docs){
        console.log(err);
    });
}
exports.newInstance = function() {
    return new StrategyContent();
}

