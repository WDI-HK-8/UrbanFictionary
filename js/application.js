var content = [{'word':'Just Ducky','answer':'correct', 'fullAnswer':'Calm on the surface, paddling like crazy beneath', 'incorrect':'Acting like a duck', 'incorrect2': 'Fine and dandy - like Donald'},{'word':'Eye Cabbage','answer':'correct', 'fullAnswer':'The complete opposite of eye candy', 'incorrect':'A gross eye infection', 'incorrect2': 'the heart of a cabbage'},{'word':'Defensive Eating','answer':'correct', 'fullAnswer':'Strategically consuming food for the sole purpose of preventing others from getting it', 'incorrect':'Eating for the sole purpose of filling the hole in the heart after being oh so wrong', 'incorrect2': 'To retort after another individual questions your eating habits'},{'word':'Sausage Fear','answer':'correct', 'fullAnswer':'Straight men who are afraid of showing any physical or emotional bond with', 'incorrect':'Being afraid to go all the way with a man', 'incorrect2': 'A preference for hamburgers'},{'word':'Trust Fail','answer':'correct', 'fullAnswer':'A poorly excuted trust fall', 'incorrect':'A broken promise', 'incorrect2': 'Believing in Santa. Oh sorry, Santa isn\'t real.'},{'word':'Cinderfella','answer':'correct', 'fullAnswer':'A man who must be home by midnight', 'incorrect':'A guy that likes Cinderella', 'incorrect2': 'Someone who works in the blue collar industry, like at the mines'},{'word':'Askhole','answer':'correct', 'fullAnswer':'Someone who asks many stupid, pointless or obnoxious questions', 'incorrect':'A window to ask questions at the bank', 'incorrect2': 'The safe replacement word for a swear word'},{'word':'Fling Cleaning','answer':'correct', 'fullAnswer':'When one cleans one\'s room solely because they think they will be getting laid that night', 'incorrect':'Cleaning out the booty call contacts off of your phone', 'incorrect2': 'Half-assed cleaning by throwing around a cloth'},{'word':'Grave Digging','answer':'correct', 'fullAnswer':'Trying to engage in intercourse with a much older person', 'incorrect':'Looking for bodies', 'incorrect2': 'When trying to backpedal on a bad comment but actually making it worst'},{'word':'Bedgasm','answer':'correct', 'fullAnswer':'Feeling of eurphoria experienced when climbing into bed after a long day', 'incorrect':'Loss of warm on a cold day when getting out of bed', 'incorrect2': 'Two beds going at it'},{'word':'Nicholas Cage Syndrome','answer':'correct', 'fullAnswer':'When you have the same facial expression no matter what emotion you\'re supposed to be showing', 'incorrect':'An obsession with the actor Nicolas Cage', 'incorrect2': 'To be incredibly famous for absolute crap'}];


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
  // //new
  var incorrect = selection['incorrect'];
  var incorrect2 = selection['incorrect2'];
  $('.word').html(selection['word']);
  $('.fullAnswer').html(fullAnswer);
  $('.incorrect').html(incorrect);
  $('.incorrect2').html(incorrect2);  
  $('.result').hide();
  $('.next-question').hide();

  $('.choice').click(function(){
    var pickedAnswer = $(this).text();
    $('.result').show();
    $('.next-question').show();  
    if (pickedAnswer == fullAnswer) {
      $('.result').html('Yes! Gold star to you, you fantastic sexy know-it-all!');
      $('.result').css('color', '#FFDA64');
      } else {
      $('.result').html('Incorrect. Your answer sucked. The correct answer is:'+ '<br /><br />' + '"' + fullAnswer + '."');
      $('.result').css('color', '#F60118')
    }; 
  })

  $('.next-question').click(function() {
  //   $('.accordion div').slideToggle('fast');
  //   $('.accordion h2 ').click(function () {
  //     $(this).next('.pane').slideToggle('slow').siblings('.pane:visible').slideUp('slow');
  })

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

