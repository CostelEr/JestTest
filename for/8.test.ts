import { F } from "./8";
test("should return correct results", () => {
  expect(F(1, 2)).toEqual(2);
  expect(F(-2, 2)).toEqual(0);
  expect(F(1, 5)).toEqual(120);
  expect(F(5, 7)).toEqual(210);
});
