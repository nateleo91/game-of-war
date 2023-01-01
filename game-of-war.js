const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A','2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
J=11;
Q=12;
K=13;
K=14;
let score1=0;
let score2=0;
function gameOfWar(card1,card2){
   
  for(x=0; x<Infinity; x++){
   let card1 = cards[Math.floor(Math.random() * cards.length)];
    let card2 = cards[Math.floor(Math.random() * cards.length)];
    if(card1>card2){
      console.log('Player 1 has a ' + card1 + ' & Player 2 had a ' + card2 + '... Player 1 wins');
      score1++;
      score2--;
    }
  else if(card2>card1){
    console.log('Player 1 has a ' + card1 + ' & Player 2 had a ' + card2 + '... Player 2 wins');
    score2++;
    score1--;
    }
    else{
      console.log('Player 1 has a ' + card1 + ' & Player 2 had a ' + card2 + '... No one wins')
    }
    console.log(score1, score2)
    if(score1==26){
      console.log('Player 1 is the Champ');
      exit();
    }
    if(score2==26){
      console.log('Player 2 is the champion');
      exit();
    }
  }
};

gameOfWar();