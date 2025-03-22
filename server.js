"use strict";

const express = require("express");
const app = express();
const path = require("path");
const port = 1776;

// Serves the front-end content in the public directoy
app.use("", express.static(path.join(__dirname, "./public")));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Serves the whole app
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log("Press Ctrl+c to end this process");
})