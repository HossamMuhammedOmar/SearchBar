// FETCH INPUT AND SEARCH BUTTON
const userInput = document.querySelector("#searchInput");

// Create variable called "input" to store the user input
let input;

// TEST => ALWAYS TEST YOUR WORK
console.log(userInput); // ✔️

userInput.addEventListener("keyup", (event) => {
  input = event.target.value.toLowerCase();
  console.log(input);
});
