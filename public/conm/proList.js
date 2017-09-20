$(function(){
    //退出出现
    $('.muser').on('click',function(){
        $('.logoutDiv').css('visibility','visible'); 
        $('.logoutDiv').show('slow','linear');
    })
    //退出消失
    $('.muser').blur(function(){
        $('.logoutDiv').css('visibility','hidden'); 
        // $('.logoutDiv').hide('3000','linear');//无效
    })
    /*---------------manageAdd---------------------*/
    //列表出现
    $('.manageAdd').on('click',function(){
        $('.addDiv').css('visibility','visible'); 
        // $('.addDiv').css('display','block'); 
        $('.addDiv').show('slow','linear');
    })
    //列表消失
    $('.manageAdd').blur(function(){
        $('.addDiv').css('visibility','hidden'); 
        // $('.addDiv').css('display','none'); 
    })

    //点击退出
    $('.logoutDiv').on('click',function(){
        window.location = '/login'
    })
    //搜索框出现
    $('.searchIcon').on('click',function(){
        $('.searchGroup').show('slow','linear');
        $('.searchIcon').css('display','none')
    });
    //搜索框隐藏
    $('.searchClose').on('click',function(){
        $('.searchGroup').hide('3000','linear',function(){
            $('.searchIcon').show(); 
        });
    })

    //回车搜索
    $('#inputKey').on('keypress',function(event){
        if(event.keyCode == 13){
            var keyVal = $('#inputKey').val();
            window.location = '/manage/searchPro?key='+keyVal
        }   
    })
})  