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
var loginContent = require('./../dao/loginContent.js');

const demos = [{
    isDemo:true,
    id:-1,
    title: '少图多字模式',
    desc_txt: '图片较少，文字较多时适用。',
    content: '[{"value":"        内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。","title":"第一段标题","img":"/images/aboutUs/yxy.JPG"},{"value":"        连接上一块，可以不添加图片和标题。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。","title":"","img":""},{"value":"       ","title":"","img":""},{"value":"        连接上一块，可以不添加图片和标题。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。","title":"第二段标题","img":"/images/aboutUs/13697618_1346997403655.jpg"},{"value":"        内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。内容丰富，填满。","title":"","img":""}]',
    up_date: '2018-01-05T08:22:34.000Z' 
},{
    isDemo:true,
    id: -2,
    title: '内容丰满式',
    desc_txt: '内容较多，每一块都能填满。',
    content: '[{"value":"第一块内容，可以不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。","title":"这个第一块内容标题","img":"/images/aboutUs/yxy.JPG"},{"value":"第二块内容，可以不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。","title":"这个第二块内容标题","img":"/images/aboutUs/13697618_1346997403655.jpg"},{"value":"第三块内容，可以不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。不换行填满。","title":"这个第三块内容标题","img":"/images/aboutUs/yxy.JPG"}]',
    up_date: '2018-01-05T07:33:33.000Z' 
},{
    isDemo:true,
    id: -3,
    title: '条理清晰式',
    desc_txt: '对于要阐述的内容有较为清晰的思路，并且分步描述。',
    content: "[{\"value\":\"1.第一段第一点内容，内容简短精炼。内容简短精炼。内容简短精炼。\\r\\n2.第一段第二点内容，内容简短精炼。内容简短精炼。内容简短精炼。\\r\\n3.第一段第三点内容，内容简短精炼。内容简短精炼。内容简短精炼。\\r\\n4.第一段第四点内容，内容简短精炼。内容简短精炼。内容简短精炼。\",\"title\":\"第一段标题\",\"img\":\"/images/aboutUs/yxy.JPG\"},{\"value\":\"1.第二段第一点内容，内容简短精炼。内容简短精炼。内容简短精炼。\\r\\n2.第二段第二点内容，内容简短精炼。内容简短精炼。内容简短精炼。\\r\\n3.第二段第三点内容，内容简短精炼。内容简短精炼。内容简短精炼。\\r\\n4.第二段第四点内容，内容简短精炼。内容简短精炼。内容简短精炼。\",\"title\":\"第二段标题\",\"img\":\"/images/aboutUs/13697618_1346997403655.jpg\"}]",
    up_date: '2018-01-05T07:37:52.000Z' 
}]

toProList = function(req,res){
    // res.render('proList')

     try{
        var msg = req.session.manageMsg
        req.session.manageMsg = null

        var page = {}
        page.pageNum = +req.params.pageNum
        page.pageSize = +req.params.pageSize
        var mid = req.params.msg 
        proListContent.getProList(0,page,function(err,vals){
            // console.log('valllll:',vals)
            if(err){
                console.log(err)
            }else{
                //頁數
                var totalCount = -1
                var resArr = {}
                for(var i in vals){
                    resArr[i] = vals[i]
                    totalCount = vals[i]['totalCount']
                }
                if(parseInt(totalCount/page.pageSize) == 0){
                    pageCount = 1
                }else if(totalCount%page.pageSize > 0 && totalCount%page.pageSize < page.pageSize){
                    pageCount = parseInt(totalCount/page.pageSize) + 1
                }else{
                    pageCount = parseInt(totalCount/page.pageSize)
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
                        /*var msg = null
                        if(mid == 0){
                            msg= '保存失败，商品名不能为空！'
                        }else if(mid == 1){
                            msg= '保存失败，商品价格不能为空！'
                        }else if(mid == 2){
                            msg= '保存失败，商品描述不能为空！'
                        }else if(mid == 3){
                            msg= '保存失败，商品图片不能为空！'
                        }*/
                        res.render('proList',{
                            // res.render('tbodyPro',{
                            vals: JSON.stringify(resArr),
                            sorts: JSON.stringify(sortArr),
                            msg: msg,
                            pageNum: page.pageNum,
                            pageCount: pageCount,
                        })
                    }
                    
                })
                    
                
            }
            
        })
        
    }catch(e){
        console.log(e)
    }
}

