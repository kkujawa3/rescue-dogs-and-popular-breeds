"use strict";

const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('rating-value');
const resetButton = document.getElementById('reset-button');

let currentRating = 0;

// For the hover effect
stars.forEach(star => {
  //Click event to set the rating
  star.addEventListener('click', () => {
    currentRating = parseInt(star.getAttribute('data-value'));
    updateStars(currentRating);
    //console.log(currentRating);
    ratingValue.textContent = (currentRating)/5;
  });


  star.addEventListener('mouseover', () => {
    const hoverValue = parseInt(star.getAttribute('data-value'));
    updateStars(hoverValue, true);
  });

  star.addEventListener('mouseleave', () => {
    updateStars(currentRating);
  });

});

// Function to update the stars based on rating from user
function updateStars(rating, isHover = false) {
  stars.forEach(star => {
    const value = parseInt(star.getAttribute('data-value'));
    if (isHover) {
      if(value <= rating) {
        star.classList.add('hover');
      } else {
        star.classList.remove('hover');
      }
    } else {
      if(value <= rating) {
        star.classList.add('filled');
      } else {
        star.classList.remove('filled');
      }  
    }  
  });
}

// Clear rating from reset button for next user
resetButton.addEventListener('click', () => {
    currentRating = 0;
   updateStars(currentRating);
   ratingValue.textContent = (currentRating)/5;
});


