"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

// function to make and return today's date in Norwegian format
function todaysDate() {

    // Get today's date
    const today = new Date();
    // Format the date in Norwegian format
    const formatted = today.toLocaleDateString("no-NB", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    
    return formatted;
}
printOut(`i dag er det ${todaysDate()}`);
todaysDate();
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

// changed the date to one year later so there is something to count down to
const launchDate = new Date("2026-05-14");

// function to calculate and return the number of days left until launch date
function countDown() {
    const today = new Date();
    // calculate difference between today and launch date
    const difference = launchDate - today;
    // convert difference from milliseconds to days
    const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));

    return daysLeft;
}

printOut(`&#x1F3AE Countdown to 2XKO! &#x1F3AE`);
printOut("===========================================");
printOut(`&#x1F3B2 Todays date is: ${todaysDate()}`);
printOut(`&#x1F3B2 The launch date of the highly anticipated tag-team fighting game: 14. May 2026`);
printOut("");
printOut(`&#x1F389 There are ${countDown()} days left until launch!&#x1F389`);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");

// function that calculates the diameter, circumference and area of a circle
function circleStats(radius) {
    const diameter = radius * 2;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * radius * radius;

    printOut(`For a circle with radius ${radius}: cm`);
    printOut(`Diameter: ${diameter} cm`);
    printOut(`Circumference: ${circumference.toFixed(2)} cm`);
    printOut(`Area: ${area.toFixed(2)} cm²`);
}

const radius = 5;
circleStats(radius);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");

// function to calculate and print area and circumference of a rectangle
function rectangleStats(width, height) {
    const area = width * height;
    const circumference = 2 * (width + height);

    printOut(`For a rectangle with width ${width} cm and height ${height} cm:`);
    printOut(`Area: ${area} cm²`);
    printOut(`Circumference: ${circumference} cm`);
}

const width= 4;
const height = 7;

rectangleStats(width, height);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

function conversion(temperature, type) {
    // if the type is Fahrenheit, convert to Celsius and Kelvin
    if (type === "Fahrenheit" || type === "fahrenheit") {
        const celsius = Math.round((temperature - 32) * (5 / 9))
        const kelvin = Math.round(((temperature - 32) * (5 / 9)) + 273.15)

        printOut(`${temperature} degrees fahrenheit is ${celsius} degrees celsius and ${kelvin} degrees kelvin`);
    }
    // if the type is Celsius, convert to Fahrenheit and Kelvin
    else if (type === "Celsius" || type === "celsius") {
        const fahrenheit = Math.round(temperature * (9 / 5) + 32);
        const kelvin = Math.round(temperature + 273.15);

        printOut(`${temperature} degrees celsius is ${fahrenheit} degrees fahrenheit and ${kelvin} degrees kelvin`);
    }
    // if the type is Kelvin, convert to Fahrenheit and Celsius
    else {
        const celsius = Math.round(temperature - 273.15);
        const fahrenheit = Math.round((temperature - 273.15) * (9 / 5) + 32);

        printOut(`${temperature} degrees kelvin is ${celsius} degrees celsius and ${fahrenheit} degrees fahrenheit`);
    }

    
}

conversion(100, "Fahrenheit");
conversion(0, "Celsius");
conversion(50, "Kelvin");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

// function to calculate and print net price based on gross price and tax group
function withoutTax(price, taxGroup) {
    const taxGroupLower = taxGroup.toLowerCase();
    let taxRate;

    // use switch to determine tax rate based on tax group
    switch (taxGroupLower) {
        case "normal":
            taxRate = 0.25;
            break;
        case "food":
            taxRate = 0.15;
            break;
        case "hotel":
        case "transport":
        case "cinema":
            taxRate = 0.1;
            break;
        // case for other tax groups
        default:
            taxRate = NaN;
    }

    // calculate net price
    const net = (100 * price) / (100 + (taxRate * 100));

    // print out result, or error message if tax group is unknown
    if (isNaN(net)) {
        printOut("Unknown tax group!");
    }
    else {
        printOut(`A product that costs ${price} NOK with a tax group of ${taxGroup} has a net price of ${net.toFixed(2)} NOK`);
    }

}

withoutTax(100, "normal");
withoutTax(200, "food");
withoutTax(300, "hotel");
withoutTax(400, "transport");
withoutTax(500, "cinema");
withoutTax(600, "goblins");

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

// function that takes three arguments that calculates speed, distance or time
function motion(speed, distance, time) {
    // count how many are missing
    let missing = 0;
    if (isNaN(speed)) missing++;
    if (isNaN(distance)) missing++;
    if (isNaN(time)) missing++;

    // if more than one is missing, return NaN
    if (missing > 1) {
        return NaN;
    }

    // calculate the missing value
    if (isNaN(speed)) {
        return distance / time;
    } else if (isNaN(distance)) {
        return speed * time;
    } else if (isNaN(time)) {
        return distance / speed;
    } else {
        printOut("There is nothing to calculate!");
    }
}


printOut(motion(NaN, 100, 2));   // speed = 50
printOut(motion(50, NaN, 2));    // distance = 100
printOut(motion(50, 100, NaN));  // time = 2
printOut(motion(NaN, NaN, 5));   // NaN (too many missing)

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");

function stringManipulation(text, maxSize, character, addBefore) {
    // if the text is long enough, return as is
    if (text.length >= maxSize) {
        printOut("No changes to the text were needed!")
        return text;
    }

    // calculate how many characters to add
    const missing = maxSize - text.length;

    // create the filler string
    const filler = character.repeat(missing)

    // add before or after depending on boolean value (true -> before | false -> after)
    // using a ternary operator, works as a shortened version of if..else statement
    const newText = addBefore ? filler + text : text + filler

    printOut(`Original text: "${text}"`)
    printOut(`Modified text: "${newText}"`)
    return newText
}

stringManipulation("Hello", 10, "*", false);
stringManipulation("Hello", 10, "*", true);
stringManipulation("HelloWorld!", 10, "*", true);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");

//function that tests a mathematical expression
function testMath(lines) {

    // start from one
    let currentNumber = 1; 

    for (let line = 1; line <= lines; line++) {
        // left hand side = n + 1 terms
        let leftTerms = line + 1;
        // right hand side = n terms
        let rightTerms = line;

        // calculate left sum
        let leftSum = 0;
        for (let i = 0; i < leftTerms; i++) {
            leftSum += currentNumber;
            currentNumber++;
}

        // calculate right sum
        let rightSum = 0;
        for (let i = 0; i < rightTerms; i++) {
            rightSum += currentNumber;
            currentNumber++;
        }

        // check equality
        if (leftSum !== rightSum) {
            printOut(`Test failed at line ${line}: ${leftSum} !== ${rightSum}`);
            // stop the loop if test fails
            return;
        }
    }
    printOut("Math is fun!");
}

// test for 200 lines
printOut("=== Starting math test ===");
testMath(200);
printOut("=== Test complete ===");

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");

// factorial function
function factorial(n) {
    // Base case: factorial of 0 or 1 is 1. without this, the function would call itself forever, causing it to crash
    if (n === 0 || n === 1) {
        // returns 1 when n is 0 or 1
        return 1;
        // Recursive case: n! = n * (n-1)! this keeps calling the function with decremented values of n until it reaches the base case
    } else {
        return n * factorial(n - 1);
    }
}
// this will print out the formula for 5! which is 5 * 4 * 3 * 2 * 1 = 120
printOut(factorial(5));
printOut(newLine);
