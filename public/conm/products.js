$(function(){

    // $('section').height($('.imgsList').height()+80) 
    //懒加载
    $(".lazyload").lazyload({
        effect : "fadeIn",
        threshold : 200
    });

    
    //搜索框
    var keyArr = window.location.search.indexOf('?') != -1 ? window.location.search.split('?')[1].split('&') : []
    var keyObj = {}
    keyArr.forEach(str=>{
        let key = str.split('=')[0]
        let val = str.split('=')[1]
        keyObj[key] = val
    })
    // var search = window.location.search.split('=')[1] || null
    if(keyObj['key']){
        $('#searchIn').attr('value',keyObj['key'])
    }
    $('#searchIn').attr('placeholder','输入要搜索的内容关键字')
    // $('#searchInput').hide();
    //搜索框出现
    /*$('#searchIcon').on('click',function(){
        $('#searchIcon').hide();
        $('#searchInput').css('visibility','visible'); 
        $('#searchInput').show('slow','linear');
    });*/
    //搜索框隐藏
    /*$('#closeIcon').on('click',function(){
        
        $('#searchInput').hide('3000','linear',function(){
            $('#searchIcon').show(); 
            $('#searchInput').css('visibility','hidden');
        });
    })*/
    //回车搜索
    $('#searchIn').on('keypress',function(event){
        if(event.keyCode == 13){
            searchKey(event)  
        }
    })

    $('.bnt').on('click',function(event){
        searchKey()
    })

    function searchKey(){
        console.log("1111")
        var keyVal = $('#searchIn').val();
        var pageSize = localStorage.getItem('usersPageSize')
        if(keyVal){
            window.location = '/proSearch?key='+keyVal+'&pageNum=1&pageSize='+pageSize
        }else{
            window.location = '/products/0/?pageNum=1&pageSize='+pageSize
        }
        
    }


    /*function resizePic(ThisPic){
        //- console.log(11,$(ThisPic)[0]['naturalHeight'])
        var RePicWidth = -1; //这里修改为您想显示的宽度值
        var standardWidth = 350
        //============以下代码请勿修改==================================

        //- var TrueWidth = ThisPic.width;    //图片实际宽度
        //- var TrueHeight = ThisPic.height;  //图片实际高度
        var TrueWidth = $(ThisPic)[0]['naturalWidth']
        var TrueHeight = $(ThisPic)[0]['naturalHeight']
        if(TrueWidth > standardWidth){
          RePicWidth = standardWidth
        }else{
          RePicWidth = TrueWidth
        }
        var Multiple = TrueWidth / RePicWidth;  //图片缩小(放大)的倍数

        ThisPic.width = RePicWidth;  //图片显示的可视宽度
        ThisPic.height = TrueHeight / Multiple;  //图片显示的可视高度
    }*/


})

