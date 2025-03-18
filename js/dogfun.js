"use strict";



// Displays answer from Form Question 1

  //const question2Element = document.getElementById('question2');
  //const question3Element = document.getElementById('question3');

  //let name = document.getElementById('question1').value;
  //document.getElementById('displayQuestion1').innerText = 'Your Rescue Dog Name is: ' +name + ' !';
  //document.getElementById('questionForm').reset();

  // Start here
  // Doughnut Chart answer from Form Question 2
const doughnutCtx = document.getElementById('myDoughnutChart').getContext('2d');
const barCtx = document.getElementById('myBarChart').getContent('2d');

//let two = document.getElementById('question2').value;
let myDoughnutChart = new Chart(doughnutCtx, {
    type: 'doughnut',
    data: {
      labels: ['Dog Breed'], // need to check this
      datasets: [{
        data: [' '],    // check this
        backgroundColor: ['#ff6384'],
      }]
    }
});

// Bar Chart answer from Form Question 3
//const barCtx = document.getElementById('myBarChart').getContent('2d');
let myBarChart = new Chart(barCtx, {
    type: 'bar',
    data: {
      labels: ['Dog Trick'],   // need to check this
      datasets: [{
        data: [' '],           // need to chcek this
        backgroundColor: ['#ff6385'],
      }]
    }
});

document.getElementById('questionForm').addEventListener('submit', function(event) {
  event.preventDefault();

  //get form answers

  // display answers to Question 1
  document.getElementById('answer1Display').textContent = `Your Rescue Dog Name is: ${answer1}`;

  // Answer for Question 2

  // Answer for Question 3


})

//function clearDisplay() {
//  document.getElementById('displayQuestion1').innerText = '';
//}

//document.getElementById('reset-button').addEventListener('click', clearDisplay);


// Retrieve answers to questions in an array


// Reset form for next user
