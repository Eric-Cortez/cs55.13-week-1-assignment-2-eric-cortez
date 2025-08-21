/*
Week 1: Assignment 2: Git + GitHub Basics

Author: Eric Cortez
Class: CS55.13
Instructor: Ethan Wilde

Requirements:
Using JavaScript code, create a simple web server application that generates at least
three different unique static text responses to at least three different HTTP requests
that it receives. Manage your application's code using a GitHub repository and Visual
Studio Code’s git integration.

Assignment Description Summary:
1) Write JavaScript code for a simple web server application using the index.js
file in your project, saving it when done.

2) Try running your server-side JavaScript by opening a terminal inside of
Visual Studio Code and issuing the following command at the terminal prompt: node index.js

3) Push code to your GitHub repository when done.
*/

const http = require("http");

const hostname = 'localhost';
const port = 8000;


const server = http.createServer((req, res) => {
    console.log(`Request received: ${req.method} ${req.url}`);

    let responseText = "";

    if (req.url === "/hello" && req.method === "GET") {
        responseText = "Hello World!";
    } else if (req.url === "/goodbye" && req.method === "GET") {
        responseText = "Goodbye...";
    } else {
        responseText = "Welcome to the server!";
    }

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(responseText);
})


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})