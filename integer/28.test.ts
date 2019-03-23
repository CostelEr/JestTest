import { Day } from "./28";

test("should return correct results", () => {
  expect(Day(2, 7)).toEqual(1);
  expect(Day(7, 4)).toEqual(3);
  expect(Day(311, 5)).toEqual(7);
  expect(Day(3, 2)).toEqual(4);
});
