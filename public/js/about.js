"use strict";

// Initialize array to store user inputs
let userInputArray = [];

// Function to store user input in the array by getting the value, adding it to the array then call the display input function
function storeInput() {
  const userInput = document.getElementById('userInput').value;   
  userInputArray.push(userInput);                                 
  displayInputs();
}

// Function to display the stored inputs by creating a list
function displayInputs() {
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = '';
  userInputArray.forEach((input, index) => {
    const p = document.createElement('p');
    p.textContent = `Visitor ${index + 1}: ${input}`;
    outputDiv.appendChild(p);
  });
}

// Star Rating Elements
const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('rating');
const guestMessage = document.getElementById('guest-message');
const resetButton = document.getElementById('reset-button');

let currentRating = 0;

// Function to update the stars based on rating from user
function updateStars(rating) {

  if(rating < 0 || rating > 5 || isNaN(rating)) {
    return;
  } else {

    stars.forEach(star => {
 
     let starValue = parseInt(star.getAttribute('data-value'), 10);
     if(starValue <= rating) {
       star.classList.add('selected'); 
     } else {
       star.classList.remove('selected');
     }
   });
  }
  ratingValue.textContent = `${rating}/5`;
  guestMessage.textContent = "Thank you for your star rating!";
}

stars.forEach(star => {
  star.addEventListener('click', function () {
    const clickedRating = parseInt(star.getAttribute('data-value'), 10);

    if(!isNaN(clickedRating)) {
      currentRating = clickedRating;
      updateStars(currentRating);
    }
  });
});
//const resetBtn = document.getElementById(reset);
//document.getElementById('userForm').reset();

// Clear rating from reset button for next user
resetButton.addEventListener('click', function () {
  currentRating = 0;
  updateStars(currentRating);
  guestMessage.textContent = ' ';
});