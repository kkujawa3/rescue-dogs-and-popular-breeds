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
        const dogBreed = data.data.breed;
        const dogTemperament = data.data.temperament;

        const dogPic = document.getElementById("dog-photo");
        const dogBreeds = document.getElementById("dog-breed");
        const dogTemperaments = document.getElementById("dog-temperament");
        
    } catch (error) {
        console.log(error);  
        throw new error("Error getting the dog photo");  
    }
}

document.addEventListener("DOMContentLoaded", function()  {
    getRandomPhoto();
});
