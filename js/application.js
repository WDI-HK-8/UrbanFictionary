
$(document).ready (function() {
	$('.accordion div').slideToggle('fast');
	$('.accordion h2 ').click(function () {
	    $(this).next('.pane').slideToggle('slow').siblings('.pane:visible').slideUp('slow');
	});

	$('.startingButton').click(function() {
    var addName = $('#1stplayer').val();
    var addName2 = $('#2ndplayer').val();
    if (addName == '' || addName2 == ''){
      alert('Name is necessary');
    } else {
      $('aside.player-names').append('<li>' + addName + '</li>' + '<li>' + addName2 + '</li>');
      $('aside.player-scores').append('<li>' + addName + '</li>' + '<li>' + addName + '</li>' + '<li>' + addName2 + '</li>' + '<li>' + addName + '</li>');
    $('html, body').animate({
      scrollTop: $('#q1').offset().top
      }, 1000);      
    }
    // figure out how to create score and replace above 
    // var player1Score = $('Player1!!!!!').val();
    // var player2Score = $('Player2!!!!!').val();
	});	


  $('.play-again').click(function() {
    $('html, body').animate({
    scrollTop: 0}, 1000);   
  });

  $('.play-again').click(function(e){
    e.preventDefault();
      $('form').each (function() { this.reset();
      });
  });

});

var content = [{'word':'Just Ducky','answer':'Calm on the surface, paddling like crazy beneath.'},{'word':'Eye Cabbage','answer':'The complete opposite of eye candy'},{'word':'Moron First Base','answer':'Engaging in hand to hand'},{'word':'Sausage Fear','answer':'Straight men who are afraid of showing any physical or emotional bond with'},{'word':'Trust Fail','answer':'A poorly excuted trust fall'},{'word':'Cinderfella','answer':'A man who must be home by midnight'},{'word':'Crappy Ending','answer':'Being so relaxed at the end of a massage that one poops during the massage'},{'word':'Fling Cleaning','answer':'When one cleans one\'s room solely because they think they will be getting laid that night'},{'word':'Grave Digging','answer':'Trying to engage in intercourse with a much older person'},{'word':'Falawesome','answer':'Falafel that is heaven in your mouth'},{'word':'Nicholas Cage Syndrome','answer':'When you have the same facial expression no matter what emotion you\'re supposed to be showing.'}];



