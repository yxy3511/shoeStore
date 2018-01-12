$(function(){
    if(window.location.search.split('=')[1] == 'show'){
        $('.newSort').css('display','table-row')
        $('.noInfo').css('display','none')
    }

    /*---------------类型表---------------------*/
    $('.sortEdit').click(function(e){
        var index = $(this).parent().parent().index();
        $("td > input")[index].removeAttribute('disabled');
        $temp = $("td > input")[index].value;
        $("td > input")[index].value = ''
        $("td > input")[index].focus()
        $("td > input")[index].value = $temp;
    })
    $('.sortName').blur(function(e){
        $('.sortName').attr('disabled','disabled')
    })
    //回车保存
    $('.sortName').on('keypress',function(e){
        if(e.keyCode == 13){
            // console.log($(this).val())
            // console.log(parseInt($(this).parent().prev()[0].innerText))
            var text = $(this).val()
            var sid = parseInt($(this).parent().prev()[0].innerText)
            // window.location = '/manage/saveSort/'+sid+'/'+text
            window.location = returnUrl('/manage/saveSort/pageSize/sortsPageNum/'+sid+'/'+text,2)
        }   
    })


    $('.txtAddSort').click(function(e){
        //无数据tab
        $('.noInfo').css('display','none')
        $('.newTab').css('display','table')

        let pageSize = localStorage.getItem('pageSize') || 10
        var pageNum = $.session.get('curPages') ? JSON.parse($.session.get('curPages'))['sortsPageNum'] : 1
        if(pageNum != 1){
            window.location = '/manage/editSorts/'+pageSize+'/1/?stat=show'
        }else{
            
            $('.newSort').css('display','table-row')
            $('.noInfo').css('display','none')
        }
    })

    /*$('.addSortName').blur(function(e){
        $('.addSortName').attr('disabled','disabled')
    })*/
    $('.addSort').click(function(e){
        var text = $('.addSortName').val()
        if(text == ''){           
            window.autoAlert('类别名称不能为空！','orange')
            // window.wxc.xcConfirm('类别名称不能为空！', window.wxc.xcConfirm.typeEnum.info)
            return 
        }
        var sid = $('.newId').innerText
        window.location = returnUrl('/manage/addSort/pageSize/sortsPageNum/'+text,2)
    })
    //回车保存
    $('.addSortName').on('keypress',function(e){
        if(e.keyCode == 13){
            // console.log($(this).val())
            // console.log(parseInt($(this).parent().prev()[0].innerText))
            var text = $(this).val()
            var sid = parseInt($(this).parent().prev()[0].innerText)
            if(text){
                window.location = returnUrl('/manage/addSort/pageSize/sortsPageNum/'+text,2)
            }
        }   
    })
})