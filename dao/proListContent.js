/**
 * Created by jshy on 2016/12/27.
 */
var query=require("./mysql.js");  
/*query("select 1 from 1",function(err,vals,fields){  
    //do something  
    console.log('The solution is: ', vals);  
}); 
*/
exports.getProList = function(search,callback){
    var searchSql = search ? ' select * from products where '+search : ' select * from products';
    query(searchSql,callback)
}