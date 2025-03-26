"use strict";

const el = {
    dog: document.getElementById("dog"),
};

async function getRandomPhoto() {
    const url = "http://localhost:1776/api/getRandomImage";     
    try {
        const response = await fetch(url);
        const data: await response.json();
        const receivedPhoto = data[0].urls;
        const breed = data[0].breeds[0]?.name || "breed unknown";
        const temperament = data[0].breeds[0]?.temperament || "Temperament unknown";
        return {
            photo: receivedPhoto,
            breed: breed,
            temperament: temperament
        };
    } catch (error) {
        console.log(error);  
        throw new error("Error getting the dog photo");  
    }
}
getRandomPhoto();