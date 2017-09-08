var express = require('express');                                                                                                                                                                                                                                           
var router = express.Router();
var multiparty = require('multiparty');
var util = require('util');
var fs = require('fs');

/* 上传页面 */
router.get('/uploadImg', function(req, res, next) {
    res.render('uploadImg', { title: 'Express' });
});

var imgs = []
/* 上传*/
router.post('/uploading', function(req, res, next){
    //生成multiparty对象，并配置上传目标路径
    var form = new multiparty.Form({uploadDir: './public/files/'});
    //上传完成后处理 
    form.parse(req, function(err, fields, files) {
        imgs.push(files)
        var dstPath = {} 
        if(err){
            console.log('parse error: ' + err);
        } else if(imgs){
            console.log('imgs：'+JSON.stringify(imgs[0]))
            for(var i in imgs){
                console.log('i：'+i)
                var filesTmp = JSON.stringify(imgs[i],null,2);   
                console.log('parse files: ' + filesTmp);
                var inputFile = imgs[i]['inputFile'][0];
                var uploadedPath = inputFile['path'];
                dstPath['path'+i] = '/files/' + inputFile['originalFilename'];
                //重命名为真实文件名
                fs.rename(uploadedPath, dstPath['path'+i], function(err) {
                    if(err){
                        console.log('rename error: ' + err);
                    } else {
                        console.log('rename ok');
                    }
                });
            }
            
        }
        console.log('dstpath',dstPath)
        //方法1
        //格式必须为 binary 否则会出错
        /*var content = fs.readFileSync(dstPath['path0'],"binary");  
        res.writeHead(200, {'content-type': 'text/plain;charset=utf-8'});
        res.write(content,"binary"); //格式必须为 binary，否则会出错
        res.end();*/
        //方法2
        /*var stream = fs.createReadStream( dstPath['path0'] );
        var responseData = [];//存储文件流
        if (stream) {//判断状态
            stream.on( 'data', function( chunk ) {
              responseData.push( chunk );
            });
            stream.on( 'end', function() {
               var finalData = Buffer.concat( responseData );
               console.log('finalData',finalData)
               res.write( finalData );
               res.end();
            });
        }*/
        //方法3
        res.render('uploadImg',dstPath)
    });
});

 

module.exports = router;