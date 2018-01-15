document.write("<script language=javascript src='/conm/config.js'></script>");
$(function() {
    if(localStorage.getItem('usersPageSize')){
        var pageSize = localStorage.getItem('usersPageSize')
    }else{
        localStorage.setItem('usersPageSize',defaultUserPagesize)
        var pageSize = defaultUserPagesize
    }
	//获取分类
	$.ajax({
        type : 'get',
        url : '/getSortsList',
        processData:false,
        async:false,
        cache: false,  
        contentType: false, 
        success:function(re){
            // var cnt = 0;
            var pageNum = 1
            var isAll = 1
            // var pageSize = localStorage.getItem('usersPageSize')
            for(var i in JSON.parse(re.vals)){
                //建新的节点
                var parent = document.getElementById('menus')
                var liContent = document.createElement("li")
                liContent.className = 'txt'
                parent.appendChild(liContent);  
                var aBlock = document.createElement("a")
                aBlock.setAttribute('href', '/products/'+i+'/?pageNum='+pageNum+'&pageSize='+pageSize)
                //设置选中状态
                if(window.location.pathname.indexOf('/products/'+i) != -1){
                    aBlock.setAttribute('class','active')
                    isAll = 0
                }
                aBlock.setAttribute('sid', i)
                aBlock.innerHTML = JSON.parse(re.vals)[i]
                liContent.appendChild(aBlock); 

                var liBlock = document.createElement("li")
                liBlock.className =  'divider marginT'   
                // parent.prepend(liBlock);  
                parent.insertBefore(liBlock, liContent.nextSibling)
                /*if(cnt != 0){
                	parent.insertBefore(liBlock, liContent.nextSibling)
                }
                cnt++;*/

            }
            if(isAll && window.location.pathname.indexOf('/products/') != -1){
                $('.getAll').attr('class','active')
            }
        },
        error:function(re){
            // alert(JSON.stringify(re))
            window.autoAlert(JSON.stringify(re),'red')
            // console.log(re);
        }

    });   
	var path = window.location.pathname;
    Menu.forEach((m,index)=>{
        m.childUrl.forEach(url=>{
            if(path.indexOf(url) != -1){
                $('a.page-scroll').map((i,param)=>{
                    if(i == index){
                        $(param).addClass('active');
                    }else{
                        $(param).removeClass('active');
                    }
                })
            }
        })
    })
	/*if (path == '/page' || path == '/atlas') {
		$('#home').addClass('active');
		$('#aboutUs').removeClass('active');
		$('#products').removeClass('active');
		$('#contact').removeClass('active');

	} else if (path == '/aboutUs') {
		$('#aboutUs').addClass('active');
		$('#home').removeClass('active');
		$('#products').removeClass('active');
		$('#contact').removeClass('active');

	} else if (path.indexOf('/products') != -1 || path.indexOf('/proDesc') != -1 || path.indexOf('/proSearch') != -1 || path.indexOf('/descPro') != -1 ) {
		$('#products').addClass('active');
		$('#home').removeClass('active');
		$('#aboutUs').removeClass('active');
		$('#contact').removeClass('active');
		var pArr = window.location.pathname.split('/');
		var sid = parseInt(pArr[pArr.length-1])
		$("[sid="+sid+"]").addClass('active');
		
	} else if (path == '/contact') {
		$('#contact').addClass('active');
		$('#home').removeClass('active');
		$('#aboutUs').removeClass('active');
		$('#products').removeClass('active');
	} */
});
    
 

