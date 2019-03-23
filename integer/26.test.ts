import { Day } from "./26";

test("should return correct results", () => {
  expect(Day(5)).toEqual(6);
  expect(Day(7)).toEqual(1);
  expect(Day(4)).toEqual(5);
  expect(Day(257)).toEqual(6);
});