getProList = function(req,res,next){
    global.imagesArr = []
    try{
        var msg = req.session.manageMsg
        req.session.manageMsg = null

        var page = {}
        page.pageNum = +req.params.pageNum
        page.pageSize = +req.params.pageSize
        proListContent.getProList(0,page,function(err,vals){
            // console.log('valllll:',vals)
            if(err){
                console.log(err)
            }else{
                //頁數
                let totalCount = -1
                var resArr = {}
                for(var i in vals){
                    resArr[i] = vals[i]
                    totalCount = vals[i]['totalCount']
                }
                // var totalCount = vals.length
                // var pageLine = 10
                // var pageCount = -1
                if(parseInt(totalCount/page.pageSize) == 0){
                    pageCount = 1
                }else if(totalCount%page.pageSize > 0 && totalCount%page.pageSize < page.pageSize){
                    pageCount = parseInt(totalCount/page.pageSize) + 1
                }else{
                    pageCount = parseInt(totalCount/page.pageSize)
                }
                if(page.pageNum > pageCount){
                    page.pageNum = page.pageNum - 1
                    return res.redirect('/manage/proList/'+page.pageSize+'/'+page.pageNum)
                }
                // console.log('rrrreessArr:',resArr)
                //获取sorts
                proListContent.getSorts('all',{pageSize:0,pageNum:0},function(e,val){
                    if(e){
                        console.log(e)
                    }else{
                        var sortArr = {}
                        for(var j in val){
                            sortArr[val[j].id] = val[j].name
                        }
                        res.render('newProlist',{
                            vals: JSON.stringify(resArr),
                            sorts: JSON.stringify(sortArr),
                            pageNum: page.pageNum,
                            pageCount: pageCount,
                            msg: msg
                        })
                        /*res.render('proList',{
                            vals: JSON.stringify(resArr),
                            sorts: JSON.stringify(sortArr),
                            pageCount: pageCount,
                            totalCount: totalCount,
                            msg: msg
                        })*/
                    }
                })                
            }
            
        })
        
    }catch(e){
        console.log(e)
    }
}
savePro = function(req,res,next){
    // console.log('enter savepro')
    global.imagesArr = []
    try{
        var pageNum = req.params.pageNum
        var pageSize = req.params.pageSize
        var id = req.query.id 
        var pname = req.body.pname 
        var price = req.body.price 
        var state = req.body.state
        var desc = req.body.desc
        var imgs = req.body.allImg 
        var sort = req.body.sort 

        var params = {}
        pname ? (params.pname = pname) : null
        price ? (params.price = price) : null
        state ? (params.state = state) : null
        desc ? (params.desc = desc) : null
        imgs ? (params.imgs = imgs) : null
        sort ? (params.sort = sort) : null

        /*params.pname = pname
        params.price = price
        params.state = state
        params.desc = desc
        params.imgs = imgs
        params.sort = sort*/

        /*if(!pname || !price || !desc || !imgs){
            if(!pname){
                msg= '保存失败，商品名不能为空1！'
            }else if(!price){
                msg= '保存失败，商品价格不能为空1！'
            }else if(!desc){
                msg= '保存失败，商品描述不能为空1！'
            }else if(!imgs){
                msg= '保存失败，商品图片不能为空1！'
            }
            // var msg = msg
            // res.render('uploadImg')
            params.msg = msg
            res.render('uploadImg',params)
            
        }*/
        /*var msg = null 
        if(!pname || !price || !desc || !imgs){
            // toProList()
            if(!pname){
                msg= 0
                // msg= '保存失败，商品名不能为空！'
            }else if(!price){
                // msg= '保存失败，商品价格不能为空！'
                msg= 1
            }else if(!desc){
                // msg= msg= '保存失败，商品描述不能为空！'
                msg= 2
            }else if(!imgs){
                // msg= '保存失败，商品图片不能为空！'
                msg= 3
            }
            // params.msg = msg
            // console.log('params:',params)
            // res.render('uploadImg',{msg:msg})
            res.redirect('/manage/toProList/'+msg)
        }*/
            
        if(id == 0){
            proListContent.addPro(params,function(err,vals){
                // global.imagesArr = []
                if(err){
                    res.render('error',{
                        message: 'Error',
                        errMsg: err.sqlMessage
                    })
                }else if(vals.affectedRows > 0){
                    req.session.manageMsg = '添加商品成功！'
                    res.redirect('/manage/proList/'+pageSize+'/1')
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
                    req.session.manageMsg = '编辑商品成功！'
                    res.redirect('/manage/proList/'+pageSize+'/'+pageNum)
                }
            })
        }
        
    }catch(e){
        console.log(e)
    }
    
};

