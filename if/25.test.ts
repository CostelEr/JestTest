import { F } from "./25";

test("should return correct results", () => {
  expect(F(-2)).toEqual(6);
  expect(F(4)).toEqual(8);
  expect(F(-5)).toEqual(-10);
});
