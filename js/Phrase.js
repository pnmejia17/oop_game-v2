/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

const ul = document.querySelector('#phrase ul')

class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
        this.id = 'phrase';
        this.class = 'section';
}
    addPhraseToDisplay(){
        ul.innerHTML = ``;
        for (let i = 0; i < this.phrase.length; i++){
            if (this.phrase[i] === ' '){
                const html = `<li> class="hide space"${this.phrase[i]}</li>`
                ul.innerHTML += html;
            } else {
                const html = `<li class = 'hide letter ${this.phrase[i]}'> ${this.phrase[i]}</li>`;
                ul.innerHTML += html;
            }
        }
        return ul;
    }
    checkLetter(){}
    showMatchedLetter(){}
}
