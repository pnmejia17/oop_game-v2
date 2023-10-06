/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


//The class should include a constructor that receives a phrase parameter 
// and initializes the following properties:

// phrase: this is the actual phrase the Phrase object is representing. 
// This property should be set to the phrase parameter, but converted to 
// all lower case.
// The class should also have these methods:

//addPhraseToDisplay(): this adds letter placeholders to the display when 
// the game starts. Each letter is presented by an empty box, one li element 
// for each letter. See the example_phrase_html.txt file for an example of 
// what the rendered HTML for a phrase should look like when the game starts, 
// including any id or class attributes needed. When the player correctly guesses a letter, 
// the empty box is replaced with the matched letter (see the showMatchedLetter() method below). 
// Make sure the phrase displayed on the screen uses the letter CSS class for 
// letters and the space CSS class for spaces.

class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
        this.id = 'phrase';
        this.class = 'section';
}
    addPhraseToDisplay(){}
    checkLetter(){}
    showMatchedLetter(){}
}
