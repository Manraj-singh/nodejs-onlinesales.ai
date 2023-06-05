const chai = require("chai");
const sinon = require("sinon");
const axios = require("axios");
const assert = require("assert");
const evaluateExpressions = require("../index");
const { expressions } = require("../constants");

describe("evaluateExpressions", function () {
  let axiosGetStub;

  beforeEach(function () {
    // Stub the axios.get method
    axiosGetStub = sinon.stub(axios, "get");
  });

  afterEach(function () {
    // Restore the stub after each test
    axiosGetStub.restore();
  });

  it("should evaluate expressions and return results using the API", async function () {
    const expectedResults = [32, 2.5, 3, "5i"];

    // Set up the stub to return the expected results
    expressions.forEach((expression, index) => {
      axiosGetStub
        .withArgs(expression)
        .resolves({ data: expectedResults[index] });
    });

    evaluateExpressions(expressions).then((res) => {
      assert.equal(res, expectedResults);
    });
  });
});
