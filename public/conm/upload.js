$(function(){

    var imgsObj = $('#allImg').val() ? JSON.parse($('#allImg').val()) : ''
    if(imgsObj != ''){
        creatImgs(imgsObj)
    }


    $('#j_imgfile').on('change',function(){
        //判断上传控件的选定是否为空，空则返回
        if (document.getElementById("j_imgfile").files.length == 0) return;

        // 判断上传文件类型  
        var objFile = $('#j_imgfile').val();
        var objType = objFile.substring(objFile.lastIndexOf(".")).toLowerCase();
        var formData = new FormData(document.forms.namedItem("picForm"));
        // console.log('formdata:',formData)
        // console.log(objType);
        if(!(objType == '.jpg'||objType == '.png'))
        {
            alert("请上传jpg、png类型图片");
            return false;
        }else{

            $.ajax({
                type : 'post',
                url : '/uploading',
                data: formData ,
                processData:false,
                async:false,
                cache: false,  
                contentType: false, 
                success:function(re){
                    console.log('getImgs:',re.allImgs)
                    creatImgs(re.imgs);
                    /*for(var i in re.imgs){
                        //建新的节点
                        var parent = document.getElementById('imgsBox')
                        var divBlock = document.createElement("div")
                        divBlock.className =  'upload-container upImgs'   
                        parent.prepend(divBlock);  

                        var aBlock = document.createElement("a")
                        aBlock.setAttribute('href', re.imgs[i])
                        divBlock.appendChild(aBlock); 

                        var imgBlock = document.createElement("img")
                        imgBlock.setAttribute('id', 'imgId')
                        imgBlock.setAttribute('class', 'upImg')
                        imgBlock.setAttribute('src',re.imgs[i])
                        aBlock.appendChild(imgBlock); 
                    }*/
                    $('#allImg').attr('value',re.allImgs)
                    // console.log($('#allImg').html())
                },
                error:function(re){
                    alert(JSON.stringify(re))
                    console.log(re);
                }

            });    
        }
    })
    function creatImgs(imgs){
        console.log('createimgs:',imgs)
        for(var i in imgs){
            //建新的节点
            var parent = document.getElementById('imgsBox')
            var divBlock = document.createElement("div")
            divBlock.className =  'upload-container upImgs'   
            parent.prepend(divBlock);  

            var aBlock = document.createElement("a")
            aBlock.setAttribute('href', imgs[i])
            divBlock.appendChild(aBlock); 

            var imgBlock = document.createElement("img")
            imgBlock.setAttribute('id', 'imgId')
            imgBlock.setAttribute('class', 'upImg')
            imgBlock.setAttribute('src',imgs[i])
            aBlock.appendChild(imgBlock); 
        }
    }
    /*$('#j_imgfile').on('change',function(){
        // 判断上传文件类型  
        var objFile = $('#j_imgfile').val();
        var objType = objFile.substring(objFile.lastIndexOf(".")).toLowerCase();
        var formData = new FormData(document.forms.namedItem("picForm"));
        console.log(objType);
        if(!(objType == '.jpg'||objType == '.png'))
        {
            alert("请上传jpg、png类型图片");
            return false;
        }else{
            $.ajax({
                type : 'post',
                url : '/uploading',
                data: formData ,
                processData:false,
                async:false,
                cache: false,  
                contentType: false, 
                success:function(re){
                    // re.imgSrc = re.imgSrc.replace('public','');
                    // re.imgSrc = re.imgSrc.replace(/\\/g,'\/');
                    // alert(re.imgSrc)
                    // $('#j_imgPic').attr('src',re.imgSrc);
                },
                error:function(re){
                    alert(JSON.stringify(re))
                    console.log(re);
                }
            });    
        }

    });*/
    
    $('.upTex').on('click',function(){
        $('#j_imgfile').click()
    })
})
