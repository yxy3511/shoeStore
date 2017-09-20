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
 
toProList = function(req,res){
    res.render('proList')
}

getProList = function(req,res,next){
    try{
        proListContent.getProList(0,function(err,vals){
            // console.log('valllll:',vals)
            if(err){
                console.log(err)
            }else{
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
                //获取sorts
                proListContent.getSorts('all',function(e,val){
                    if(e){
                        console.log(e)
                    }else{
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
                    }
                    
                })
                    
                
            }
            
        })
        
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
        global.imagesArr = []
        if(id == 0){
            proListContent.addPro(params,function(err,vals){
                // global.imagesArr = []
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
                // global.imagesArr = []
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
        global.imagesArr = []
        if(id != null){
            proListContent.descPro(id,function(err,vals){
                if(err){
                    console.log(err)
                }else if(vals.length > 0){
                    //把图片取出来复制给global.imagesArr
                    global.imagesArr.push(JSON.parse(vals[0].imgs));
                    proListContent.getSorts('all',function(e,val){
                        if(e){
                            console.log(e)
                        }else{
                            var sortArr = {}
                            for(var j in val){
                                sortArr[val[j].id] = val[j].name
                            }
                            vals[0].sorts = JSON.stringify(sortArr)
                            //vals是数组
                            res.render("uploadImg",vals[0])
                        }
                    })
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
                        if(e){
                            console.log(e)
                        }else{
                            var sortArr = {}
                            for(var j in val){
                                sortArr[val[j].id] = val[j].name
                            }
                            res.render('proList',{
                                vals: JSON.stringify(resArr),
                                sorts: JSON.stringify(sortArr)
                            })
                        }
                    })
                   
                }else{
                    // res.redirect('/manage/proList')
                    proListContent.getProList(0,function(err,vals){
                        if(err){
                            console.log(err)
                        }else{
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
                                    if(e){
                                        console.log(e)
                                    }else{
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
                                    }
                                })
                                
                            }
                        }
                        
                    })
                }
            })
        }
        
    }catch(e){
        console.log(e)
    }
}

delImg = function(req,res,next){
    var imgId = parseInt(req.params.mid)
    var cnt = 0;
    /*var all = {}
    for(var l in global.imagesArr){
        for(var z in global.imagesArr[l]){
            all[cnt] = global.imagesArr[l][z]
            cnt += 1
        }
    }
    console.log('before:',all)
    console.log('mid:',imgId)
    delete all[imgId];*/
    var imgs = {}
    for(var l in global.imagesArr){
        for(var z in global.imagesArr[l]){
            imgs[cnt] = global.imagesArr[l][z]
            cnt += 1
        }
    }
    console.log('before:',imgs)
    console.log('mid:',imgId)
    delete imgs[imgId];
    var all = {}
    var index = 0 
    for(var i in imgs){
        all[index] = imgs[i]
        index += 1
    }
    global.imagesArr = [];
    global.imagesArr.push(all)
    res.send({vals:JSON.stringify(global.imagesArr)})
}

router.get('/proList',getProList);
router.get('/delPro/:id',delPro);
router.post('/savePro',savePro);
// router.post('/upPro/:id',upPro);
router.get('/descPro/:id',descPro);
router.get('/editPro/:id',editPro);
router.get('/searchPro',searchPro);
router.get('/delImg/:mid',delImg);
module.exports = router