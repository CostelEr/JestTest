import { F } from "./11";
test("should return correct results", () => {
  expect(F(3)).toEqual(86);
  expect(F(7)).toEqual(924);
  expect(F(5)).toEqual(355);
});
