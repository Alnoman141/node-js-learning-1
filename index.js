/**
 * Title: Basic NodeJs App
 * Description: Simple node application that print random quotes per second interval.
 * Author: Noman
 * Date: 11.10.2022
 */

// Dependencies
const mathLibrary = require('./lib/math');
const quotesLiabrary = require('./lib/quotes');

// app object - Module Scaffolding
const app = {};

// Configaration
app.config = {
    timeBetweenQuotes: 1000,
};

// Function that will print the random number
app.printAQuote = function printAQuote() {
    // get all the quotes
    const allQuotes = quotesLiabrary.allQuotes();

    // get the length of the quotes
    const quotesLength = allQuotes.length;

    // pick a number between 1 and the number of the quotes
    const randomNumber = mathLibrary.getRandomNumber(1, quotesLength);

    // get the quote at the possition of the array
    const selectedQuote = allQuotes[randomNumber - 1];

    // print the quote to the console
    console.log(selectedQuote);
};

// Function that loops the indefinitely, calling the quate function as it gones
app.indefiniteLoop = function indefiniteLoop() {
    // create the interval, using config variable defined above
    setInterval(app.printAQuote, app.config.timeBetweenQuotes);
};

// Invoke the loop
app.indefiniteLoop();