delPro = function(req,res,next){
    try{
        var pageNum = req.params.pageNum
        var pageSize = req.params.pageSize
        var id = req.params.id
        proListContent.delPro(id,function(error,vals){
            if(error){
                console.log(error)
            }else if(vals.affectedRows > 0){
                //删除成功
                req.session.manageMsg = '删除商品成功！'
                res.redirect('/manage/proList/'+pageSize+'/'+pageNum)
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
                // res.render("proDesc",vals[0])
                res.render("newProdesc",vals[0])
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
                    proListContent.getSorts('all',{pageNum:0,pageSize:0},function(e,val){
                        if(e){
                            console.log(e)
                        }else{
                            var sortArr = {}
                            for(var j in val){
                                sortArr[val[j].id] = val[j].name
                            }
                            vals[0].sorts = JSON.stringify(sortArr)
                            //vals是数组
                            // res.render("uploadImg",vals[0])
                            res.render("newProedit",vals[0])
                        }
                    })
                }
            })
            
        }else{
            res.render("newProedit")
        }
        
        
    }catch(e){
        console.log(e)
    }
}
searchPro = function(req,res,next){
    try{
        var page = {}
        // page.pageNum = +req.params.pageNum
        page.pageNum = 1
        page.pageSize = +req.params.pageSize

        var key = req.query.key
        console.log('keykey:',key)
        if(key != null || key == 0){
            proListContent.searchPro(key,page,function(err,vals){
                if(err){
                    console.log(err)
                }else if(vals.length > 0){

                    //頁數
                    let totalCount = -1
                    var resArr = {}
                    for(var i in vals){
                        resArr[i] = vals[i]
                        totalCount = vals[i]['totalCount']
                    }
                    // var totalCount = vals.length
                    // var pageLine = 10
                    // var pageCount = -1
                    if(parseInt(totalCount/page.pageSize) == 0){
                        pageCount = 1
                    }else if(totalCount%page.pageSize > 0 && totalCount%page.pageSize < page.pageSize){
                        pageCount = parseInt(totalCount/page.pageSize) + 1
                    }else{
                        pageCount = parseInt(totalCount/page.pageSize)
                    }

                    //获取sorts
                    proListContent.getSorts('all',{pageNum:0,pageSize:0},function(e,val){
                        if(e){
                            console.log(e)
                        }else{
                            var sortArr = {}
                            for(var j in val){
                                sortArr[val[j].id] = val[j].name
                            }
                            // res.render('proList',{
                            //     vals: JSON.stringify(resArr),
                            //     sorts: JSON.stringify(sortArr)
                            // })
                            res.render('newProList',{
                                vals: JSON.stringify(resArr),
                                sorts: JSON.stringify(sortArr),
                                pageNum: page.pageNum,
                                pageCount: pageCount,
                            })
                        }
                    })
                   
                }else{
                    req.session.manageMsg = '查询无结果！'
                    res.redirect('/manage/proList/'+page.pageSize+'/'+page.pageNum+'/?key='+key)
                    /*proListContent.getProList(0,page,function(err,vals){
                        if(err){
                            console.log(err)
                        }else{
                            // console.log('valllll:',vals)
                            //頁數
                            var totalCount = -1
                            var resArr = {}
                            for(var i in vals){
                                resArr[i] = vals[i]
                                totalCount = vals[i]['totalCount']
                            }
                            if(parseInt(totalCount/page.pageSize) == 0){
                                pageCount = 1
                            }else if(totalCount%page.pageSize > 0 && totalCount%page.pageSize < page.pageSize){
                                pageCount = parseInt(totalCount/page.pageSize) + 1
                            }else{
                                pageCount = parseInt(totalCount/page.pageSize)
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
                                            pageNum: page.pageNum,
                                            msg:'查询无结果！'
                                        })
                                    }
                                })
                                
                            }
                        }
                        
                    })*/
                }
            })
        }
        
    }catch(e){
        console.log(e)
    }
}

delImg = function(req,res,next){
    try{
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
    }catch(e){
        console.log(e)
    }
}

