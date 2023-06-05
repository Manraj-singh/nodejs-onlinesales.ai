const assert = require("chai").assert;

const simulateEvent = require("../");

describe("simulateEvent", () => {
  it("should simulate the event and match the expected outcomes", () => {
    // Test inputs
    const totOccurences = 1000;
    const coinOutcomes = [{ Head: 35 }, { Tail: 65 }];
    const expectedHeadProbability = 0.35;
    const expectedTailProbability = 0.65;

    // running the event
    const result = simulateEvent(coinOutcomes);
    //tolerance is the +/- of expected value to actual output
    const tolerance = 0.02;
    // checking the expected probabilities
    assert.approximately(
      result[0][1] / totOccurences,
      expectedHeadProbability,
      tolerance
    );
    assert.approximately(
      result[1][1] / totOccurences,
      expectedTailProbability,
      tolerance
    );
  });
});
