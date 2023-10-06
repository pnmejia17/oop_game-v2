/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


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
    startGame(){}
    getRandomPhrase(){
        return (this.phrases[(Math.floor(Math.random() * this.phrases.length))]);
    }
    handleInteraction(){}
    removeLife(){}
    checkForWin(){}
    gameOver(){}

}