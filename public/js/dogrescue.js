"use strict";


// Function to fetch images from the server
async function getRandomPhoto() {
    const url = "http://localhost:1776/api/getRandomImage";     
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Response Status:", response.status);
        console.log("Response JSON Data:", data);

        const receivedPhoto = data.data.photo;
        console.log("Received Photo URL:", receivedPhoto);
        const dogBreed = data.data.breed;
        console.log("received breed" , dogBreed);
        const dogTemperament = data.data.temperament;
        console.log("Received temperament", dogTemperament);

        const dogPic = document.querySelector(".dog-img");
        const dogBreeds = document.getElementById("dog-breed");
        const dogTemperaments = document.getElementById("dog-temperament");

        dogPic.style.backgroundImage = `url(${receivedPhoto})`;
        dogBreeds.textContent = dogBreed;
        dogTemperaments.textContent = dogTemperament;
        
    } catch (error) {
        console.log(error);  
        throw new error("Error getting the dog photo");  
    }
}

// Call the function to get a random photo
document.addEventListener("DOMContentLoaded", function()  {
    getRandomPhoto();
});

// Calls the function at specified intervals in milliseconds
setInterval(getRandomPhoto, 10000);

