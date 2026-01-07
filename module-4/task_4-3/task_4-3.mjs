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

// Task 4

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
  const radio = document.createElement("input");
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

// Task 5

// Get references to HTML elements
const selectTask5Animals = document.getElementById("selectTask5Animals");
const txtTask5Output = document.getElementById("txtTask5Output");

// Event listener for dropdown change
selectTask5Animals.addEventListener("change", function () {
  const selectedAnimal = selectTask5Animals.options[selectTask5Animals.selectedIndex].text;

  txtTask5Output.textContent = "You selected: "  + selectedAnimal;

});

// Task 6: Dynamic dropdown list with girls' names

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

// Get references to HTML elements
const selectTask6Girls = document.getElementById("selectTask6Girls");
const txtTask6Output = document.getElementById("txtTask6Output");

// Add names to dropdown from array
for (let i = 0; i < GirlsNames.length; i++) {
  const option = document.createElement("option");
  option.value = GirlsNames[i];
  option.textContent = GirlsNames[i];
  selectTask6Girls.appendChild(option);
}

// Event listener for selection change
selectTask6Girls.addEventListener("change", function () {
  txtTask6Output.textContent = "You selected: " + selectTask6Girls.value;
});


// Task 7:Movie table

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

// Get references to HTML elements
const txtMovieTitle = document.getElementById("txtMovieTitle");
const selectMovieGenre = document.getElementById("selectMovieGenre");
const txtMovieDirector = document.getElementById("txtMovieDirector");
const txtMovieRate = document.getElementById("txtMovieRate");
const cmbAddMovie = document.getElementById("cmbAddMovie");
const tblMovies = document.getElementById("tblMovies");

// Fill genre dropdown dynamically
for (let i = 0; i < MovieGenre.length; i++) {
  const option = document.createElement("option");
  option.value = MovieGenre[i];
  option.textContent = MovieGenre[i];
  selectMovieGenre.appendChild(option);
}

// Counter for numbering movies
let movieNumber = 1;

// Add movie to table when button is clicked
cmbAddMovie.addEventListener("click", function () {

  // Create a new table row
  const row = document.createElement("tr");

  // Create table cells
  const cellNr = document.createElement("td");
  const cellTitle = document.createElement("td");
  const cellGenre = document.createElement("td");
  const cellDirector = document.createElement("td");
  const cellRate = document.createElement("td");

  // Fill table cells with input values
  cellNr.textContent = movieNumber;
  cellTitle.textContent = txtMovieTitle.value;
  cellGenre.textContent = selectMovieGenre.value;
  cellDirector.textContent = txtMovieDirector.value;
  cellRate.textContent = txtMovieRate.value;

  // Append cells to the row
  row.appendChild(cellNr);
  row.appendChild(cellTitle);
  row.appendChild(cellGenre);
  row.appendChild(cellDirector);
  row.appendChild(cellRate);

  // Add row to table
  tblMovies.appendChild(row)

  // Increase movie number
  movieNumber++;

});
