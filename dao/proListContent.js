/**
 * Created by jshy on 2016/12/27.
 */
var query=require("./mysql.js");  
/*query("select 1 from 1",function(err,vals,fields){  
    //do something  
    console.log('The solution is: ', vals);  
}); 
*/

/*exports.operaPro = function(sql,callback){
    query(sql,callback)
}*/

/**
 *
 *获取商品列表
 */
exports.getProList = function(callback){
    // var searchSql = sql ? ' select * from products where '+sql : ' select * from products';
    var searchSql = 'select * from products' ;
    query(searchSql,callback)
}

/**
*
*查找商品
*/
exports.searchPro = function(key,callback){
    var searchSql = null;
    var searchSql2 = null;
    var sql = null;
    if(parseInt(key)){
        if(parseInt(key)>2){
            sql = 'select * from products where price = ' + key;
        }else{
            searchSql = 'select * from products where price = ' + key;
            searchSql2 = 'select * from products where state = ' + key;
            // sql = searvhSql union searchSql2;
        }
        
    }else{
        searchSql = "select * from products where pname = '" + key +"'";
        searchSql2 = "select * from products where desc = '" + key +"'";
        // sql = searvhSql union searchSql2;
    }
    
    query(sql,callback)
}


/**
*key is id
*删除商品
*/

exports.delPro = function(key){
    var searchSql = 'DELETE FROM products WHERE id =' + key;
    query(searchSql,callback)
}

/**
*
*增加商品
*/

exports.addPro = function(param){
    var searchSql = "insert into products(pname,price,state,desc,update,imgs) values('"+param.pname+"',"+param.price+","+param.state+",'"+param.desc+"',CURDATE(),"+param.imgs+")"
    query(searchSql,callback)
}

/**
*
*修改商品
*/

exports.editPro = function(id,param){
    var searchSql = "update products set pname='"+param.pname+"',price="+param.price+",state="+param.state+",desc='"+param.desc+"',update=CURDATE(),imgs="+param.imgs+" where pid="+id;
    query(searchSql,callback)
}