getSortList = function(req,res,next){
    try{
        var msg = req.session.manageMsg
        req.session.manageMsg = null

        var page = {}
        page.pageNum = +req.params.pageNum
        page.pageSize = +req.params.pageSize

         proListContent.getSorts('all',page,function(e,val){
            if(e){
                console.log(e)
            }else{
                //頁數
                let totalCount = -1
                var resArr = []
                // var sortArr = {}
                for(var j in val){
                    // sortArr[val[j].id] = val[j].name
                    resArr.push({id:val[j].id,name:val[j].name})
                    totalCount = val[j]['totalCount']
                }
                // var totalCount = vals.length
                // var pageLine = 10
                // var pageCount = -1
                if(parseInt(totalCount/page.pageSize) == 0){
                    pageCount = 1
                }else if(totalCount%page.pageSize > 0 && totalCount%page.pageSize < page.pageSize){
                    pageCount = parseInt(totalCount/page.pageSize) + 1
                }else{
                    pageCount = parseInt(totalCount/page.pageSize)
                }
                if(page.pageNum > pageCount){
                    page.pageNum = page.pageNum - 1
                    return res.redirect('/manage/editSorts/'+page.pageSize+'/'+page.pageNum)
                }
                res.render('newSorts',{
                    // sorts: JSON.stringify(sortArr),
                    sorts: JSON.stringify(resArr),
                    pageNum: page.pageNum,
                    pageCount: pageCount,
                    msg: msg
                })
            }
            
        })
    }catch(e){
        console.log(e)
    }
}

// saveSort = function(req,res,next){
//     try{
//         var sid = req.params.sid
//         var text = req.params.text
//         proListContent.upSorts(sid,text,function(err,vals){
//             if(err){
//                 console.log(err)
//             }else{
//                 proListContent.getSorts('all',function(e,val){
//                     if(e){
//                         console.log(e)
//                     }else{
//                         res.redirect('/manage/editSorts')
//                         /*var sortArr = {}
//                         for(var j in val){
//                             sortArr[val[j].id] = val[j].name
//                         }
//                         res.render('sorts',{
//                             sorts: JSON.stringify(sortArr),
//                         })*/
//                     }
                    
//                 })
//             }
            
//         })
//     }catch(err){
//         console.log(err)
//     }
// }

addSort = function(req,res,next){
    try{
        // var sid = req.params.sid
        var text = req.params.text

        var page = {}
        page.pageNum = +req.params.pageNum
        page.pageSize = +req.params.pageSize
        // console.log('pagesize:',req.params.pageSize)
        proListContent.addSorts(text,function(err,vals){
            if(err){
                console.log(err)
            }else{
                proListContent.getSorts('all',page,function(e,val){
                    if(e){
                        console.log(e)
                    }else{
                        req.session.manageMsg = '添加类别成功！'
                        res.redirect('/manage/editSorts/'+page.pageSize+'/1')
                        // res.redirect('/manage/editSorts/'+page.pageNum+'/'+page.pageSize)
                        /*var sortArr = {}
                        for(var j in val){
                            sortArr[val[j].id] = val[j].name
                        }
                        res.render('sorts',{
                            sorts: JSON.stringify(sortArr),
                        })*/
                    }
                    
                })
            }
            
        })
    }catch(err){
        console.log(err)
    }
}

delSort = function(req,res,next){
    try{
        var sid = req.params.sid
        var page = {}
        page.pageNum = +req.params.pageNum
        page.pageSize = +req.params.pageSize

        proListContent.getSortPro(sid,function(err,val){
            if(err){
                console.log(err)
            }else{
                if(val.length > 0){
                    req.session.manageMsg = '存在此类别的商品，删除失败！'
                    return res.redirect('/manage/editSorts/'+page.pageSize+'/'+page.pageNum)
                }else{
                    proListContent.delSort(sid,function(err,vals){
                        if(err){
                            console.log(err)
                        }else{
                            req.session.manageMsg = '删除类别成功！'
                            res.redirect('/manage/editSorts/'+page.pageSize+'/'+page.pageNum)
                            /*proListContent.getSorts('all',function(e,val){
                                if(e){
                                    console.log(e)
                                }else{
                                    var sortArr = {}
                                    for(var j in val){
                                        sortArr[val[j].id] = val[j].name
                                    }
                                    res.render('sorts',{
                                        sorts: JSON.stringify(sortArr),
                                    })
                                }
                                
                            })*/
                        }
                        
                    })
                }
            }
        })
        
    }catch(err){
        console.log(err)
    }
}



