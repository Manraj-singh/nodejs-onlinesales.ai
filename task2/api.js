const axios = require("axios");
const API_URL = "https://api.mathjs.org/v4";

//calling the api and getting result of expression
const evaluateUsingAPI = async (expression) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        expr: expression,
      },
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(`Error evaluating expression: ${expression}`);
  }
};

module.exports = evaluateUsingAPI;
