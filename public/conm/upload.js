// $('#j_imgfile').on('change',function(){
//     // 判断上传文件类型
    
//     var objFile = $('#j_imgfile').val();
//     var objType = objFile.substring(objFile.lastIndexOf(".")).toLowerCase();
//     var formData = new FormData(document.forms.namedItem("picForm"));
//     console.log(objType);
//     if(!(objType == '.jpg'||objType == '.png'))
//     {
//         alert("请上传jpg、png类型图片");
//         return false;
//     }else{
//         $.ajax({
//             type : 'post',
//             url : '/uploading',
//             data: formData ,
//             processData:false,
//             async:false,
//             cache: false,  
//             contentType: false, 
//             success:function(re){
//                 // re.imgSrc = re.imgSrc.replace('public','');
//                 // re.imgSrc = re.imgSrc.replace(/\\/g,'\/');
//                 alert(re)
//                 $('#j_imgPic').attr('src',re.imgSrc);
//             },
//             error:function(re){
//                 alert(JSON.stringify(re))
//                 console.log(re);
//             }
//         });    
//     }

// });
$(function(){
    $('.upTex').on('click',function(){
        $('#j_imgfile').click()
    })
})
