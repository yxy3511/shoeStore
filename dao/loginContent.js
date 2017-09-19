/**
 * Created by yxy3511 on 2017/09/14.
 */
var query=require("./mysql.js");  
var cryptico = require('crypto');
// var md5 = cryptico.createHash('md5');

/**
 *
 *添加用户
 */
exports.addUser = function(params,callback){

    var sql = null ;
    var md5Pass = params.pwd ? cryptico.createHash('md5').update(params.pwd).digest('base64') : '';
    if(params.uname && params.pwd && params.role){
        sql = "insert into users(uname,pwd,role) values('"+params.uname+"','"+md5Pass+"',"+params.role+");"
    }else if(params.uname && params.pwd){
        sql = "insert into users(uname,pwd) values('"+params.uname+"','"+md5Pass+"');"
    }else{
        return false;
    }
    query(sql,callback)
}


exports.searchUser = function(uname,callback){
    var sql = "select * from users where uname = '"+uname+"';"
    query(sql,callback)
}