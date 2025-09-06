"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//creating two variuables that holds the results of the original expression and the modified expression
let originalExpression = 2 + 3 * 2 - 4 * 6
let modifiedExpression = 2 + 3 * (2 - 4) * 6;
printOut("the result of the original expression, 2 + 3 * 2 - 4 * 6, is: " + originalExpression + ". While the the results of the modified expression, 2 + 3 * (2 - 4) * 6 is: " + modifiedExpression);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//breaking this code up into step-by-step variables to make it easier to read
let metres = 25;
let centimetres = 34;

//converting both metres and centrimetres to millimetres
let totalmillimetres = (metres * 1000) + (centimetres * 10);

//converting millimetres to inches while also rounding to two decimals. This time i tried using another method than toFixed(), math.ceil() and math.floor()
let inches = Math.round((totalmillimetres / 25.4) * 100) / 100; //this could also be done by using two variables, one for the amount of inches and one of the rounded amount of inches
printOut(metres + " metres and " + centimetres + " centimetres is equal to " + inches + " inches.");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//creating variables
let days = 3
let hours = 12
let minutes = 14
let seconds = 45

//converting everything to minutes
let totalMinutes = (days * 24 * 60) + (hours * 60) + minutes + (seconds / 60);
printOut("The total time in minutes is: " + totalMinutes);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//to solve this i will use the operator %=. This is a "remainder assigment operator", which assigns the remainder of a division to the variable. This way i can keep track of how many minutes are left after converting to days and hours

//creating a variable for the total of minutes
let inputMinutes = 6322.52;

//creating a variable for days, and rounding down to the nearest whole number to avoid getting a fraction of a day. I dont use math.ceil because then i would not get the correct amount of hours, minutes and seconds
let days2 = Math.floor(inputMinutes / (24 * 60));

//changing inputMinutes to the remainder of minutes left after converting to days
inputMinutes %= (24 * 60);

//creating a variable for hours, and rounding down to the nearest whole number to avoid getting a fraction of an hour
let hours2 = Math.floor(inputMinutes / 60);

//changing inputMinutes to the remainder of minutes left after converting to hours
inputMinutes %= 60;

//creating a variable for minutes, and rounding down to the nearest whole number to avoid getting a fraction of a minute
let minutes2 = Math.floor(inputMinutes);

//creating a variable for seconds, and rounding to the nearest whole number. This time i use math.round() to get the nearest whole number, either that is rounding up or down
let seconds2 = Math.round((inputMinutes - minutes2) * 60);

printOut(days2 + " days, " + hours2 + " hours, " + minutes2 + " minutes and " + seconds2 + " seconds.");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//starting by creating variables for the exchange rates
const nok = 76;
const usd = 8.6;

//creating a variable for calculating the value of nok per dollar, and vice versa
const nokPerUsd = nok / usd;
const usdPerNok = usd / nok;

//amount that we want to convert
let usdAmount = 54;

//convert 54 USD to NOK
let nokAmount = Math.round(usdAmount * nokPerUsd);

//convert the NOK amount back to USD to see if we calculated correctly
let usdAmountConvertedBack = Math.round(nokAmount * usdPerNok);
printOut(usdAmount + " dollars is equal to " + nokAmount + " kroner. When converting back to USD we get: " + usdAmountConvertedBack + " dollars.");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//creating a variable for the sentence
let sentence = "There is much between heaven and earth that we do not understand.";

//printing out the length of the sentence
printOut(`In the sentence: ${sentence} there are ${sentence.length} characters.`); //formatting the output using `` and ${} to insert variables into the string

//printing out the character at position number 19
printOut(`The character at position 19 is: ${sentence[19]}`);

//printing out the characters starting at position number 35 and 8 characters forward
printOut(`The characters starting at position 35 and 8 characters forward is: ${sentence.substring(35, 44)}`); //using substring to get a part of the string, the second parameter is non-inclusive so i have to use 44 to get 8 characters forward from 35

//printing out the index at which "earth" starts in the text
printOut(`The index at which "earth" starts in the text is: ${sentence.indexOf("earth")}`);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Checking if one variable is greater than another by creating a function, then i can also check other values if i want to
function isGreater(a, b) {
    if (a > b) {
        return true;
    }
    return false;
}
printOut(`Is 5 greater than 3? The answer is: ${isGreater(5, 3)}`);
printOut(`Is a greater than b? The answer is: ${isGreater("a", "b")}`); //this will return false, because in the unicode table "a" has a lower value than "b"
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Converts strings to numbers with a function
function convertToNumber(str) {
    let num = Number(str)
    return num;
}
printOut(`The string "254" converted to a number is: ${convertToNumber("254")}`);
printOut(`The string "57.23" converted to a number is: ${convertToNumber("57.23")}`);

//since the function only works when the string is a valid number, it will return Nan. This is why we need to use a different method
let invalidString = parseInt("25 kroner");
printOut(`The string "25 kroner" converted to a number is: ${invalidString} kroner`);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//generates a random number between 1 and 360
let r = Math.floor(Math.random() * 360) + 1;
printOut(`The random number generated is: ${r}`);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//creates a value of the total of days
let totalDays = 131;

//calculates the number of weeks
let weeks = Math.floor(totalDays / 7);

//calculates the number of days left after calculating weeks, and using math.floor to avoid fractions of a day
let daysLeft = totalDays % 7;
printOut(`The total of ${totalDays} days is equal to ${weeks} weeks and ${daysLeft} days.`);
printOut(newLine);