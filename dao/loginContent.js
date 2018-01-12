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


exports.searchUser = function(key,page,callback){
    var sql = null
    var pageNum = +page.pageNum
    var pageSize = +page.pageSize
    if(key && key=='all'){
        sql = "select *,(select COUNT(1) from users) as totalCount from users order by uid desc Limit "+(pageNum-1)*pageSize+','+pageSize;
    }else{
        sql = "select * ,(select COUNT(1) from users where uname = '"+key+"') as totalCount from users where uname = '"+key+"' order by uid desc Limit "+(pageNum-1)*pageSize+','+pageSize;
    }
    query(sql,callback)
}

//保存
exports.saveUser = function(text,callback){
    var sql = null
    var md5Pass = text.pwd ? cryptico.createHash('md5').update(text.pwd).digest('base64') : '';
    if(text.uid && text.uid==0){
        sql = "insert into users(uname,pwd,role) values('"+text.uname+"','"+md5Pass+"',"+text.role+");"
    }else{
        sql = "update users set uname='"+text.uname+"',pwd='"+md5Pass+"',role="+text.role+" where uid="+text.uid;
    }
    query(sql,callback)
}

exports.delUser = function(uid,callback){
    var sql = null
    sql = "DELETE FROM users WHERE uid ="+uid;
    query(sql,callback)
}

/**
*
*获得用户
*/

/*exports.getUsers = function(key,callback){
    var searchSql = null
    if(key && key == 'all'){
        searchSql = "select * from users"
    }
   
    query(searchSql,callback)
}*/