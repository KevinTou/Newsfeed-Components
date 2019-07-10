/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out"
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

// Create a reference to the header and add the "menu" to it
const header = document.querySelector(".header");
header.append(createMenu(menuItems));

function createMenu(listOfLinks) {
  // Create element structure
  const menu = document.createElement("div");
  const linkContainer = document.createElement("ul");
  const menuButton = document.querySelector(".menu-button");

  // Add a menu class to the "menu" div
  menu.classList.add("menu", "animated", "slideInLeft");

  // Add the newly created <ul> as a child of <div class="menu">
  menu.append(linkContainer);

  // Go through the array of link names, create and add it to the <ul>
  listOfLinks.forEach(linkItem => {
    const newLink = document.createElement("li");
    newLink.textContent = linkItem;

    linkContainer.append(newLink);
  });

  // Add an event listener to the menu button that will toggle the display
  menuButton.addEventListener("click", () => {
    menu.classList.toggle("menu--open");
  });

  return menu;
}
