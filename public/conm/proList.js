$(function(){
    //退出出现
    $('.user').on('click',function(){
        console.log('user')
        $('.logoutDiv').css('visibility','visible'); 
        $('.logoutDiv').show('slow','linear');
    })
    //点击退出
    $('.logoutDiv').on('click',function(){
        window.location = '/login'
    })
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
            var keyVal = $('#inputKey').val();
            console.log('kkkkey:',keyVal)
            window.location = '/manage/searchPro?key='+keyVal
            // $.get('/manage/searchPro',{key:keyVal})
            /*$.ajax({
                type : 'get',
                url : '/manage/searchPro',
                data: {key:keyVal},
                success:function(re,res){
                    console.log(re)

                },
                error:function(re){
                    alert(JSON.stringify(re))
                    console.log(re);
                }

            });    */
        }   
    })
})  