import { Day } from "./27";

test("should return correct results", () => {
  expect(Day(4)).toEqual(2);
  expect(Day(3)).toEqual(1);
  expect(Day(220)).toEqual(1);
  expect(Day(125)).toEqual(4);
});
