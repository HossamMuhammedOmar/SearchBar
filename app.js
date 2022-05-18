// 1 => Select the input
const searchInput = document.getElementById("search-input");

// 2 => Add keyup Event Listener to get the user input
searchInput.addEventListener("keyup", (event) => {
  let searchQuery = event.target.value.toLowerCase();

  // Get all the list items and save it to variable
  let allListItems = document.getElementsByClassName("item");

  // Loop over the items and Create a conditional
  // that checks if the item is equal to the
  // user's search query!

  for (let x = 0; x < allListItems.length; x++) {
    const currentItem = allListItems[x].textContent.toLowerCase();
    if (currentItem.includes(searchQuery)) {
      allListItems[x].style.display = "block";
    } else {
      allListItems[x].style.display = "none";
    }
  }
});
