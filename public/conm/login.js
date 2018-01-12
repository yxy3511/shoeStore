$(function(){
    // console.log('ok')
    $(document).ready(function() { 
       setInitVal()
       // alert(JSON.stringify(localStorage.getItem("rmbUser")) == 'null')
       // if(JSON.stringify(localStorage.getItem("rmbUser")) == 'null'){
       //    var isRmb = 0
       // }else{
       //    parseInt(localStorage.getItem("rmbUser"))
       // }
       var isRmb = JSON.stringify(localStorage.getItem("rmbUser")) == 'null' ? 0 : parseInt(localStorage.getItem("rmbUser"))
        
    });

    setInitVal = function(){
      
      if(parseInt(localStorage.getItem("rmbUser"))) { 
            $("#rmbUser").attr("checked", true); 
            $(".pwd").attr('type','password')
            // $(".us_uer").append("<input name='pwd', class = 'pwd text', style='color: #FFFFFF !important; position:absolute; z-index:100;', value="", type='password', placeholder='请输入密码'/>"); 
            // $("#password").val($.cookie("password"));
            if(localStorage.getItem("useInfo") != 'null'){
              let uname = JSON.parse(localStorage.getItem("useInfo")).uname
              var b = new Base64()
              let pass = b.decode(JSON.parse(localStorage.getItem("useInfo")).pwd)
              //赋值
              $('.uname').val(uname)
              $('.pwd').val(pass)
            }else{
              //清空
              $('.uname').val('')
              $('.pwd').val('')
              $(".pwd").attr('type','text')
            }
        }else{
          $("#rmbUser").attr("checked",false); 
        }

    }
    setRemember = function(){

      if(parseInt(localStorage.getItem("rmbUser"))){
        // localStorage.setItem("rmbUser",0) 
        isRmb = 0

      }else{
        // localStorage.setItem("rmbUser",1) 
        isRmb = 1
      }
      // setInitVal()
    }

    saveVal = function(){
      if(parseInt(localStorage.getItem("rmbUser"))){
        var b = new Base64();  
        var pass = b.encode($('.pwd').val());  
        let useInfo = {'uname':$('.uname').val(),'pwd':pass}
        localStorage.setItem("useInfo",JSON.stringify(useInfo)) 
      }else{
        localStorage.setItem("useInfo",null)
      }
      localStorage.setItem("rmbUser",isRmb) 
    }

    
})
