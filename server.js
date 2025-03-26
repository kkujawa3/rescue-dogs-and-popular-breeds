"use strict";

const express = require("express");
const app = express();
const path = require("path");
const port = 1776;

require("dotenv").config();
const cors = require("cors");
const corsOptions = {
    origin: `http://localhost:1776`,
};
app.use(cors(corsOptions));

// Serves the front-end content in the public directoy
app.use("", express.static(path.join(__dirname, "./public")));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

async function getRandomPhoto() {
    const url = `https://api.thedogapi.com/v1/images/search?has_breeds=true&api_key=${process.env.CLIENT_ID}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        const receivedPhoto = data[0].url;
        const breed = data[0].breeds[0]?.name || "breed unknown";
        const temperament = data[0].breeds[0]?.temperament || "Temperament unknown";
        return {
            photo: receivedPhoto,
            breed: breed,
            temperament: temperament
        };    
    } catch (error) {
        console.log(error);
        throw new error("Error getting the dog photo!");
    }
}

app.get("/api/getRandomImage", (request, response) => {
    getRandomPhoto().then((returnedPhoto) => {
        response.status(200).json({
            status: 200,
            data: returnedPhoto
        });
    }).catch((error) => {
        console.log(error);
        response.status(500).json({ error: "Error fetching the photo"});
    });
});

// Serves the whole app
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log("Press Ctrl+c to end this process");
})