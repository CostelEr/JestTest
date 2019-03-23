import { Day } from "./24";

test("should return correct results", () => {
  expect(Day(172)).toEqual(4);
  expect(Day(120)).toEqual(1);
  expect(Day(2)).toEqual(2);
});
