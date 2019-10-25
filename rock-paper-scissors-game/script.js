const hands = [...document.querySelectorAll('.select img')];

const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

const game = {
    playerHand: "",
    aiHand: "",
}

const handSelection = (e) => {
    const hand = e.target;
    game.playerHand = hand.dataset.option; 
    hands.forEach( hand => hand.style.boxShadow = '' );
    hand.style.boxShadow = '0 0 0 4px red';
}
 
const aiChoice = (e) => {
    let index = Math.floor( Math.random() * 3 )
    const aiHand = hands[index].dataset.option;
    return aiHand;
}

const checkResult = (player, ai) => {
    if ( player === ai ) {
        return 'draw'
    } else if ((player === 'paper' && ai === 'rock') ||
        (player === 'rock' && ai === 'paper')) {
            return 'win'
        } else {
            return 'loss'
        }
}

const startGame = () => {
    if ( !game.playerHand ) {
        alert('Choose a hand!');
    }
    game.aiHand = aiChoice();
    const gameResult = checkResult(game.playerHand, game.aiHand);
    console.log(gameResult);
}

hands.forEach( hand => hand.addEventListener('click', handSelection));
document.querySelector('.start').addEventListener('click', startGame)