const { S, P } = require("./3");
// const P = require("./3");

test("should return correct results", () => {
  expect(P(2, 3)).toBe(10);
});

test("should return correct results", () => {
  expect(S(2, 3)).toBe(5);
});
