$(document).ready (function() {
  //Adding player names and score
  $('.startingButton').click(function() {
    var addName = $('#1stplayer').val();
    var addName2 = $('#2ndplayer').val();
    if (addName == '' || addName2 == ''){
      alert('C\'mon, both players must have a name!');
    } else {
      $('aside.player1').append('<li>' + addName + '</li>');
      $('aside.player2').append('<li>' + addName2 + '</li>');
    
    $('html, body').animate({
      scrollTop: $('#q1').offset().top
      }, 1000);      
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

  $('.next-question').click(function() {
  loadNewQuestion();
  fillQuestion(game.currentQuestion);        
  $('.result').hide();
  $('.next-question').hide();
  $('html, body').animate({
    scrollTop: $('#q1').offset().top
    }, 500);
});

});


var Game = function () {

};

game = new Game();

var rand = function (min, max) {
  return Math.floor(Math.random() * max) + min;
};

game.currentQuestion = {};
game.score1 = 0;
game.score2 = 0;
game.player = 1;

game.questions = [
  {
    title: "Just Ducky",
    possibleAnswers: ["Acting like a duck", "Fine and dandy - like Donald"],
    correctAnswer: "Calm on the surface, paddling like crazy beneath",
  }, 
  { 
    title:'Eye Cabbage',
    correctAnswer:'The complete opposite of eye candy', 
    possibleAnswers: ['A gross eye infection', 'the heart of a cabbage'],
  }, 
  {
    title:'Defensive Eating', 
    correctAnswer:'Strategically consuming food for the sole purpose of preventing others from getting it', 
    possibleAnswers: ['Eating for the sole purpose of filling the hole in the heart after being oh so wrong', 'To retort after another individual questions your eating habits'],
  }, 
  {
    title:'Sausage Fear', 
    correctAnswer:'Straight men who are afraid of showing any physical or emotional bond with another man', 
    possibleAnswers: ['Being afraid to see the thingy', 'A preference for hamburgers'],
  }, 
  {
    title:'Trust Fail', 
    correctAnswer:'A poorly excuted trust fall', 
    possibleAnswers: ['A broken promise', 'Believing in Santa. Oh sorry, Santa isn\'t real.'],
  }, 
  {
    title:'Cinderfella', 
    correctAnswer:'A man who must be home by midnight', 
    possibleAnswers: ['A guy that likes Cinderella', 'Someone who works in the blue collar industry, like at the mines'],
  }, 
  {
    title:'Askhole', 
    correctAnswer:'Someone who asks many stupid, pointless or obnoxious questions', 
    possibleAnswers: ['A window to ask questions at the bank', 'The safe replacement word for a swear word'],
  }, 
  {
    title:'Fling Cleaning', 
    correctAnswer:'When one cleans one\'s room solely because they think they will be getting laid that night', 
    possibleAnswers: ['Cleaning out the booty call contacts off of your phone', 'Half-assed cleaning by throwing around a cloth'],
  }, 
  {
    title:'Grave Digging', 
    correctAnswer:'Trying to engage in intercourse with a much older person', 
    possibleAnswers: ['Looking for bodies', 'When trying to backpedal on a bad comment but actually making it worst'],
  }, 
  {
    title:'Bedgasm', 
    correctAnswer:'Feeling of eurphoria experienced when climbing into bed after a long day', 
    possibleAnswers: ['Loss of warm on a cold day when getting out of bed', 'Two beds going at it'],
  }, 
  {
    title:'Nicholas Cage Syndrome', 
    correctAnswer:'When you have the same facial expression no matter what emotion you\'re supposed to be showing', 
    possibleAnswers: ['An obsession with the actor Nicolas Cage', 'To be incredibly famous for absolute crap'],
  }
];
game.answeredQuestions = [];


game.selectRandomQuestion = function () {
  var randomIndex = rand(0, this.questions.length);
  return this.questions[randomIndex];
}

game.validateAnswer = function (question, userAnswer) {
  return question.correctAnswer === userAnswer;
}

function fillQuestion(question) {
  $('.word').html(question.title);
  $('.fullAnswer').html(question.correctAnswer);
  $('.incorrect').html(question.possibleAnswers[0]);
  $('.incorrect2').html(question.possibleAnswers[1]); 
}

function loadNewQuestion() {
  game.currentQuestion = game.selectRandomQuestion();
  if (game.answeredQuestions.length < game.questions.length) {
    while(game.answeredQuestions.indexOf(game.currentQuestion) > -1) {
      game.currentQuestion = game.selectRandomQuestion();  
    }
    } else {
    alert('That is all, folks!');
    return;
  }
}
// function displayScore1() {
//   $('.display-score1').html(game.score);
// }
function displayScore1() {
  $('.display-score1').html(game.score1);
  }
function displayScore2() {
  $('.display-score2').html(game.score2);    
  }
var changeColor = function(){
  if (game.player == '1'){
    $('.player1').css({
        'background-color':'#FE9601',
        'border': '5px solid #9B5B00'});
    $('.player2').css({'background-color':'#FFBF64',
        'border': 'none'});
  } else {
    $('.player2').css({
        'background-color':'#FE9601',
        'border': '5px solid #9B5B00'});
    $('.player1').css({'background-color':'#FFBF64',
        'border': 'none'});
  }
}
loadNewQuestion();
fillQuestion(game.currentQuestion);
displayScore1();
displayScore2();
changeColor();


// var userAnswer = $('.choice').click(function(){
//   game.answeredQuestions.push(game.currentQuestion);  
//   var userAnswer = $(this).text();
//   console.log(game.validateAnswer(game.currentQuestion, userAnswer));    
//   $('.result').show();
//   $('.next-question').show();  
//   if (game.validateAnswer(game.currentQuestion, userAnswer)) {
//     game.score ++;
//     displayScore1();
//     $('.result').html('Correct! That is the right');
//     $('.result').css('color', '#FFDA64');
//   } else {
//     $('.result').html('Incorrect. Your answer sucked. The correct answer is:'+ '<br /><br />' + '"' + game.currentQuestion.correctAnswer + '."');
//     $('.result').css('color', '#F60118');
//   }; 
// });


var userAnswer = $('.choice').click(function(){
  game.answeredQuestions.push(game.currentQuestion);  
  var userAnswer = $(this).text();
  console.log(game.validateAnswer(game.currentQuestion, userAnswer));    
  $('.result').show();
  $('.next-question').show();  
  if (game.validateAnswer(game.currentQuestion, userAnswer)) {
    if (game.player == 1) {
      game.score1 ++;
      displayScore1();
      changeColor();
    } else {
      game.score2 ++;
      displayScore2();
      changeColor();
    }
    $('.result').html('Correct! That is the right');
    $('.result').css('color', '#FFDA64');
  } else {
    $('.result').html('Incorrect. Your answer sucked. The correct answer is:'+ '<br /><br />' + '"' + game.currentQuestion.correctAnswer + '."');
    $('.result').css('color', '#F60118');
  };
  if (game.player == 1) {
    game.player = 2;
  } else {
    game.player = 1;
  }
});





