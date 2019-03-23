import { Day } from "./25";

test("should return correct results", () => {
  expect(Day(3)).toEqual(6);
  expect(Day(38)).toEqual(6);
  expect(Day(312)).toEqual(0);
});
