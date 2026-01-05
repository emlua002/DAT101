"use strict";

// TAsk 1
// Get references to HTML elements
document.getElementById("cmbTask1Calculate").onclick = cmbTask1CalculateClick;

function cmbTask1CalculateClick() {
// Get input values
const width = Number(document.getElementById("txtRectWidth").value);
const height = Number(document.getElementById("txtRectHeight").value);

//calculate perimeter and area
const perimeter = 2 * (width + height);
const area = width * height;

// Display results
document.getElementById("txtTask1Output").textContent = "Perimeter: " + perimeter + ", Area: " + area;
}

// Task 2
// Array to store the words
let words = [];

// Get references to HTML elements
const txtTask2Word = document.getElementById("txtTask2Word")
const txtTask2Output = document.getElementById("txtTask2Output")

// Add keypress event listener
txtTask2Word.addEventListener("keypress", txtTask2WordKeypress);

// Event handler for keypress
function txtTask2WordKeypress(event) {
  // Check if Enter / Return key was pressed
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent form submission, for safety

    // Get the entered word and trim whitespace
    const word = txtTask2Word.value.trim();

    // Only add non-empty words
    if (word !== "") {
      words.push(word);
    }
    
    // Update output
    txtTask2Output.innerHTML =
      "Number of words: " + words.length + "<br>" +
      words.join(", ");

      // Clear the input field
      txtTask2Word.value = "";
  }
}

// Task 3

//get references to HTML elements
const btnTask3CheckAnswer = document.getElementById("cmbTask3CheckAnswer");
const txtTask3Output = document.getElementById("txtTask3Output");

// Add click event listener to the button
btnTask3CheckAnswer.addEventListener("click", checkTask3Answers);

function checkTask3Answers() {
  //get all checkboxes with the name "chkTask3"
  const checkboxes = document.getElementsByName("chkTask3");

  let selected = []; //array to store selected answers

  // Loop through all checkboxes
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      selected.push(checkboxes[i].value); //add value of selected checkbox to array
    }
  }

  // Display result
  if (selected.length === 0) {
    txtTask3Output.innerHTML = "No checkboxes selected.";
  } else {
    txtTask3Output.innerHTML = "Selected answers: " + selected.length + "checkbox(es):<br>" + selected.join(", ");
  }
}

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

// Get references to html elements
const divTask4Cars = document.getElementById("divTask4Cars");
const txtTask4Output = document.getElementById("txtTask4Output");

//Create radio buttons using a for-loop
for (let i = 0; i < CarTypes.length; i++) {
  // Create radio input
  const radio = document.createElement("inout");
  radio.type = "radio";
  radio.name = "carType"; //same name = only one can be selected
  radio.value = CarTypes[i].value;
  
  // Create label text
  const label = document.createElement("label");
  label.textContent = CarTypes[i].caption;

  // Add event listener to radio button
  radio.addEventListener("change", function () {
    txtTask4Output.innerHTML = "You selected: " + CarTypes[i].caption;
  });

  // Add radio button and label to the div
  divTask4Cars.appendChild(radio);
  divTask4Cars.appendChild(label);
  divTask4Cars.appendChild(document.createElement("br")); //line break
}

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

//--- Part 2 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

//--- Part 3 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
