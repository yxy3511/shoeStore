$(function(){
    //设置key
    if(window.location.search.indexOf('key') != -1){
        var key = window.location.search.split('=')[1]
        if(key){
            $('#inputKey').val(key)
        }
    }
    //设置pageSize
    let pageSize = null
    if(localStorage.getItem('pageSize')){
        pageSize = parseInt(localStorage.getItem('pageSize'))
    }else{
        localStorage.setItem('pageSize',defaultPagesize)
        pageSize = defaultPagesize
    }
    $('#setPageSize').val(pageSize)

    //回车搜索
    $('#inputKey').on('keypress',function(event){
        if(event.keyCode == 13){
            let keyVal = $('#inputKey').val();
            // window.location = '/manage/searchPro?key='+keyVal
            window.location = returnUrl('/manage/searchPro/prolistPageNum/pageSize/?key='+keyVal,0)
        }   
    })
    $('#setPageSize').on('keypress',function(event){
        if(event.keyCode == 13){
            let pageSize = $('#setPageSize').val();
            localStorage.setItem('pageSize',pageSize)
            window.location = '/manage/proList/'+pageSize+'/1'
        }   
    })
    
})