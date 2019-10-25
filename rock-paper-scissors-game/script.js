const hands = [...document.querySelectorAll('.select img')];
const playerChoice = document.querySelector('[data-summary="player-choice"]');
const aiChoice = document.querySelector('[data-summary="computer-choice"]');
const winner = document.querySelector('[data-summary="winner"]');
const gameNumbers = document.querySelector('.numbers span');
const gameWins = document.querySelector('.wins span');
const gameLosses = document.querySelector('.losses span');
const gameDraws = document.querySelector('.draws span');
const startBtn = document.querySelector('.start');

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
 
const aiSelection = (e) => {
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

const publishResult = (player, ai, result) => {
    playerChoice.textContent = player;
    aiChoice.textContent = ai;
    gameNumbers.textContent = ++gameSummary.numbers;

    if( result === 'win' ) {
        winner.textContent = 'You win';
        gameWins.textContent = ++gameSummary.wins;
        
    } else if ( result === 'loss') {
        winner.textContent = 'Computer win'
        gameLosses.textContent = ++gameSummary.losses; 
    } else {
        winner.textContent = 'Draw'
    }
}

const startGame = () => {
    if ( !game.playerHand ) {
        alert('Choose a hand!');
    }
    game.aiHand = aiSelection();
    const gameResult = checkResult(game.playerHand, game.aiHand);
    publishResult(game.playerHand, game.aiHand, gameResult);
}

hands.forEach( hand => hand.addEventListener('click', handSelection));
startBtn.addEventListener('click', startGame)