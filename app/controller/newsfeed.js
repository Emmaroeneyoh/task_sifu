// Importing required modules
const NodeCache = require("node-cache"); // NodeCache for caching responses
const axios = require("axios"); // Axios for making HTTP requests

// Initialize cache with a standard TTL (Time To Live) of 1 hour (3600 seconds)
const cache = new NodeCache({ stdTTL: 3600 });

// Controller function to retrieve news feed based on query parameters
const adminretrievenewsfeedController = async (req, res, next) => {
  // Destructure query parameters from the request
  const { country, category, sources, q, language } = req.query;
console.log('pol')
  // Validate request: Ensure at least one query parameter is provided
  if (!country && !category && !sources && !q && !language) {
    return res.status(400).json({
      status: "error",
      code: "parametersMissing",
      message:
        "Please provide at least one of the following parameters: sources, q, language, country, or category.",
    });
  }

  try {
    // Create a unique cache key using the stringified query parameters
    const cacheKey = JSON.stringify({ country, category, sources, q, language });

    // Check the cache for a response matching this unique key
    const cachedResponse = cache.get(cacheKey);
    if (cachedResponse) {
      // If response is cached, return it to the client
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "News Retrieved",
        data: cachedResponse,
      });
    }

    // Build request parameters, only including non-empty parameters
    const params = {
      apiKey: process.env.NEWS_API_KEY, // API key from environment variables
      ...(country && { country }), // Include country if provided
      ...(category && { category }), // Include category if provided
      ...(sources && { sources }), // Include sources if provided
      ...(q && { q }), // Include query if provided
      ...(language && { language }), // Include language if provided
    };

    // Make a GET request to the news API with the specified parameters
    const response = await axios.get("https://newsapi.org/v2/top-headlines", { params });

    // Cache the API response data for future requests with the same parameters
    cache.set(cacheKey, response.data);

    // Send the response data to the client
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "News received",
      data: response.data,
    });
  } catch (error) {
    // Handle errors by sending a response to the client
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: "Error occurred",
    });
  }
};

// Exporting the controller function to be used in routes
module.exports = {
  adminretrievenewsfeedController,
};
