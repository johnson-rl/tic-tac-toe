console.log('javasctipt is loaded');
var userTurn = 'X';
var boxesX = ['X'];//arrays that store played boxes for each player
var boxesO = ['O'];
var winners = [['one','two','three'], //possible winning combos
              ['four','five','six'],
              ['seven','eight','nine'],
              ['one','five','nine'],
              ['three','five','seven'],
              ['one','four','seven'],
              ['two','five','eight'],
              ['three','six','nine']];
var playedX = ' playedgreen';//player colors
var playedO = ' playedred';
//the next function takes a turn runs the checkwinner function for each player, aslo checks for cat's game
function makeMove(event){
  var elementClass = ($(this).attr('class').split(' '));
  var whichBox = elementClass.pop();//box number popped off, will be added to this player's array
  if ((((' '+whichBox) != playedO)&&((' '+whichBox) != playedX))){
    $(this).text(userTurn);
    if(userTurn ==='O'){
      boxesO.push(whichBox);//box number added to user array
      $(this).attr('class',elementClass.join(' ') + playedO);//color class added to $(this).  Changes background color to user color, but more importantly, prevents playing the same box twice.
      userTurn='X';
    } else {
      boxesX.push(whichBox);
      $(this).attr('class',elementClass.join(' ') + playedX);
      userTurn='O';
    }
    checkWinner(boxesX);
    checkWinner(boxesO);
    if (boxesO.length+boxesX.length === 11){catsGame()}
    $('.turn').text(userTurn);
  }
}

function catsGame(){//display's cat's game screen
  $('.starting-color').attr('class','cat-class');
  $('.container').attr('class','hidden');
  $('.cats').attr('class','cats');
  $('.turn-tracker').attr('class','hidden');
}

function checkWinner(player){//checks winner arrays against player array for match
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

function declareWinner(winner){//displays winner screen
  $('.win').attr('class','show');
  $('.container').attr('class','hidden');
  $('.turn-tracker').attr('class','hidden');
  if (winner==='X'){
    $('.starting-color').attr('class', playedX);
  } else {
    $('.starting-color').attr('class', playedO);
  }
  $('.winner').text(winner);
  boxesX.pop();
}

$(document).ready(function() {
  $('#myModal').modal('show');
  $('#red').on('click', function(){playedX =' playedred'}); //not sure why I can't use function with arguments
  $('#blue').on('click', function(){playedX =' playedblue'});
  $('#pink').on('click', function(){playedX =' playedpink'});
  $('#green').on('click', function(){playedX =' playedgreen'});
  $('#Ored').on('click', function(){playedO =' playedred'});
  $('#Oblue').on('click', function(){playedO =' playedblue'});
  $('#Opink').on('click', function(){playedO =' playedpink'});
  $('#Ogreen').on('click', function(){playedO =' playedgreen'});
  $('#board').on('click','.box', makeMove);//listens to board, makes move using specific box clicked as $(this)
  $('.reset').on('click',function(){location.reload()})
});
