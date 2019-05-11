import { F } from "./21";
test("should return correct results", () => {
  expect(F(1)).toEqual(2);
  expect(F(3)).toEqual(2.66666667);
  expect(F(4)).toEqual(2.70833333);
  expect(F(9)).toEqual(2.71828153);
});
