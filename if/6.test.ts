import { F } from "./6";

test("should return correct results", () => {
  expect(F(-4.37, -1.86)).toEqual(-1.86);
  expect(F(-8.18, 3.31)).toEqual(3.31);
  expect(F(1.28, 2.93)).toEqual(2.93);
});
