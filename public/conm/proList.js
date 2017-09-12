$(function(){
   
    //搜索框出现
    $('.searchIcon').on('click',function(){
        // $('.searchGroup').css('display','inline-block'); 
        $('.searchGroup').show('slow','linear');
        $('.searchIcon').css('display','none')
    });
    //搜索框隐藏
    $('.searchClose').on('click',function(){
        // $('.searchGroup').css('display','none')
        // $('.searchIcon').css('display','inline-block')
        $('.searchGroup').hide('3000','linear',function(){
            $('.searchIcon').show(); 
        });
    })

    //回车搜索
    $('#inputKey').on('keypress',function(event){
        if(event.keyCode == 13){
        }   
    })
})  