var express = require('express');                                                                                                                                                                                                                                           
var router = express.Router();
var multiparty = require('multiparty');
var util = require('util');
var fs = require('fs');

/* 上传页面 */
router.get('/uploadImg', function(req, res, next) {
  res.render('uploadImg', { title: 'Express' });
});

/* 上传*/
router.post('/uploading', function(req, res, next){
    //生成multiparty对象，并配置上传目标路径
    var form = new multiparty.Form({uploadDir: './public/files/'});
    //上传完成后处理
    form.parse(req, function(err, fields, files) {
        var filesTmp = JSON.stringify(files,null,2);    
        if(err){
            console.log('parse error: ' + err);
        } else {
            console.log('parse files: ' + filesTmp);
            for(var i=0;i<files.length;i++){
                var inputFile = files.inputFile[0];
                var uploadedPath = inputFile.path;
                var dstPath = './public/files/' + inputFile.originalFilename;
                //重命名为真实文件名
                fs.rename(uploadedPath, dstPath, function(err) {
                    if(err){
                        console.log('rename error: ' + err);
                    } else {
                        console.log('rename ok');
                    }
                });
            }
            
        }
        // console.log(dstPath)
        // res.writeHead(200, {'content-type': 'text/plain;charset=utf-8'});
        // res.write('received upload:\n\n');
        // res.end(util.inspect({fields: fields, files: filesTmp}));   
        // res.end(JSON.stringify({fields: fields, files: filesTmp}));   

    });
});
 
module.exports = router;