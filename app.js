// Importing required modules
const express = require("express"); // Express framework for handling HTTP requests
const dotenv = require("dotenv"); // Dotenv for managing environment variables

// Configure dotenv to read from the .env file
dotenv.config({ path: ".env" });

const cors = require("cors"); // CORS to allow cross-origin requests
const { PORT } = require("./helper/utils"); // Importing PORT value from a helper file

const app = express(); // Initializing the Express app

// Enable CORS for handling cross-origin requests
app.use(cors());

// Creating an HTTP server instance using Express
const http = require("http").Server(app);

// Importing the router for news API
const newsapi = require('./router');

// Applying middleware for serving static files and parsing request bodies
app.use(express.static('public')); // Serve static files from the "public" directory
app.use(express.json()); // Parse JSON bodies in requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Using the news API routes
app.use(newsapi);

// Custom 404 error handler for undefined API routes
app.use((req, res, next) => {
  const error = new Error("API not found"); // Create a new error with a custom message
  error.status = 404; // Set HTTP status to 404
  res.status(404).json({
    status_code: 404,
    status: false,
    message: error.message,
    data: [],
    error: error.message,
  });
});

// Global error handler for catching and responding to other errors
app.use((error, req, res, next) => {
  res.status(error.status || 500); // Set status to error's status or default to 500
  res.status(500).json({
    status_code: 500,
    status: false,
    message: error.message,
    data: [],
    error: error.message,
  });
});

// Define the port for the server (from env or default to 3000)
const port = PORT || 3000;

// Start the server and listen on the specified port
http.listen(port, () => console.log("Connected to the server"));
