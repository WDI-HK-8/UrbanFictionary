$(document).ready (function() {
	$(".accordion div").slideToggle("fast");
	$(".accordion h3").click(function () {
	    $(this).next(".pane").slideToggle("slow").siblings(".pane:visible").slideUp("slow");
	});

	$(".btn-lg").click(function() {
		$("html, body").animate({
			scrollTop: $("#Q1").offset().top
        }, 1000);
	});	

});