getUserList = function(req,res,next){
    try{
        var msg = req.session.manageMsg
        req.session.manageMsg = null

        var page = {}
        page.pageNum = +req.params.pageNum
        page.pageSize = +req.params.pageSize

        loginContent.searchUser('all',page,function(e,val){
            if(e){
                console.log(e)
            }else{
                proListContent.getRoles(function(err,vals){
                    if(err){
                        console.log(err)
                    }else{
                        var roleArr = {}
                        for(var i in vals){
                            roleArr[vals[i].id] = vals[i].rname
                        }

                        //頁數
                        let totalCount = -1
                        // var userArr = {}
                        var resArr = []
                        for(var j in val){
                            /*userArr[j] = {
                                uname: val[j].uname,
                                pwd: val[j].pwd,
                                role: roleArr[val[j].role],
                                uid: val[j].uid
                            }*/
                            resArr.push({
                                uid: val[j].uid,
                                val:{
                                    uname: val[j].uname,
                                    pwd: val[j].pwd,
                                    role: roleArr[val[j].role],
                                    uid: val[j].uid
                                }
                            })
                            totalCount = val[j]['totalCount']
                        }

                        if(parseInt(totalCount/page.pageSize) == 0){
                            pageCount = 1
                        }else if(totalCount%page.pageSize > 0 && totalCount%page.pageSize < page.pageSize){
                            pageCount = parseInt(totalCount/page.pageSize) + 1
                        }else{
                            pageCount = parseInt(totalCount/page.pageSize)
                        }
                        if(page.pageNum > pageCount){
                            page.pageNum = page.pageNum - 1
                            return res.redirect('/manage/getUser/'+page.pageSize+'/'+page.pageNum)
                        }
                        res.render('newUser',{
                            // users: JSON.stringify(userArr),
                            users: JSON.stringify(resArr),
                            msg: msg,
                            pageCount:pageCount,
                            pageNum: page.pageNum,
                        })
                        // res.render('user',{
                        //     users: JSON.stringify(userArr),
                        //     msg: msg
                        // })
                    }
                })
            }
            
        })
    }catch(e){
        console.log(e)
    }
}
// editUser = function(req,res,next){
//     try{
//         var sid = req.params.uid
//         var text = req.params.text
//         var opera = req.params.opera
//         proListContent.editUser(opera,sid,text,function(err,vals){
//             if(err){
//                 console.log(err)
//             }else{
//                 proListContent.getSorts('all',function(e,val){
//                     if(e){
//                         console.log(e)
//                     }else{
//                         var sortArr = {}
//                         for(var j in val){
//                             sortArr[val[j].id] = val[j].name
//                         }
//                         res.render('sorts',{
//                             sorts: JSON.stringify(sortArr),
//                         })
//                     }
                    
//                 })
//             }
            
//         })
//     }catch(err){
//         console.log(err)
//     }
// }

// saveUser = function(req,res,next){
//     try{
//         var uid = req.body.uid
//         var uname = req.body.uname
//         var pwd = req.body.pwd
//         var role = req.body.role

//         var page = {}
//         page.pageNum = req.params.pageNum
//         page.pageSize = req.params.pageSize

//         var msg = null
//         loginContent.searchUser(uname,page,function(err,vals){
//             if(err){
//                 console.log(err)
//             }else if(vals.length > 0){
//                 //用户名已被使用
//                 msg = '此用户名已被注册！'
//             }
//         })
//         var text = {}
//         text.uid = uid
//         text.uname = uname
//         text.pwd = pwd
//         text.role = JSON.parse(role)
//         if(msg != null){
//             // loginContent.searchUser('all',page,function(e,val){
//             //     if(e){
//             //         console.log(e)
//             //     }else{
//             //         var roleArr = {}
//             //         for(var i in vals){
//             //             roleArr[vals[i].id] = vals[i].rname
//             //         }

//             //         var userArr = {}
//             //         for(var j in val){
//             //             userArr[j] = {
//             //                 uname: val[j].uname,
//             //                 pwd: val[j].pwd,
//             //                 role: roleArr[val[j].role],
//             //                 uid: val[j].uid
//             //             }
//             //         }
//             //         /*res.render('user',{
//             //             users: JSON.stringify(userArr),
//             //             msg: msg
//             //         })*/
//             //         res.render('newUser',{
//             //             users: JSON.stringify(userArr),
//             //             msg: msg
//             //         })
//             //     }
                
//             // })
//             res.redirect('/registering/'+page.pageNum+'/'+page.pageSize)
//         }else{
//             loginContent.saveUser(text,function(err,vals){
//                 if(err){
//                     console.log(err)
//                 }else{
//                    res.redirect('/getUser/'+page.pageNum+'/'+page.pageSize)     
//                 }
                
//             })
//         }
//     }catch(err){
//         console.log(err)
//     }
// }

