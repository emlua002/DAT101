"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

//line 1 and 2
let line1 = "";
let line2 = "";

//for loop to create two lines, one counting up and the other counting down
for (let i = 1, j = 10; i <= 10; i++, j--) {
  line1 += i + ", ";
  line2 += j + ", ";
}

//printing out the two lines
printOut(line1);
printOut(line2);

printOut(newLine);

printOut("--- Part 2, 3 ----------------------------------------------------------------------------------------------");

//number that needs to be guessed
const target = 77777; //number between 1 and 1'000'000
let guess = 0;        //variable to hold the guess
let attempts = 0;     //variable to count the number of attempts

//timer to measure how long it takes to guess the number
const startTime = Date.now();

//loop until the guess is correct
while (guess !== target) {
    //generating a random number between 1 and 1'000'000
    guess = Math.floor(Math.random() * 1000000) + 1;
    attempts++;
}

//end the timer
const endTime = Date.now();
const timeTaken = (endTime - startTime) / 1000; //time in seconds
//printing out when the guess is correct
printOut(`Bingo! The correct number is ${guess}.`);
printOut(`It took ${attempts} attempts to guess the number.`);
printOut(`It took: ${timeTaken} seconds to guess the number.`);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");

//for and while loop to print every prime number greater than 1 and less than 200
//creating a string to hold all the prime numbers
let primes = "";

//for loop to find all prime numbers
for (let number = 2; number < 200; number++) {
  let isPrime = true; //optimistic assumption that the number is prime, until proven otherwise
  let j = 2;
  //checking if the number is prime
  while (j < number) {
    if (number % j === 0) {
      isPrime = false; //if the number is divisible by any number other than 1 and itself, it is not prime
      break; //no need to check further, exit the loop
    }
    j++;
  }
  //if the number is prime, add it to the string
  if (isPrime) {
    primes += number + ", ";
  }
}

//printing out all the prime numbers
printOut(primes);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

//creating a 9x7 grid with cell names in the format KxRy (K for column, R for row)
//outer loop for rows
for (let row = 1; row <= 7; row++) {
  let line = "";  //string to hold the current row
  //inner loop for columns
  for (let col = 1; col <= 9; col++) {
    line += `K${col}R${row}  `; //adding the current cell to the row string
  }   
  printOut(line);
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

let allGrades = ""; // store all grades in one string (one per line)

// Generating random scores for 5 students and calculating their grades
for (let student = 1; student <= 5; student++) {
  let score = Math.floor(Math.random() * 236) + 1; // random score between 1 and 236
  let percentage = (score / 236) * 100; // calculating percentage
  let grade = ""; // variable to hold the grade

  // Assigning grades based on percentage
  if (percentage >= 89) {
    grade = "A";
  } else if (percentage >= 77) {
    grade = "B";
  } else if (percentage >= 65) {
    grade = "C";
  } else if (percentage >= 53) {
    grade = "D";
  } else if (percentage >= 41) {
    grade = "E";
  } else {
    grade = "F";
  }

  // Storing the result in the allGrades string
  allGrades += `Student ${student}: Score = ${score} (${percentage.toFixed(2)}%) - Grade ${grade}\n`;
}

// Printing out all the results
printOut("Original Grades: \n" + allGrades);

// BONUS: sort and print from A to F without arrays
// Grades from best to worst
let gradeLetters = "ABCDEF";

// Loop through each grade letter
for (let i = 0; i < gradeLetters.length; i++) {
  let currentGrade = gradeLetters[i];

  // Read line by line
  let index = 0;
  let line = "";

  printOut(`\nStudents with Grade ${currentGrade}:`);

   while (index < allGrades.length) {
    line = "";

    // Read one line manually
    while (index < allGrades.length && allGrades[index] !== "\n") {
      line += allGrades[index];
      index++;
    }

    // Skip the newline character - (\n)
    index++;

    // Check if this line contains the current grade
    if (line.includes(`Grade ${currentGrade}`)) {
      printOut(line);
    }
  }
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

// 3 Pairs
let throws = 0;
while (true) {
  throws++;
  let dice = [];
  let count = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

  for (let i = 0; i < 6; i++) {
    let roll = Math.floor(Math.random() * 6) + 1;
    dice.push(roll);
    count[roll]++;
  }

  let pairs = 0;
  for (let i = 1; i <= 6; i++) {
    if (count[i] === 2) pairs++;
  }

  if (pairs === 3) {
    printOut(dice.join(","));
    printOut("3 Pairs");
    printOut(`In ${throws} throws!`);
    printOut("");
    break;
  }
}

// Full straight
throws = 0;
while (true) {
  throws++;
  let dice = [];
  let found = { 1: false, 2: false, 3: false, 4: false, 5: false, 6: false };

  for (let i = 0; i < 6; i++) {
    let roll = Math.floor(Math.random() * 6) + 1;
    dice.push(roll);
    found[roll] = true;
  }

  let straight = true;
  for (let i = 1; i <= 6; i++) {
    if (!found[i]) straight = false;
  }

  if (straight) {
    printOut(dice.join(","));
    printOut("Full straight");
    printOut(`In ${throws} throws!`);
    printOut("");
    break;
  }
}

// Tower (4 of a kind + 2 of a kind)
throws = 0;
while (true) {
  throws++;
  let dice = [];
  let count = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

  for (let i = 0; i < 6; i++) {
    let roll = Math.floor(Math.random() * 6) + 1;
    dice.push(roll);
    count[roll]++;
  }

  let hasFour = false;
  let hasTwo = false;

  for (let i = 1; i <= 6; i++) {
    if (count[i] === 4) hasFour = true;
    if (count[i] === 2) hasTwo = true;
  }

  if (hasFour && hasTwo) {
    printOut(dice.join(","));
    printOut("Tower");
    printOut(`In ${throws} throws!`);
    printOut("");
    break;
  }
}

// Yahtzee (all six the same)
throws = 0;
while (true) {
  throws++;
  let dice = [];
  let count = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

  for (let i = 0; i < 6; i++) {
    let roll = Math.floor(Math.random() * 6) + 1;
    dice.push(roll);
    count[roll]++;
  }

  let yahtzee = false;
  for (let i = 1; i <= 6; i++) {
    if (count[i] === 6) yahtzee = true;
  }

  if (yahtzee) {
    printOut(dice.join(","));
    printOut("Yahtzee!");
    printOut(`In ${throws} throws!`);
    printOut("");
    break;
  }
}

printOut(newLine);
