/**
 * Name: Quotes Library
 * Description: Utility library for getting a list of Quotes
 * Author: Noman
 * Date: 11.10.2022
 */

// Dependencies
const fs = require('fs');

// quote object - module scafollding
const quotes = {};

// get all the quotes and return to the user
quotes.allQuotes = function allQuotes() {
    // Read the text file containing the quotes
    const fileContents = fs.readFileSync(`${__dirname}/quotes.txt`, 'utf8');

    // turn the string into an array
    const arrayOfQuotes = fileContents.split(/\r?\n/);

    // return the array
    return arrayOfQuotes;
};

// export the library
module.exports = quotes;
