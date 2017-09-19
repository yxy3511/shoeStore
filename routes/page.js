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

rePage=function(req,res){
	res.redirect('/page');
}
toPage=function(req,res){
    res.render('page');
}
toAbout=function(req,res){
	res.render('aboutUs');
}
toProducts=function(req,res){
    try{
        proListContent.getProList('sort',function(err,vals){
            var resArr = {}
            for(var i in vals){
                /*---------------到这 分类查询----------------------*/
                resArr[vals[i].sort] = {
                    pname:vals[i]['group_concat(pname)']
                }
            }
            console.log('vvaaaalsssss:',vals)
            console.log('JSON.stringify(resArr):',JSON.stringify(resArr))
            if(vals.length > 0){
                res.render('products',{
                    vals: JSON.stringify(resArr)
                })
            }
        }) 
    }catch(e){
        console.log(e)
    }                                                                                             
}
toProDesc=function(req,res){
    res.render('proDesc',req.params.id);
}
toContact=function(req,res){
	res.render('contact');
}
getSorts = function(req,res){
    try{
        proListContent.getSorts(function(err,vals){
            console.log(vals)
            var resArr = {}
            for(var i in vals){
                resArr[i] = vals[i]
            }
            res.render('layout',{vals:JSON.stringify(resArr)})
        })

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
                         res.render('products',{
                            vals: JSON.stringify(resArr),
                            sorts: JSON.stringify(sortArr)
                        })
                        // res.render('tbodyPro',vals[0])
                    })
                   
                }else{
                    // res.redirect('/manage/proList')
                    proListContent.getProList(function(err,vals){
                        // console.log('valllll:',vals)
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
                                res.render('products',{
                                // res.render('tbodyPro',{
                                    vals: JSON.stringify(resArr),
                                    sorts: JSON.stringify(sortArr),
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
router.get('/',rePage);
router.get('/page',toPage);
router.get('/aboutUs',toAbout);
router.get('/products',toProducts);
// router.get('/proDesc/:id',toProDesc);
router.get('/contact',toContact);
router.get('/getSorts',getSorts);
router.get('/searchPro',searchPro);
module.exports = router

