// Function to simulate the event based on given probabilities
function simulateEvent(outcomes) {
  // Calculate the total probability
  console.log("input is", outcomes);
  let totalProb = outcomes.reduce(
    (sum, outcome) => sum + Object.values(outcome)[0],
    0
  );

  console.log("totprob is", totalProb);
  // Calculate the probabilities for each outcome
  let probabilities = outcomes.map(
    (outcome) => Object.values(outcome)[0] / totalProb
  );
  console.log("probablity is", probabilities);

  // Initialize the occurrences array to store the results
  let occurrences = outcomes.map((outcome) => [Object.keys(outcome)[0], 0]);

  // Perform the simulation for 1000 occurrences
  for (let i = 0; i < 1000; i++) {
    let randNum = Math.random();
    let cumulativeProb = 0;

    // Determine the outcome based on probabilities
    for (let j = 0; j < probabilities.length; j++) {
      cumulativeProb += probabilities[j];
      if (randNum <= cumulativeProb) {
        occurrences[j][1]++;
        break;
      }
    }
  }
  console.log("occurrences is", occurrences);

  // Return the occurrences array
  return occurrences;
}

// Example
let coinOutcomes = [{ Head: 35 }, { Tail: 65 }];
let result = simulateEvent(coinOutcomes);

// Print the result
console.log(
  `On triggering the event 1000 times, ${result[0][0]} appeared ${result[0][1]} times and ${result[1][0]} appeared ${result[1][1]} times which is roughly in line with the biasness given.`
);

module.exports = simulateEvent;
