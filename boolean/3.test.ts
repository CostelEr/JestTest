import { Even } from "./3";

test("should return correct results", () => {
  expect(Even(19)).toEqual(false);
  expect(Even(35)).toEqual(false);
  expect(Even(0)).toEqual(true);
  expect(Even(46)).toEqual(true);
});
