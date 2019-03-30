import { F } from "./3";

test("should return correct results", () => {
  expect(F(-5)).toEqual(1);
  expect(F(11)).toEqual(3);
  expect(F(-2)).toEqual(4);
  expect(F(-7)).toEqual(-1);
  expect(F(0)).toEqual(10);
});
