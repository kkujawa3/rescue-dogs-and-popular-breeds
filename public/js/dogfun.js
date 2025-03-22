"use strict";

// Start here
// Doughnut Chart answer from Form Question 2
/*
let answers = [];
let answersCount = [];

let chartData = {
  labels: [],
  datasets: [{
    label: 'Votes',
    data: [],
    backgroundColor: [],
    hoverbckgroundColor: [],
  }]
};

const doughnutCtx = document.getElementById('myDoughnutChart').getContext('2d');
const myDoughnutChart = new Chart(doughnutCtx, {
  type: 'doughnut',
  data: chartData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return tooltipItem.label + ': ' + tooltipItem.raw + 'votes';
          }
        }
      }
    }
  }
});

function submitAnswer() {
  const userAnswer = doocument.getElementById('question2').value.trim();
  if(userAnswer) {
    const answerIndex = answers.findIndex(answer => answer.toLowerCase() === userAnswer.toLowerCase());
  } else {
    alert("Please enter an answer");
  }

   if(answerIndex !== -1) {
     answerCount[answerIndex]++;
     chartData.datasets[0].data[answerIndex] = answerCount[answerIndex];
    } else {
     answers.push(userAnswer);
     answerCount.push(1);
     chartData.labels.push(userAnswer);
     chartData.datasets[0].data.push(1);
     chartData.datasets[0].backgroundColor.push(getRandomColor());
     chartData.datasets[0].hoverbckgroundColor.push(getRandomColor());
    }
    updateChart();
    document.getElementById('question2').value = '';
};

function updateChart() {
  myDoughnutChart.update();
}

function getRandomColor() {
  return `hsl(${Math.random() * 360}, 70%, 70%)`;
}*/


/*
// Start here for Bar Chart 
// Bar Chart answer from Form Question 3

let answers3 = [];
let answersCount3 = [];

const barCtx = document.getElementById('myBarChart').getContent('2d);
const myBarChart = new Chart(barCtx, {
  type: 'bar',
  data: chartData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return tooltipItem.label + '+ ' + tooltipItem.raw + ' votes';
          }
        }
      }
    }
  }
})
*/

//get form answers

// display answers to Question 1
//document.getElementById('answer1Display').textContent = `Your Rescue Dog Name is: ${answer1}`;

// Testing the three questions on the way form works currently without chart
document.getElementById('questionForm').addEventListener('submit', function(event) {
  event.preventDefault();
  //Retrieve and display answer to Question 1
  let name = document.getElementById('question1').value;
  document.getElementById('displayQuestion1').innerText = "Your Rescue Dog Name is: " + name + "!";

  // Retrieve and display answer to Question 2
  let breed = document.getElementById('question2').value;
  document.getElementById('displayQuestion2').innerText = "Your favorite breed is: " + breed + "!";

  // Retrieve and display answer to Question 3
  let trick = document.getElementById('question3').value;
  document.getElementById('displayQuestion3').innerText = "Dog trick you would teach your rescue is: " + trick + "!";
})

// clear display
function clearDisplay () {
  document.getElementById('displayQuestion1').innerText = '';
  document.getElementById('displayQuestion2').innerText = '';
  document.getElementById('displayQuestion3').innerText = '';
}
// Reset form next user
document.getElementById('reset-button').addEventListener('click', clearDisplay);


