 $(document).ready(function() {
 	$(".top-menu li a").on("click", function(event) {

 		event.preventDefault();

 		$(".top-menu li a").removeClass('active');

 		$(this).addClass('active')

 		var id = $(this).attr('href'),

 			top = $(id).offset().top;

 		$('body,html').animate({
 			scrollTop: top
 		}, 1500);
 	});
 });