import { Condition } from "./7";

test("should return correct results", () => {
  expect(Condition(72, 31, 20)).toEqual(true);
  expect(Condition(11, 84, 48)).toEqual(false);
  expect(Condition(25, 87, 4)).toEqual(false);
  expect(Condition(36, 44, 83)).toEqual(true);
});
