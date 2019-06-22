import { F } from "./10";
test("should return correct results", () => {
  expect(F(27)).toEqual(2);
  expect(F(3)).toEqual(0);
  expect(F(2424)).toEqual(7);
  expect(F(6)).toEqual(1);
  expect(F(9)).toEqual(1);
});
