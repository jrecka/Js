const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

const game = {
    playerHand: "",
    computerHand: "",
}

const handSelection = (e) => {
    const hand = e.target;
    game.playerHand = hand.dataset.option; 
    hands.forEach( hand => hand.style.boxShadow = '' );
    hand.style.boxShadow = '0 0 0 4px red';
    }
    
// function handSelection() {
//     console.log('lol');
// game.playerHand = this.dataset.option;
// console.log(game.playerHand );
// }
const hands = [...document.querySelectorAll('.select img')];

hands.forEach(hand => hand.addEventListener('click', handSelection));