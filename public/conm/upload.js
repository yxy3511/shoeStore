$(function(){
    //建图片列表
    var imgsObj = $('#allImg').val() ? JSON.parse($('#allImg').val()) : ''
    if(imgsObj != ''){
        creatImgs(imgsObj)
    }
    $('.cancelBtn').on('click',function(e){
        if ( e && e.preventDefault ){
            e.preventDefault(); 
        }else{
            //IE中阻止函数器默认动作的方式 
            window.event.returnValue = false;
        }
        window.location.href='/manage/proList'
    })
    $('.imgDelBtn').on('click',function(e){
        if ( e && e.preventDefault ){
            e.preventDefault(); 
        }else{
            //IE中阻止函数器默认动作的方式 
            window.event.returnValue = false;
        }
        $(this).next().remove()
        $(this).remove()
        var param = $(this).index()/2;
        $.ajax({
            type : 'get',
            url : '/manage/delImg/'+param,
            processData:false,
            async:false,
            cache: false,  
            contentType: false, 
            success:function(re){
                $('#allImg').attr('value',JSON.stringify(JSON.parse(re.vals)[0]))
            },
            error:function(re){
                alert(JSON.stringify(re))
                console.log(re);
            }

        });    
        return false;
    })
    $('#j_imgfile').on('change',function(){
        //判断上传控件的选定是否为空，空则返回
        if (document.getElementById("j_imgfile").files.length == 0) return;

        // 判断上传文件类型  
        console.log('objFile:', $('#j_imgfile')[0].files)
        var imgs = $('#j_imgfile')[0].files
        var imgObj = {}
        for(var i=0;i<imgs.length;i++){
            imgObj[i] = imgs[i].name
        }
        for(var j in imgObj){
            var objType = imgObj[j].substring(imgObj[j].lastIndexOf(".")).toLowerCase();
            if(!(objType == '.jpg'||objType == '.png')){
                alert("请上传jpg、png类型图片");
                return false;
            }
        }
        // var objFile = $('#j_imgfile').val();
        // var objType = objFile.substring(objFile.lastIndexOf(".")).toLowerCase();
        var formData = new FormData(document.forms.namedItem("picForm"));
        $.ajax({
            type : 'post',
            url : '/uploading',
            data: formData ,
            processData:false,
            async:false,
            cache: false,  
            contentType: false, 
            success:function(re){
                creatImgs(re.imgs);
                $('#allImg').attr('value',re.allImgs)
            },
            error:function(re){
                alert(JSON.stringify(re))
                console.log(re);
            }

        });    
        
    })

    function creatImgs(imgs){
        var parent = document.getElementById('imgsBox') 
        for(var i in imgs){
            if(i){
                //建新的节点
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

                //删除按钮
                var addonSpan = document.createElement("span")
                addonSpan.className = 'input-group-addon searchAddon imgDelBtn'  
                parent.prepend(addonSpan);

                var btnClose = document.createElement("button")
                btnClose.className = 'searchClose'   
                addonSpan.prepend(btnClose);

                var iconSpan = document.createElement("span")
                iconSpan.className = 'glyphicon glyphicon-remove'   
                btnClose.prepend(iconSpan);
            }
        }
    }
    
    $('.upTex').on('click',function(){
        $('#j_imgfile').click()
    })
})
