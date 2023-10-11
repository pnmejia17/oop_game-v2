/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

let gameOverMessage = document.getElementById('game-over-message')
let startScreen = document.getElementById('overlay')
let buttons = document.querySelectorAll('.key')


class Game {
    constructor(){
        this.missed = 0;
        this.phrases = [
            new Phrase(`Life is a happy song`),
            new Phrase(`Life is a leg of lamb`),
            new Phrase(`Life is a fillet of fish`),
            new Phrase(`Everything is perfect`), 
            new Phrase(`Life is a piece of cake`)];
        this.activePhrase = null;
    }
    // hides overlay, runs random phrase method, and displays it
    startGame(){
        startScreen.style.display = 'none'
        this.activePhrase = this.getRandomPhrase()
        this.activePhrase.addPhraseToDisplay()

    }
    //uses rand num gen to select phrase from array
    getRandomPhrase(){
        let ranIndex = Math.floor(Math.random() * this.phrases.length)
        let ranPhrase = this.phrases[ranIndex]
        return ranPhrase
    }
    // handles the letter button interactions by changing their classes
    // and checking for win or removing life
    handleInteraction(letterButton){
        const letterinPhrase = this.activePhrase.checkLetter(letterButton.innerHTML)

        if (letterinPhrase){
            letterButton.classList.add('chosen');
            this.activePhrase.showMatchedLetter(letterButton.innerHTML);
         
            
            if (this.checkForWin()) {
                let gameWon = true;
                this.gameOver()
            }
        } else {
            letterButton.classList.add('wrong')
            this.removeLife()
        }
        letterButton.disabled = true
    }
    
    // changes heart image if letter incorrectly guessed
    // includes the condition to check for loss when all lives lost
    removeLife(){
        let life = document.querySelector('img[src="images/liveHeart.png"]')

        if (life){
            life.src = "images/lostHeart.png"
        } 
        this.missed += 1
        if (this.missed > 5){
            this.gameOver()
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

// takes a boolean and displays game over message accordingly
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

    reset() {
        ul.innerHTML='';
        buttons.forEach(button => {
            if(button.className.includes('wrong')) {
                button.disabled = false;
                button.classList.remove('wrong')
            } else {
                button.disabled=false;
                button.classList.remove('chosen')
            }})
        
        let hearts = document.querySelectorAll('img')
        hearts.forEach(heart => { 
            heart.src = 'images/liveHeart.png';
        })

        this.activePhrase = this.getRandomPhrase()
        this.activePhrase.addPhraseToDisplay()
    }
}