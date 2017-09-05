/**
 * Created by jshy on 2016/12/27.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var proListSehema=new Schema({
    pname: String,
    price:{type:Number,default:0},
    desc:String,
    stock:{type:Number,default:0},
    category:String
});
mongoose.model("proList", StrategySehema)
var proListContent = mongoose.model('proList');

// 查询所有
exports.findAll = function(params, callback) {
    // var pname = params.pname;
    // var price = params.price;
    // var desc = params.desc;
    // var stock = params.stock;
    // var category = params.category;

    var pid = params  ? (params.pid || ''):'';
    var pname = params  ? (params.pname || ''):'';
    var price = params  ? (params.price || 0):0;
    var desc = params  ? (params.desc || ''):'';
    var stock = params  ? (params.stock || 0):0;
    var category = params  ? (params.category || ''):'';

    var str = [];

    if(pid != ''){
        str.push({pid:pid});
    }

    if(pname != ''){
        str.push({pname:pname});
    }

    if(price != ''){
        str.push({price:price});
    }
    if(desc != ''){
        str.push({desc:desc});
    }
    if(stock != ''){
        str.push({stock:stock});
    }
    if(category != ''){
        str.push({category:category});
    }

    if(str.length>0){
        StrategyContent.find({
            "$and":str
        }).pname(pname).price(price).desc(desc).category(category).exec(function(err, proList) {
            callback(err ? {} : proList);
        });
    }else{
        proListContent.price(price).desc(desc).category(category).exec(function(err, proList) {
            callback(err ? {} : proList);
        });
    }
}
exports.count=function(params,callback){
    var pid = params  ? (params.pid || ''):'';
    var pname = params  ? (params.pname || ''):'';
    var price = params  ? (params.price || 0):0;
    var desc = params  ? (params.desc || ''):'';
    var stock = params  ? (params.stock || 0):0;
    var category = params  ? (params.category || ''):'';

    var str = [];
    if(pid != ''){
        str.push({pid:pid});
    }

    if(pname != ''){
        str.push({pname:pname});
    }

    if(price != ''){
        str.push({price:price});
    }
    if(desc != ''){
        str.push({desc:desc});
    }
    if(stock != ''){
        str.push({stock:stock});
    }
    if(category != ''){
        str.push({category:category});
    }
    if(str.length>0){
        proListContent.count({
            "$and":str
        },function(err, count) {
            callback(err ? 0 : count);
        });
    }else{
        proListContent.count(function(err, proList) {
            callback(err ? 0 : proList);
        });
    }
}
exports.save=function(params,callback){
    proListContent.collection.insert(params,function(err,docs){
        console.log(err);
    });
}
exports.update=function(params,callback){
    try{
        proListContent.findByIdAndUpdate(params._id, params, {upsert: true}, function(err) {
            console.log(err);
        });
    }catch (e){
        console.log(e);
    }

}

exports.find=function(params,callback){
    proListContent.find(params,function(err,proList){
        callback(err ? {} : proList);
    });
}
exports.del=function(params,callback){
    proListContent.remove(params,function(err,docs){
        console.log(err);
    });
}
exports.newInstance = function() {
    return new proListContent();
}

