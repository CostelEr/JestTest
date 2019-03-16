import { X } from "./38";

test("should return correct results", () => {
  expect(X(-6, -48)).toEqual(-8);
  expect(X(2, 4)).toEqual(-2);
  expect(X(-5, -45)).toEqual(-9);
});
