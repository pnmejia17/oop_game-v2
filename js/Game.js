/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

let gameOverMessage = document.getElementById('game-over-message')
let startScreen = document.getElementById('overlay')


class Game {
    constructor(){
        this.missed = 0;
        this.phrases = [
            new Phrase(`Life's a happy song`),
            new Phrase(`Life's a leg of lamb`),
            new Phrase(`Life's a fillet of fish`),
            new Phrase(`Everything is perfect`), 
            new Phrase(`Life's a piece of cake`)];
        this.activePhrase = null;
    }
    startGame(){
        startScreen.style.display = 'none'
        this.activePhrase = this.getRandomPhrase()
        this.activePhrase.addPhraseToDisplay()
    }
    getRandomPhrase(){
        let ranIndex = Math.floor(Math.random() * this.phrases.length)
        let ranPhrase = this.phrases[ranIndex]
        return ranPhrase
    }
    handleInteraction(){}
    
    
    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife(){
        let life = document.querySelector('img[src="images/liveHeart.png"]')

        if (life){
            life.src = "images/lostHeart.png"
        } 
        this.missed += 1
        if (this.missed > 5){
            this.gameOver(gameWon)
        }
    }
    
    // counts how many letters are hidden and returns true if they hav
    // all been uncovered
    checkForWin(){
        let letters = document.querySelectorAll('li.letter')
        let hidden = 0

        letters.forEach(letter => {
            if (letter.classList.value.includes("hide")) {
                hidden += 1
            }
        })
        if (hidden === 0) {
            return true;
        } else {
            return false;
        }
    }

/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
    gameOver(gameWon){
        startScreen.style.display='block';

        if (gameWon){
            gameOverMessage.innerHTML = "Congratulations! <br>You've correctly guessed the phrase"
            startScreen.classList.remove('start')
            startScreen.classList.add('win')
        } else {
            gameOverMessage.innerHTML = "Sorry! <br>You're all out of lives"
            startScreen.classList.remove('start')
            startScreen.classList.add('lose')
        }

    }

}