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

// maps the phrase unto the boxes
    addPhraseToDisplay(){
        ul.innerHTML = ``;
        for (let i = 0; i < this.phrase.length; i++){
            if (this.phrase[i] === ' '){
                const html = `<li class="hide space">${this.phrase[i]}</li>`
                ul.innerHTML += html;
            } else {
                const html = `<li class = 'hide letter ${this.phrase[i]}'> ${this.phrase[i]}</li>`;
                ul.innerHTML += html;
            }
        }
        return ul;
    }

// checks in the letter is included in the phrase
    checkLetter(letter){
        if (this.phrase.includes(letter)){
            return true;
        } else {
            return false;
        }
    }

// uses the check letter method to reveal matched letter by changing class  
    showMatchedLetter(letter){
        const matchedLetters = document.querySelectorAll(`#phrase li.${letter}`);
        if (this.checkLetter(letter)) {
            matchedLetters.forEach(letter => {
                letter.classList.remove('hide')
                letter.classList.add('show')
            })
        }
    }
}
