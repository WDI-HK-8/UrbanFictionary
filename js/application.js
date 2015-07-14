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
    $('aside').append('addName');
  })

});



// $(function() {
//      var offset = $("#playerNames").offset();
//      var topPadding = 10;
//      // $(window).scroll(function() {
//      //     $(window).scrollTop() > offset.top) {
//      //         $("#box").stop().animate({
//      //             marginTop: $(window).scrollTop() - offset.top + topPadding
//      //         });
//      //     });
//      // });
//  });

// $("confirm").click(function() {
// $(.correct).toggleClass("correct-clicked")
// });