/*addUser = function(req,res,next){
    try{
        // var sid = req.params.sid
        var text = req.params.text
        proListContent.addUser(text,function(err,vals){
            if(err){
                console.log(err)
            }else{
                proListContent.getSorts('all',function(e,val){
                    if(e){
                        console.log(e)
                    }else{
                        var sortArr = {}
                        for(var j in val){
                            sortArr[val[j].id] = val[j].name
                        }
                        res.render('sorts',{
                            sorts: JSON.stringify(sortArr),
                        })
                    }
                    
                })
            }
            
        })
    }catch(err){
        console.log(err)
    }
}*/

delUser = function(req,res,next){
    try{
        var uid = req.params.uid
        var page = {}
        page.pageNum = +req.params.pageNum
        page.pageSize = +req.params.pageSize

        loginContent.delUser(uid,function(err,vals){
            if(err){
                console.log(err)
            }else{
                /*loginContent.searchUser('all',function(e,val){
                    if(e){
                        console.log(e)
                    }else{
                        var roleArr = {}
                        for(var i in vals){
                            roleArr[vals[i].id] = vals[i].rname
                        }

                        var userArr = {}
                        for(var j in val){
                            userArr[j] = {
                                uname: val[j].uname,
                                pwd: val[j].pwd,
                                role: roleArr[val[j].role],
                                uid: val[j].uid
                            }
                        }
                        res.render('user',{
                            users: JSON.stringify(userArr),
                        })
                        
                    }
                    
                })*/
                var msg = '删除用户成功！'
                req.session.manageMsg = msg
                res.redirect('/manage/getUser/'+page.pageSize+'/'+page.pageNum)
            }
            
        })
    }catch(err){
        console.log(err)
    }
}


editAboutUs = function(req,res,next){
    try{
        var id = req.query.id
        if(id && id > 0){
            proListContent.getAboutUs(id,{pageNum:0,pageSize:0},function(err,vals){
                // console.log('-------',vals)
                if(err){
                    console.log(err)
                }else{
                    if(vals.length == 0){
                        res.render('newEditAboutus',vals)
                    }else{

                        vals[0].content = setSC(JSON.parse(vals[0].content))
                        // res.render('editAboutUs',vals[0])
                        res.render('newEditAboutus',vals[0])
                    }
                }
            })
        }else if(id && id < 0){
            let demoId = Math.abs(id)
            res.render('newEditAboutus',demos[demoId - 1])
        }else{
            res.render('newEditAboutus',{})
        }
        
            
    }catch(err){
        console.log(err)
    }
}
isNull = function(vals){
    var val = vals
    if(val['value'].length == 0 && val['img'] == '' && val['title'] == ''){
        return true
    }
    return false
}

RemoveSC = function(val){
    var reg=new RegExp("\r\n","g"); 
    val= val.replace(reg,"<br>"); 
    /*var str = val.toString()
    str = str.replace("\n\r", "<br/>");
    str = str.replace("\r\n", "<br/>");
    str = str.replace("\n", "<br/>");
    str = str.replace("\r", "<br/>");
    str = str.replace("\t", "    ");
    str = str.replace(" ", " ");
    str = str.replace("\"", "\\" + "\"");
    return str*/
    return val
}

