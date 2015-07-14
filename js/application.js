var addName = $('#1stplayer').val();

$(document).ready (function() {
	$(".accordion div").slideToggle("fast");
	$(".accordion h3").click(function () {
	    $(this).next(".pane").slideToggle("slow").siblings(".pane:visible").slideUp("slow");
	});
	$(".startingButton").click(function() {
    $("html, body").animate({
			scrollTop: $("#q1").offset().top
        }, 1000);
	});	

  $(".submit-name").click(function() {
    var addName = $('#1stplayer').val();
    $('aside').append('<li>' + addName + '</li>');
  })

});
