// Importing the news feed controller function from the controller module
const { adminretrievenewsfeedController } = require("./app/controller/newsfeed");

// Creating a new router instance from Express
const router = require("express").Router();

// Defining a GET route for retrieving news
router.get(
  "/retrieve/news", // The endpoint to access news retrieval
  adminretrievenewsfeedController // The controller function that handles the request
);

// Exporting the router so it can be used in other parts of the application
module.exports = router;
