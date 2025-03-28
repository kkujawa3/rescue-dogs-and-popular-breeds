# Project Title
Rescue Dogs and Popular Breeds

## Overview
Rescue Dogs and Popular Breeds is a fictional Dog Rescue which is aimed to bringing awareness about rescue dogs. 
This project was made for my passion and love for dogs and wanting to bring more awareness to them.
The project is fun, user-friendly interaction and has a rescue dog photo breed information page.
The goal of the project is to demonstrate a general knowledge of HTML, CSS, and Javascript.

## Technologies Used
Technologies tools used for the project: VS Code, Chrome, Git, Guthub, Node,js, NPM, Nodemon, 
Express.js, Cors and Dog API. 

### Project Features
* Responsive Design
This project uses media queries and flexbox for multiple design approach for multiple screen sizes

* Use Arrays, objects to store and retrieve information
The user input for considering adopting a dog is stored in an array and displayed on the About Us Page

* Use a regular expression to validate user input and inform user about it or prevent it
Found on the dog fun page, the user input for how many dogs in your family is validated with regex by checking if 
the user input is a positive number which also includes zero as an answer. If it is valid, returns a message to 
user letting them know it is a postiive number entered otherwise a message to user is displayed that it is not a valid input

* Retrieve data from a third-party API and use it to display someting in your app
Utlized a third-party dog API and displayed dog data information from it on the dog rescue page

### Project Pages
* Landing Page: This page gives the user an overview and options for navigation of web application.
* About Us: The About page shares my experiences with rescues and interaction with the user.
* Dog Fun: The Dog Fun page allows the user to have interaction fun about dogs.
* Dog Rescue: Using a third-party dog api allows the user to see dog related photo and information.

### Installation
1. Visit the Dog API webpage to retrieve your free Dog API key:https://thedogapi.com/
2. You will then be receiving an email containing your API key in it
3. Install Node.js. If you do not have node.js, please visit: https://nodejs.org/en
4. Open your terminal and run node -v and npm -v. These versions should be v.20.18.0 and 10.8.2.
5. Clone the respository to your local machine using Git: git clone 
6. CD into the project directory
7. To add your API key using Visual Studio Code, open project with: code . 
8. Take your free API key and add it inside the env file
8. Run npm install to install required packages
9. After packages are installed, you can run: npm run dev
10. In your browser, go to localhost:1776 which will take you to the project landing page
11. To stop the project from running: Ctrl+C



