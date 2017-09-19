/**
 * Created by xuanx on 2016/12/27
 *
 *   策略配置
 *
 *
 */
var express = require('express');
var router = express.Router();
var proListContent = require('./../dao/proListContent.js');
 
// toProListEdit=function(req,res){
//     res.render('proListEdit', {});
// }
toProList = function(req,res){
    res.render('proList')
}

getProList = function(req,res,next){
    try{
        proListContent.getProList(function(err,vals){
            // console.log('valllll:',vals)
            //頁數
            var totalCount = vals.length
            var pageLine = 10
            var pageCount = -1
            if(parseInt(totalCount/pageLine) == 0){
                pageCount = 1
            }else if(totalCount%pageLine > 0 && totalCount%pageLine < pageLine){
                pageCount = parseInt(totalCount/pageLine) + 1
            }else{
                pageCount = parseInt(totalCount/pageLine)
            }
            var resArr = {}
            for(var i in vals){
                // console.log('time:',typeof vals[i].up_date)
                // vals[i].up_date = vals[i].up_date.pattern("yyyy-MM-dd")
                // vals[i].up_date = new Date(vals[i].up_date).format("yyyy-MM-dd");
                resArr[i] = vals[i]
            }

            if(vals.length > 0){
                //获取sorts
                proListContent.getSorts('all',function(e,val){
                    var sortArr = {}
                    for(var j in val){
                        sortArr[val[j].id] = val[j].name
                    }
                    res.render('proList',{
                    // res.render('tbodyPro',{
                        vals: JSON.stringify(resArr),
                        sorts: JSON.stringify(sortArr),
                        pageCount: pageCount,
                        totalCount: totalCount
                    })
                })
                
            }
        })
        /*//获取商品列表
        var pname = req.query.pname || null
        var price = req.query.price || null
        var desc = req.query.desc || null
        var sort = req.query.sort || null
        // var state = req.query.state || null
        // var imgs = req.query.imgs || null

        var str = {};

        pname ? (str.pname = pname) :  null
        price ? (str.price = price) :  null
        desc ? (str.desc = desc) :  null
        sort ? (str.sort = sort) :  null
        // state ? str.state = state :  null
        // imgs ? str.imgs = imgs :  null
        var cunt = 0;
        var queryStr = '';
        for(var i in str){
            console.log('i '+i)
            if(cunt == 0){
                queryStr = '?' + i+'='+str.i
            }else{
                queryStr = queryStr + ',' + i + '=' + str.i
            }
        }
        console.log('queryStr'+queryStr)
        if(queryStr == ''){
            proListContent.getProList(function(qerr,vals,fields){
                res.render('proList',vals)
            })
        }else{
            proListContent.searchPro(queryStr,function(qerr,vals,fields){
                res.render('proList',vals)
            })
        }*/
        
        
    }catch(e){
        console.log(e)
    }
}
savePro = function(req,res,next){
    try{
        var id = req.query.id || null
        var pname = req.body.pname || null
        var price = req.body.price || null
        var state = req.body.state || null
        var desc = req.body.desc || null
        var imgs = req.body.allImg || null
        var sort = req.body.sort || null

        var params = {}
        pname ? (params.pname = pname) : null
        price ? (params.price = price) : null
        state ? (params.state = state) : null
        desc ? (params.desc = desc) : null
        imgs ? (params.imgs = imgs) : null
        sort ? (params.sort = sort) : null
        if(id == 0){
            proListContent.addPro(params,function(err,vals){
                global.imagesArr = []
                if(err){
                    res.render('error',{
                        message: 'Error',
                        errMsg: err.sqlMessage
                    })
                }else if(vals.affectedRows > 0){
                    res.redirect('/manage/proList')
                    // res.render('proList',{
                    //     msg: '添加商品成功！'
                    // })
                }
            })
        }else{
            proListContent.editPro(id,params,function(err,vals){
                global.imagesArr = []
                if(err){
                    console.log(err)
                }else if(vals.affectedRows > 0){
                    res.redirect('/manage/proList')
                }
            })
        }
        
    }catch(e){
        console.log(e)
    }
    
};

delPro = function(req,res,next){
    try{
        var id = req.params.id
        proListContent.delPro(id,function(error,vals){
            if(error){
                console.log(error)
            }else if(vals.affectedRows > 0){
                //删除成功
                res.redirect('/manage/proList')
                // res.render('proList')
            }
        })
    }catch(e){
        console.log(e)
    }
}

descPro = function(req,res,next){
    try{
        var id = req.params.id
        proListContent.descPro(id,function(err,vals){
            if(err){
                console.log(err)
            }else if(vals.length > 0){
                //vals是数组
                res.render("proDesc",vals[0])
            }
        })
    }catch(e){
        console.log(e)
    }
}

editPro = function(req,res,next){
    try{
        var id = req.params.id || null
        if(id != null){
            proListContent.descPro(id,function(err,vals){
                if(err){
                    console.log(err)
                }else if(vals.length > 0){
                    //vals是数组
                    res.render("uploadImg",vals[0])
                }
            })
            
        }else{
            res.render("uploadImg")
        }
        
        
    }catch(e){
        console.log(e)
    }
}
searchPro = function(req,res,next){
    try{
        var key = req.query.key
        if(key != null){
            proListContent.searchPro(key,function(err,vals){
                if(err){
                    console.log(err)
                }else if(vals.length > 0){
                    var resArr = {}
                    for(var i in vals){
                        resArr[i] = vals[i]
                    }
                    //获取sorts
                    proListContent.getSorts('all',function(e,val){
                        var sortArr = {}
                        for(var j in val){
                            sortArr[val[j].id] = val[j].name
                        }
                         res.render('proList',{
                            vals: JSON.stringify(resArr),
                            sorts: JSON.stringify(sortArr)
                        })
                        // res.render('tbodyPro',vals[0])
                    })
                   
                }else{
                    // res.redirect('/manage/proList')
                    proListContent.getProList(function(err,vals){
                        // console.log('valllll:',vals)
                        //頁數
                        var totalCount = vals.length
                        var pageLine = 10
                        var pageCount = -1
                        if(parseInt(totalCount/pageLine) == 0){
                            pageCount = 1
                        }else if(totalCount%pageLine > 0 && totalCount%pageLine < pageLine){
                            pageCount = parseInt(totalCount/pageLine) + 1
                        }else{
                            pageCount = parseInt(totalCount/pageLine)
                        }
                        var resArr = {}
                        for(var i in vals){
                            resArr[i] = vals[i]
                        }

                        if(vals.length > 0){
                            //获取sorts
                            proListContent.getSorts('all',function(e,val){
                                var sortArr = {}
                                for(var j in val){
                                    sortArr[val[j].id] = val[j].name
                                }
                                res.render('proList',{
                                // res.render('tbodyPro',{
                                    vals: JSON.stringify(resArr),
                                    sorts: JSON.stringify(sortArr),
                                    pageCount: pageCount,
                                    totalCount: totalCount,
                                    msg:'查询无结果！'
                                })
                            })
                            
                        }
                    })
                }
            })
        }
        
    }catch(e){
        console.log(e)
    }
}


router.get('/proList',getProList);
router.get('/delPro/:id',delPro);
router.post('/savePro',savePro);
// router.post('/upPro/:id',upPro);
router.get('/descPro/:id',descPro);
router.get('/editPro/:id',editPro);
router.get('/searchPro',searchPro);
module.exports = router