/**
 * Created by yxy3511 on 2017/9/14
 *
 *   登录页
 *
 *
 */
var express = require('express');
var router = express.Router();
var loginContent = require('./../dao/loginContent.js');
var cryptico = require('crypto');
// var md5 = cryptico.createHash('md5');

toLogin=function(req,res){
    req.session.destroy();
    res.render('login')
}
toRegister=function(req,res){
    res.render('register')
}
registering = function(req,res){
    try{
        var uname = req.body.rename || null
        var pwd = req.body.repass || null
        var againpwd = req.body.againpass || null

        var params = {}
        params.uname = uname
        params.pwd = pwd

        loginContent.searchUser(uname,function(err,vals){
            if(err){
                console.log(err)
            }else if(params.pwd != againpwd){
                res.render('register',{
                    msg:'两次密码输入不相同！'
                });
            }else if(vals.length > 0){
                //用户名已被使用
                console.log('vals.length:',vals.length)
                res.render('register',{
                    msg:'此用户名已被注册！'
                });
            }else if(vals.length == 0){
                console.log('rows:',vals.length)
                loginContent.addUser(params,function(err,vals){
                    if(err){
                        console.log(err)
                    }else if(vals.affectedRows > 0){
                        res.render('login',{
                            msg:'注册成功！'
                        })
                    }
                })    
            }

        })

        /*loginContent.addUser(params,function(err,res){
            if(err){
                console.log(err)
            }else if(res.affectedRows > 0){
                res.render('login')
            }

        })*/
    }catch(e){
        console.log(e)
    }
       
}
loggingIn = function(req,res){
    try{
        var uname = req.body.uname || null
        var pwd = req.body.pwd || null

        var params = {}
        params.uname = uname
        params.pwd = pwd

        loginContent.searchUser(uname,function(err,vals){
            var pass = cryptico.createHash('md5').update(params.pwd).digest('base64')
            if(err){
                console.log(err)
            }else if(vals.length > 0 && vals[0].pwd != pass){
                // delete req.session.isLogged;
                //用户名存在,密码不正确
                return res.render('login',{
                    msg: '密码不正确！'
                })        
                
            }else if(vals.length == 0){
                // delete req.session.isLogged;
                return res.render('login',{
                    msg: '用户名不存在！'
                })

            }else{
                //登录成功
                //操作session
                req.session.isLogged = true;
                res.redirect('/manage/proList')
            }   

        })

    }catch(e){
        console.log(e)
    }
}
router.get('/login',toLogin);
router.get('/register',toRegister);
router.post('/registering',registering);
router.post('/logging',loggingIn);

module.exports = router

