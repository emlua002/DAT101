"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

// Hardcodes an array with all the numbers between 1 up to 20
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// For loop to loop through the numbers array and print out each number
for (let i = 0; i < numbers.length; i++) {
    // Print out the current number
    printOut(numbers[i]);
}
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

// print out all the numbers with a comma separating them
printOut(numbers.join(", "));

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");

// Variable with the text
const text = "Hei på deg, hvordan har du det?";

// Array with the words from the text
const words = text.split(" ");

// For loop to loop through the array and print word number, index and the word itself
for (let i = 0; i < words.length; i++) {
    printOut(`Word number ${i + 1}, index ${i}: ${words[i]}`);
}

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");

const names = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

function removeFromArray(array, elementToRemove) {
    // find the index of the element to remove
    const index = array.indexOf(elementToRemove);
    // if the element is found, remove it
    if (index !== -1) {
        array.splice(index, 1);
        printOut(`Removed "${elementToRemove}" from the array.`);
    }
    else {
        printOut(`"${elementToRemove}" not found in the array.`);
    }
    // return the modified array
    return array;
}

// Examples
removeFromArray(names, "Hilde"); // removes "Hilde"
removeFromArray(names, "Emilie"); // "Emilie" not found

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

const names2 = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William","Filip", "Noah", "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor", "Magnus"]

// Merge the two arrays
const mergedNames = names.concat(names2);
printOut(mergedNames);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

class TBook {
    #title;
    #author;
    #ISBN; 

    constructor(title, author, ISBN) {
        this.#title = title;
        this.#author = author;
        this.#ISBN = ISBN;
    }

    // public function to get a string representation of the book
    toString() {
        return `Title: ${this.#title}, Author: ${this.#author}, ISBN: ${this.#ISBN}`;
    }
}

const book1 = new TBook("Tomorrow, and Tomorrow, and Tomorrow", "Gabrielle Zevin", "9781529115543");
const book2 = new TBook("A Little Life", "Hanya Yanagihara", "9780804172707");
const book3 = new TBook("Haunting Adeline", "H. D. Carlton", "9781638932918");

// Array to hold the book objects
const books = [book1, book2, book3];

// Loop through the array and print out each book's details
for (let i = 0; i < books.length; i++) {
    printOut(`Book ${i + 1}: ${books[i].toString()}`);
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

const EWeekDays = {
  WeekDay1: { value: 0x01, name: "Mandag" },
  WeekDay2: { value: 0x02, name: "Tirsdag" },
  WeekDay3: { value: 0x04, name: "Onsdag" },
  WeekDay4: { value: 0x08, name: "Torsdag" },
  WeekDay5: { value: 0x10, name: "Fredag" },
  WeekDay6: { value: 0x20, name: "Lørdag" },
  WeekDay7: { value: 0x40, name: "Søndag" },
  Workdays: { value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeidsdager" },
  Weekends: { value: 0x20 + 0x40, name: "Helg" },
}

// Create an array of keys
const keys = Object.keys(EWeekDays);

// Loop through the keys array and print elements
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  const element = EWeekDays[key];
  printOut(`${key}: value = ${element.value}, name = ${element.name}`);
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
