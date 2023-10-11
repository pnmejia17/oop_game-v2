/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startGame = document.getElementById('btn__reset')
let game; 

startGame.addEventListener('click', e => {
    game = new Game();
    game.startGame();
    game.reset()
})

const keyboard = document.querySelector('#qwerty')

keyboard.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON'){
    game.handleInteraction(e.target)}}
)