setSC = function(val){
    var reg=new RegExp("<br>","g"); 
    var res = []
    for(var obj of val){
        obj['value'] = obj['value'].replace(reg,"\r\n")
        // console.log(99999999,obj)
        res.push(obj)
    }
    // console.log(2333,res)
    return JSON.stringify(res)
}
addAboutUs = function(req,res,next){
    try{
        var item = {}
        var params = {}
        var parentCnt = 3

        var page = {}
        page.pageNum = +req.params.pageNum
        page.pageSize = +req.params.pageSize

        // console.log('-------',req.body.id)
        params.id = +req.body.id
        params.title = req.body.bname || ''
        params.desc_txt = req.body.desc_txt || ''
        params.subTitle = req.body.subTitle || ''
        params.info = req.body.info || ''
        params.allImg = JSON.parse(req.body.allImg) || ''

        item.id = params.id
        item.title = params.title || ''
        item.desc_txt = params.desc_txt || ''
        item.value = []
        if(typeof params.info == 'string'){
            var obj = {}
            obj.value = RemoveSC(params.info) || ''
            obj.title = params.subTitle || ''
            obj.img = params.allImg[parentCnt] || ''
            if(! isNull(obj)){
                item.value.push(obj)
            }

        }else{
            for(var i = 0;i<params.info.length; i++){
                /*if(params.info[i] != ''){
                    var obj = {}
                    obj.value = params.info[i] || ''
                    obj.title = params.subTitle[i] || ''
                    obj.img = params.allImg[i +2] || ''
                    item.value.push(obj)
                }*/
                var obj = {}
                obj.value = RemoveSC(params.info[i]) || ''
                obj.title = params.subTitle[i] || ''
                obj.img = params.allImg[i +parentCnt] || ''
                if(isNull(obj)){
                    continue 
                }
                item.value.push(obj)
                
            }
        }
        // console.log(11111111,item.id)
        
        if(item.id && item.id>0){
            proListContent.editAboutUs(item,function(err,vals){
                if(err){
                    console.log(err)
                }else{
                    req.session.manageMsg = '公司介绍修改成功！'
                    // res.redirect('/aboutUs')
                    // res.redirect('/manage/aboutUs')
                    res.redirect('/manage/viewAboutus/?id='+item.id)
                }
            })
        }else{
            proListContent.addAboutUs(item,function(err,vals){
                if(err){
                    console.log(err)
                }else{
                    req.session.manageMsg = '公司介绍添加成功！'
                    // res.redirect('/aboutUs')
                    // console.log('vvvals:',vals)
                    res.redirect('/manage/aboutUs/'+page.pageSize+'/1')
                    // res.redirect('/manage/aboutUs/'+page.pageNum+'/'+page.pageSize)
                    // res.redirect('/manage/viewAboutus/?id='+vals[0]['id'])
                }
            })
        } 
        // var state = 'edit'
        // proListContent.getAboutUs(item.id,function(err,val){
        //     if(err){
        //         console.log(err)
        //     }else if(val.length == 0){
        //         state = 'add'
        //     }

        //     if(state == 'add'){
        //         proListContent.addAboutUs(item,function(err,vals){
        //             if(err){
        //                 console.log(err)
        //             }else{
        //                 req.session.manageMsg = '公司介绍添加成功！'
        //                 // res.redirect('/aboutUs')
        //                 res.redirect('/manage/aboutUs')
        //             }
        //         })
        //     }else{
        //         proListContent.editAboutUs(item,function(err,vals){
        //             if(err){
        //                 console.log(err)
        //             }else{
        //                 req.session.manageMsg = '公司介绍修改成功！'
        //                 // res.redirect('/aboutUs')
        //                 res.redirect('/manage/aboutUs')
        //             }
        //         })
        //     }
        // })
        
            
    }catch(err){
        console.log(err)
    }
}


toAboutUs = function(req,res){
    var msg = req.session.manageMsg
    req.session.manageMsg = null

    var page = {}
    page.pageNum = +req.params.pageNum
    page.pageSize = page.pageNum == 1 ? +req.params.pageSize - demos.length  : +req.params.pageSize
    page.demoLength = demos.length
    try{
        proListContent.getAboutUs(null,page,function(err,val){
            if(err){
                console.log(err)
            }else{
                //頁數
                let totalCount = -1
                for(var j in val){
                    totalCount = val[j]['totalCount'] + demos.length 
                }
                // totalCount = page.pageNum == 1 ? +val[0]['totalCount'] + demos.length : +val[0]['totalCount']
                //计算需要
                page.pageSize = +req.params.pageSize

                if(parseInt(totalCount/page.pageSize) == 0){
                    pageCount = 1
                }else if(totalCount%page.pageSize > 0 && totalCount%page.pageSize < page.pageSize){
                    pageCount = parseInt(totalCount/page.pageSize) + 1
                }else{
                    pageCount = parseInt(totalCount/page.pageSize)
                }
                if(1 == page.pageNum){
                    demos.forEach(data=>{
                        if(data['isDemo']){
                            // console.log('data:',data)
                            val.unshift(data)
                        }
                    })
                }
                if(page.pageNum > pageCount){
                    page.pageNum = page.pageNum - 1
                    return res.redirect('/manage/aboutUs/'+page.pageSize+'/'+page.pageNum)
                }
                // console.log('val:',val)
                res.render('newAboutus',{
                    msg: msg,
                    vals: JSON.stringify(val),
                    pageCount: pageCount,
                    pageNum: page.pageNum
                })
            }/*else{
                if(1 == page.pageNum){
                    demos.forEach(data=>{
                        if(data['isDemo']){
                            // console.log('data:',data)
                            val.unshift(data)
                        }
                    })
                }
                res.render('newAboutus',{
                    msg: msg,
                    vals: JSON.stringify(val),
                    pageCount: page.pageNum,
                    pageNum: page.pageNum
                })
            }*/
        })

    }catch(err){
        console.log(err)
    }
    
}
delAboutUs = function(req,res){
    var page = {}
    page.pageNum = +req.params.pageNum
    page.pageSize = +req.params.pageSize
    proListContent.delAboutUs(function(err,val){
        if(err){
            console.log(err)
        }else{
            req.session.manageMsg = '公司介绍清空成功！'
            res.redirect('/manage/aboutUs/'+page.pageSize+'/'+page.pageNum)
        }
    })
}
delOneAboutus = function(req,res){
    var id = req.query.id
    var page = {}
    page.pageNum = +req.params.pageNum
    page.pageSize = +req.params.pageSize
    proListContent.delOneAboutus(id,function(err,val){
        if(err){
            console.log(err)
        }else{
            req.session.manageMsg = '删除介绍成功！'
            res.redirect('/manage/aboutUs/'+page.pageSize+'/'+page.pageNum)
        }
    })
}

