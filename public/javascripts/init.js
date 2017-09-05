$(function() {

	// var url = window.location.href;
	// var arr = url.split("//");
	// var path = arr[1].substring(arr[1].indexOf("/"));
	var path = window.location.pathname;
	console.log(path)
	if (path == '/page') {
		$('#home').addClass('active');
		$('#aboutUs').removeClass('active');
		$('#products').removeClass('active');
		$('#contact').removeClass('active');

	} else if (path == '/aboutUs') {
		$('#aboutUs').addClass('active');
		$('#home').removeClass('active');
		$('#products').removeClass('active');
		$('#contact').removeClass('active');

	} else if (path.indexOf('/products') != -1 || path.indexOf('/proDesc') != -1) {
		$('#products').addClass('active');
		$('#home').removeClass('active');
		$('#aboutUs').removeClass('active');
		$('#contact').removeClass('active');
		
	} else if (path == '/contact') {
		$('#contact').addClass('active');
		$('#home').removeClass('active');
		$('#aboutUs').removeClass('active');
		$('#products').removeClass('active');
	} 
	

});
 

