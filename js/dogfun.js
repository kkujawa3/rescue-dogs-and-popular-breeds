"use strict";

// Displays answer from Form Question 1
document.getElementById('questionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('question1').value;
    document.getElementById('displayQuestion1').innerText = 'Your Rescue Dog Name is: ' +name + ' !';
    document.getElementById('questionForm').reset();
});

function clearDisplay() {
  document.getElementById('displayQuestion1').innerText = '';
}

document.getElementById('reset-button').addEventListener('click', clearDisplay);

//const question1Element = document.getElementById('question1');
const question2Element = document.getElementById('question2');
const question3Element = document.getElementById('question3');

// Submit button

// Retrieve answers to questions in an array

// Doughnut Chart answer from question 2

// Bar Chart answer from question 3

// Reset form for next user
