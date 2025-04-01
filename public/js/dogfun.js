"use strict";

// Retrieving answers to the form questions and displaying
document.getElementById('questionForm').addEventListener('submit', function(event) {
  event.preventDefault();

  //Retrieve and display answer to Question 1
  let name = document.getElementById('question1').value;
  const messageE1 = document.getElementById('displayQuestion1');

  if(name === ''){
    messageE1.innerText = '';
  } else {
    messageE1.innerText = "Your Rescue Dog Name is: " + name + "!";
  }

  // Retrieve and display answer to Question 2
  let breed = document.getElementById('question2').value;
  const messageE2 = document.getElementById('displayQuestion2');

  if(breed === '') {
    messageE2.innerText = '';
  } else {
    messageE2.innerText = "Your favorite breed is: " + breed + "!";
  }

  // Retrieve and display answer to Question 3
  let trick = document.getElementById('question3').value;
  const messageE3 = document.getElementById('displayQuestion3');

  if(trick === '') {
    messageE3.innerText = '';
  } else {
    messageE3.innerText = "Dog trick you would teach your rescue is: " + trick + "!";
  }
})

// clear display
function clearDisplay () {
  displayQuestion1.innerText = '';
  displayQuestion2.innerText = '';
  displayQuestion3.innerText = '';
}

// Reset form next user
document.getElementById('reset-button').addEventListener('click', clearDisplay);



// Form for input validation
document.getElementById('amountForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const amountInput = document.getElementById('amountInput').value;
  const message = document.getElementById('message');
  const errorMessage = document.getElementById('errorMessage');

  message.innerText = '';
  errorMessage.innerText = '';

  const amountRegex = /^[0-9]+$/;

  if(amountRegex.test(amountInput)) {
    errorMessage.innerText = '';
    message.innerText = "You shared: " + amountInput + " ! " + "A valid number was entered successfully, thank you for sharing";
  } else {
      errorMessage.innerText = "Error, Please enter a valid positive number";
      message.innerText = '';
  }
});  

// Resets message area for the next user
document.getElementById('resetButton').addEventListener('click', function(event) {
  message.innerText = '';
  errorMessage.innerText = '';
});