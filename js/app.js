console.log('javasctipt is loaded')
var userTurn = 'X';
var boxesX = [];
var boxesO = [];

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
      $(this).attr('class',elementClass.join(' ') + ' playedX');
      userTurn='O';
    }
    // checkWinner();
    console.log('the user took a turn')
  }
}

function checkWiner(){

}

function resetGame(event){
  $('.box').text('');
  console.log("The game has been reset");
  userTurn = 'X';
  boxesX = [];
  boxesO = [];
}
// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  console.log('so is jquery, and the html body is ready')
  $('#board').on('click','.box', makeMove);
  $('.btn').on('click',resetGame);
});