/** 
 * 时间对象的格式化; 
 */  
Date.prototype.Format = function(format) {  
    /* 
     * 使用例子:format="yyyy-MM-dd hh:mm:ss"; 
     */  
    var o = {  
        "M+" : this.getMonth() + 1, // month  
        "d+" : this.getDate(), // day  
        "h+" : this.getHours(), // hour  
        "m+" : this.getMinutes(), // minute  
        "s+" : this.getSeconds(), // second  
        "q+" : Math.floor((this.getMonth() + 3) / 3), // quarter  
        "S" : this.getMilliseconds()  
        // millisecond  
    }  
   
    if (/(y+)/.test(format)) {  
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4  
                        - RegExp.$1.length));  
    }  
   
    for (var k in o) {  
        if (new RegExp("(" + k + ")").test(format)) {  
            format = format.replace(RegExp.$1, RegExp.$1.length == 1  
                            ? o[k]  
                            : ("00" + o[k]).substr(("" + o[k]).length));  
        }  
    }  
    return format;  
}

viewAboutus = function(req,res){
    try{
        var msg = req.session.manageMsg
        req.session.manageMsg = null
        var id = +req.query.id
        if(id<0){
            let demoId = Math.abs(id)
            res.render('newViewAboutus',{
                vals: JSON.stringify(demos[demoId - 1]),
                msg:msg
            })
        }else{

            proListContent.getAboutUs(id,{pageNum:0,pageSize:0},function(err,vals){
                if(err){
                    console.log(err)
                }else{
                    if(vals.length > 0){
                        vals[0].content = setSC(JSON.parse(vals[0].content))
                        // console.log('getthis:',JSON.stringify(vals[0]))
                        res.render('newViewAboutus',{
                            vals: JSON.stringify(vals[0]),
                            msg:msg
                        })
                    }else{
                        // req.session.manageMsg = '暂无介绍'
                        res.render('newViewAboutus',{
                            msg:'暂无介绍'
                        })
                    }
                }
            })
        }

    }catch(err){
        console.log(err)
    }
}


router.get('/proList/:pageSize/:pageNum',getProList);
router.get('/delPro/:pageSize/:pageNum/:id',delPro);
router.post('/savePro/:pageSize/:pageNum',savePro);
// router.post('/upPro/:id',upPro);
router.get('/descPro/:id',descPro);
router.get('/editPro/:id',editPro);
router.get('/searchPro/:pageNum/:pageSize',searchPro);
router.get('/delImg/:mid',delImg);
// router.get('/toProList/:pageNum/:pageSize/:msg',toProList)

router.get('/editSorts/:pageSize/:pageNum',getSortList)
// router.get('/saveSort/:sid/:text',saveSort)
router.get('/addSort/:pageSize/:pageNum/:text',addSort)
router.get('/delSort/:pageSize/:pageNum/:sid',delSort)

router.get('/editAboutUs',editAboutUs)
router.post('/addAboutUs/:pageSize/:pageNum',addAboutUs)
router.get('/aboutUs/:pageSize/:pageNum',toAboutUs)
router.get('/delAboutus/:pageSize/:pageNum',delAboutUs)
router.get('/delOneAboutus/:pageSize/:pageNum',delOneAboutus)
router.get('/viewAboutus',viewAboutus)

router.get('/getUser/:pageSize/:pageNum',getUserList)
router.get('/delUser/:pageSize/:pageNum/:uid',delUser)
// router.get('/editUser/:opera/:uid/:text',editUser)
// router.post('/saveUser/:pageNum/:pageSize',saveUser)
// router.get('/addUser/:text',addUser)
module.exports = router