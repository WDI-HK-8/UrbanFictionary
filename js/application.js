var content = [{'word':'Just Ducky','answer':'correct', 'fullAnswer':'Calm on the surface, paddling like crazy beneath.'},{'word':'Eye Cabbage','answer':'correct', 'fullAnswer':'The complete opposite of eye candy'},{'word':'Moron First Base','answer':'correct', 'fullAnswer':'Engaging in hand to hand'},{'word':'Sausage Fear','answer':'correct', 'fullAnswer':'Straight men who are afraid of showing any physical or emotional bond with'},{'word':'Trust Fail','answer':'correct', 'fullAnswer':'A poorly excuted trust fall'},{'word':'Cinderfella','answer':'correct', 'fullAnswer':'A man who must be home by midnight'},{'word':'Crappy Ending','answer':'correct', 'fullAnswer':'Being so relaxed at the end of a massage that one poops during the massage'},{'word':'Fling Cleaning','answer':'correct', 'fullAnswer':'When one cleans one\'s room solely because they think they will be getting laid that night'},{'word':'Grave Digging','answer':'correct', 'fullAnswer':'Trying to engage in intercourse with a much older person'},{'word':'Falawesome','answer':'correct', 'fullAnswer':'Falafel that is heaven in your mouth'},{'word':'Nicholas Cage Syndrome','answer':'correct', 'fullAnswer':'When you have the same facial expression no matter what emotion you\'re supposed to be showing.'}];

$(document).ready (function() {

  //Adding player names and score
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

  //Page slide and main game board
  $('.accordion div').slideToggle('fast');
  $('.accordion h2 ').click(function () {
      $(this).next('.pane').slideToggle('slow').siblings('.pane:visible').slideUp('slow');
  });

  //Generate random question
  var selection = content[Math.floor(Math.random()*11)];
  var type = selection['answer'];
  var fullAnswer = selection['fullAnswer'];
  $('.word').html(selection['word']);
  $('.result').hide();
  $('.generate').hide();


  $('.choice').click(function(e) {
    var pickedAnswer = e.target.class;
    $('.result').show();
    $('.generate') .show();     
    if (pickedAnswer == type) {
      $('.result').html('Yes! Gold star to you, you fantastic sexy know-it-all');
      $('.result').css('color', '#FFDA64');
      } else {
      $('.result').html('Incorrect. Your answer sucked.');
      $('.result').css('color', '#9B2500')
    };
  });

  //Option to restart
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


    



