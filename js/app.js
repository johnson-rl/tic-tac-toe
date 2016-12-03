console.log('javasctipt is loaded')
var userTurn = 'X'
function makeMove(event){
  $(this).text(userTurn);
  if(userTurn ==='O'){
    userTurn='X';
  } else {
    userTurn='O';
  }
  console.log('the user took a turn')
}

function resetGame(event){
  $('.box').text('');
  console.log("The game has been reset");
  userTurn = 'X';
}
// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  console.log('so is jquery, and the html body is ready')
  $('#board').on('click','.box', makeMove);
  $('.btn').on('click',resetGame);
});
