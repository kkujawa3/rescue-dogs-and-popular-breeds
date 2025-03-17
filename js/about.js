"use strict";

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

// Clear rating from reset button for next user
resetButton.addEventListener('click', function () {
  currentRating = 0;
  updateStars(currentRating);
  guestMessage.textContent = ' ';
});