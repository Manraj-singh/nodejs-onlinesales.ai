const { expressions } = require("./constants");
const evaluateUsingAPI = require("./api");

//function to evaluate the expression using API
async function evaluateExpressions(expressions) {
  //if end is found break from loop
  let evaluatedResults = [];
  for (const expression of expressions) {
    if (expression === "end") break;

    const result = await evaluateUsingAPI(expression);
    evaluatedResults.push(result);

    console.log(`${expression} => ${result}`);
  }
  return evaluatedResults;
}

//calling function to evaluate>
evaluateExpressions(expressions);
// console.log(resultArr);
module.exports = evaluateExpressions;
