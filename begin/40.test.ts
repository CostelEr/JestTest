import { XY } from "./40";

test("should return correct results", () => {
  expect(XY(1, -1, 1, -2, 1, -3)).toEqual([2, 1]);
  expect(XY(3, 1, -9, 2, -4, -6)).toEqual([-3, 0]);
});
