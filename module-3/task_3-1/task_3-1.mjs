"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");

//creating a variable for wake up time
let wakeUpTime = 7;
//checks if the wake up time is 7, 8 or something else
if (wakeUpTime === 7) {
  printOut("I can take the bus to school.");
  } else if (wakeUpTime === 8) {
      printOut("I can take the train to school.");
  } else {
      printOut("I have to take the car to school.");
  }

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/

//variable for input number
let input = 0;

//if-else statement to check if the input number is positive, negative or zero
if (input > 0) {
  printOut("The number is positive.");
  } else if (input < 0) {
      printOut("The number is negative.");
  } else {
      printOut("The number is zero.");
}

printOut(newLine);

printOut("--- Part 6, 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

//creating random number between 1 and 8:
let imageSize = Math.floor(Math.random() * 9);

//if-else statement to check if the image size is the right size:
if (imageSize >= 4 && imageSize < 6) {
  printOut("Thank you");
  } else if (imageSize < 4) {
      printOut("The image is too small.");
  } else {
      printOut("The image is too big.");
  }

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

//list of the months in a year
const monthList = ["January", "February", "March", "April", "May",
"June", "July", "August", "September", "October", "November", "December"];

//randomly selecting a month from the list
const noOfMonth = monthList.length;
//generating a random index to select a month
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

//prints out the selected month
printOut("The selected month is: " + monthName);

//if-else statement to check if the month contains the letter "r":
if (monthName.toLowerCase().includes("r")) { //using the command toLowerCase() to make the check case sensitive
  printOut("You must take your vitamin D");
  } else {
      printOut("You do not need to take vitamin D");
  }

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

//creating an object with the number of days in each month
const daysInMonth = {
  January: 31,
  February: 28,
  March: 31,
  April: 30,
  May: 31,
  June: 30,
  July: 31,
  August: 31,
  September: 30,
  October: 31,
  November: 30,
  December: 31
}

//printing out the number of days in the selected month
printOut("The selected month is: " + monthName);
printOut(`There are ${daysInMonth[monthName]} days in ${monthName}.`);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

//making an if-else statement that informs about the status of my art gallery of the selected month
if (monthName === "March" || monthName === "May") {
  printOut("The gallery is closed for refurbishment.");
  } else if (monthName === "April") {
      printOut("The gallery is open in temporary premises next door.");
  } else {
      printOut("My gallery is open as usual!");
  }

printOut(newLine);
