/**
 * Part 1: DOM Selection Basics
 *
 * In this file, you will practice selecting DOM elements
 * using various methods.
 *
 * Open index.html in your browser and check the console (F12)
 * to see the results of your code.
 */

// ============================================
// EXAMPLE: How to select and log elements
// ============================================

// Selecting by ID
const titleExample = document.getElementById('title');
console.log('Example - Title element:', titleExample);

// Selecting by query selector
const firstParagraph = document.querySelector('p');
console.log('Example - First paragraph text:', firstParagraph.textContent);


// ============================================
// EXERCISE 1: Basic Selection
// ============================================

// Task 1.1: Select the element with ID 'list-title' and log it
// Your code here:
const heading = document.getElementById('list-title');
console.log(heading);   

// Task 1.2: Select the first element with class 'box' and log it
// Your code here:
const box =document.getElementsByClassName('box');
console.log(box);       

// Task 1.3: Select ALL list items and log how many there are
// Hint: Use querySelectorAll and .length property
// Your code here:
let list = document.querySelectorAll('.list-item');
console.log(list)
console.log(list.length)


// ============================================
// EXERCISE 2: Exploring Properties
// ============================================

// Task 2.1: Select the image (id="sample-image") and log its 'src' attribute
// Hint: Use getAttribute('src') or .src property
// Your code here:
let image = document.getElementById('sample-image');
image.getAttribute('src');
console.log(image.getAttribute("src"));


// Task 2.2: Select the link (id="sample-link") and log its 'href' attribute
// Your code here:
let link = document.getElementById('sample-link')
console.log(link)

// Task 2.3: Select the shopping list (id="shopping-list") and log its innerHTML
// Your code here:
let shop = document.getElementById('shopping-list')
console.log(shop.innerHTML)


// ============================================
// EXERCISE 3: Multiple Selections
// ============================================

// Task 3.1: Select all elements with class 'highlight'
// Your code here:
let all = document.querySelectorAll('.highlight')
console.log(all)

// Task 3.2: Loop through all highlighted elements and log each text content
// Hint: Use forEach() method
// Your code here: kkk
const highlights = document.querySelectorAll(".highlight");

highlights.forEach(function(item) {
    console.log(item.textContent);
});


// Task 3.3: Select all list items and log each item's text in uppercase
// Hint: Use .toUpperCase() method on textContent
// Your code here:
const listItems = document.querySelectorAll(".list-item");

listItems.forEach(function(item) {
    console.log(item.textContent.toUpperCase());
});



// ============================================
// BONUS CHALLENGE
// ============================================

// Challenge: Select the container div and count how many child elements it has
// Hint: Use .children.length
// Your code here:

const container = document.querySelector(".container");
console.log(container.children.length);

