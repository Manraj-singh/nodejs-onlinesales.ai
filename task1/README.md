# Bias Simulator

This project simulates an event with biased outcomes based on given probabilities. It calculates the probabilities for each outcome, performs a simulation for a specified number of occurrences, and provides the statistics of the simulated event.

### Installation

1. Clone the repository:

```
git clone https://github.com/Manraj-singh/nodejs-onlinesales.ai.git
```

2. Navigate to the project directory:

```
cd task1
```

3. Install the dependencies:

```
npm install
```

## Usage

1. Open the `index.js` file.

2. Define the biased outcomes by modifying the `outcomes` array. Each outcome should be an object with a key-value pair representing the outcome and its probability.

   Example:

```
let coinOutcomes = [{ Head: 35 }, { Tail: 65 }];
```

3. Run the program:

```
npm start
```

4. to initiate unit test:

```
npm test
```

5. The program will simulate the event for a specified number of occurrences (default: 1000) and display the statistics on the console. The statistics include the number of times each outcome occurred.
