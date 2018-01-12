$(function(){
    if(window.location.search.indexOf('key') != -1){
        var key = window.location.search.split('=')[1]
        if(key){
            $('#inputKey').val(key)
        }
    }
    
})