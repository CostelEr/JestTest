import { F } from "./9";
test("should return correct results", () => {
  expect(F(-5, -1)).toEqual(55);
  expect(F(-4, -2)).toEqual(29);
  expect(F(0, 1)).toEqual(1);
  expect(F(2, 5)).toEqual(54);
});
