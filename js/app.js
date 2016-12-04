console.log('javasctipt is loaded')
var userTurn = 'X';
var boxesX = ['X'];
var boxesO = ['O'];
var winners = [['one','two','three'],
              ['four','five','six'],
              ['seven','eight','nine'],
              ['one','five','nine'],
              ['three','five','seven'],
              ['one','four','seven'],
              ['two','five','eight'],
              ['three','six','nine']]
var playedX
var playedO

function makeMove(event){
  var elementClass = ($(this).attr('class').split(' '));
  var whichBox = elementClass.pop();
  // console.log(whichBox);
  console.log(elementClass);
  // if (whichBox !="playedO"){
  //   console.log("playedO working")
  // }
  // if (whichBox !="playedX"){
  //   console.log("playedX working")
  // }
  if (((whichBox !="playedO")&&(whichBox !="playedX"))){
    // debugger;
    console.log(whichBox);
    $(this).text(userTurn);
    if(userTurn ==='O'){
      boxesO.push(whichBox);
      $(this).attr('class',elementClass.join(' ') + ' playedO');
      userTurn='X';
    } else {
      boxesX.push(whichBox);
      $(this).attr('class',elementClass.join(' ') + playedX);
      userTurn='O';
    }
    checkWinner(boxesX);
    checkWinner(boxesO);
    console.log('the user took a turn')
  }
}

function checkWinner(player){
  for (var i=0;i<8;i++){
    var winTotal = 0;
    for (var j=0;j<3;j++){
      if(player.indexOf(winners[i][j])>0){
        winTotal++;
      }
      if (winTotal===3){
        declareWinner(player[0]);
      }
    }
  }
}

function declareWinner(winner){
  console.log('winner');
  $('.hidden').attr('class','show');
  $('.container').attr('class','hidden removebackground');
  $('.winner').text('The Winner is '+winner+'!');
}

function resetGame(event){
  // $('.box').text('');
  // console.log("The game has been reset");
  // userTurn = 'X';
  // boxesX = [];
  // boxesO = [];
  location.reload()
}

function choosePlayer(player){
  $('#myModal').modal('toggle');
  $('#red').on('click', declareWinner);
  $('#blue').on('click', declareWinner);
  // $('#red').on('click', playerSet(player, 'playedred'));
  // $('#blue').on('click', playerSet(player, ' playedlightblue'));
  // $('#green').on('click', playerSet(player, ' playedlightgreen'));
  // $('#pink').on('click', playerSet(player, ' playedpink'));
}

function playerSet(player,color){
  return player = color;
  console.log(playedX)
}

// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  console.log('so is jquery, and the html body is ready')
  // $('#myModal').modal('toggle');
  // if (!playedX){
  //   choosePlayer(PlayerX);
  // } else if (!playedO){
  //   choosePlayer(played);
  // } else {
  //   $('#board').on('click','.box', makeMove);
  //   $('.btn').on('click',resetGame);
  // }
  $('#myModal').modal('toggle');
  $('#red').on('click', function(){playedX =' playedred'}); //not sure why I can't use function with arguments
  $('#blue').on('click', function(){playedX =' playedblue'});
  $('#pink').on('click', function(){playedX =' playedpink'});
  $('#green').on('click', function(){playedX =' playedgreen'});
  $('#board').on('click','.box', makeMove);
  $('.reset-button').on('click',resetGame)
  // choosePlayer(playedX);
  // choosePlayer(playedO);

});
