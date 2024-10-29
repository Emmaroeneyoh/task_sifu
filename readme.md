# Project Title

Brief description of your project, its purpose, and features.
Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version v20.14.0 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js).

Follow these steps to set up the project on your local machine.


Navigate to the Project Directory using `cd <project-directory>`.
Install Dependencies by running `npm install`.

Set Up Environment Variables by creating a `.env` file in the root of your project and defining the necessary environment variables, for example, `NEWS_API_KEY=your_news_api_key_here`.

    You can run the application in two modes: development and production.

     To run the application in development mode with automatic restarts, use the command `npm run dev`, which will use **nodemon** to monitor for file changes and restart the server automatically.

     To run the application in production mode, use the command `npm start`, which will run the application without nodemon. Once the server is running, you can access the application in your web browser at `http://localhost:8000`, replacing `8000` with your specified port if you have changed it. You can run tests (if specified) using `npm test`.
