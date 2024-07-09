function whoWon(player1,player2){

   if (player1 === player2){
     return 'TIE!';
   }
   
   if (player1 === 'rock' && player2 === 'paper'){
     return 'Player 2 wins!';
   }
   
   if (player1 === 'paper' && player2 === 'scissors'){
     return 'Player 2 wins!';
   }
   
   if (player1 === 'scissors' && player2 === 'rock '){
     return 'Player 2 wins!';
   }
 
   return 'Player 1 wins!';
 }
 module.exports = {
  whoWon: whoWon
};

const test = require('../RPS.js');

test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function(){
  let output = test.whoWon('rock','paper');
  expect(output).toBe("Player 2 wins!");
});

test("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function(){
  let output = test.whoWon('paper','scissors');
  expect(output).toBe("Player 2 wins!");
});