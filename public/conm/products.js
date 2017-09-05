$(function(){
   
    $('#searchInput').hide();
    //搜索框出现
    $('#searchIcon').on('click',function(){
        $('#searchIcon').hide();
        $('#searchInput').css('visibility','visible'); 
        $('#searchInput').show('slow','linear');
    });
    //搜索框隐藏
    $('#closeIcon').on('click',function(){
        
        $('#searchInput').hide('3000','linear',function(){
            $('#searchIcon').show(); 
            $('#searchInput').css('visibility','hidden');
        });
        // $('#searchIcon').show();
    })
    /*$(document).dblclick(function(){
        $('#searchInput').css('visibility','hidden') 
        $('#searchInput').hide('slow','linear');
        $('#searchIcon').show();
    })*/

    // 循环轮播到上一个项目
    $(".glyphicon-chevron-left").click(function(){
        $("#carousel-example-generic").carousel('prev');
    });
    // 循环轮播到下一个项目
    $(".glyphicon-chevron-right").click(function(){
        $("#carousel-example-generic").carousel('next');
    });
    // 循环轮播到某个特定的帧 
    $(".slide-one").click(function(){
        $("#carousel-example-generic").carousel(0);
    });
    $(".slide-two").click(function(){
        $("#carousel-example-generic").carousel(1);
    });
    $(".slide-three").click(function(){
        $("#carousel-example-generic").carousel(2);
    });
    //暂停轮播
    $('#carousel').hover(function(){
        $("#carousel-example-generic").carousel('pause');
    })
})

