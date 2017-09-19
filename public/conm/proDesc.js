$(function(){
    console.log('length:',$('.carousel-indicators').children().length)
    for(var i = 0; i<$('.carousel-indicators').children().length || i==$('.carousel-indicators').children().length;i++ ){
        var classTxt = 'slide_'+i;
        $(classTxt).click(function(){
            $("#carousel-example-generic").carousel(i);
        });
    }
    // 循环轮播到上一个项目
    $(".glyphicon-chevron-left").click(function(){
        $("#carousel-example-generic").carousel('prev');
    });
    // 循环轮播到下一个项目
    $(".glyphicon-chevron-right").click(function(){
        $("#carousel-example-generic").carousel('next');
    });
    // 循环轮播到某个特定的帧 
    /*$(".slide-one").click(function(){
        $("#carousel-example-generic").carousel(0);
    });
    $(".slide-two").click(function(){
        $("#carousel-example-generic").carousel(1);
    });
    $(".slide-three").click(function(){
        $("#carousel-example-generic").carousel(2);
    });*/
    //暂停轮播
    $('#carousel').hover(function(){
        $("#carousel-example-generic").carousel('pause');
    })
})