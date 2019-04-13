import { F } from "./4";
test("should return correct results", () => {
  expect(F(4)).toEqual(30);
  expect(F(2)).toEqual(28);
  expect(F(3)).toEqual(31);
  expect(F(9)).toEqual(30);
});
