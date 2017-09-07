$('#j_imgfile').on('change',function(){
    // 判断上传文件类型
    var objFile = $('#j_imgfile').val();
    var objType = objFile.substring(objFile.lastIndexOf(".")).toLowerCase();
    var formData = new FormData(document.forms.namedItem("picForm"));
    console.log(objType);
    if(!(objType == '.jpg'||objType == '.png'))
    {
        alert("请上传jpg、png类型图片");
        return false;
    }/*else{
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
                console.log(re)
                $('#j_imgPic').attr('src',re.imgSrc);
            },
            error:function(re){
                console.log(re);
            }
        });    
    }*/

});
$('.upTex').on('click',function(){
    console.log('before')
    $('#j_imgfile').click()
    console.log('after')
})