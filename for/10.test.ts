import { F } from "./10";
test("should return correct results", () => {
  expect(F(1)).toEqual(1);
  expect(F(14)).toEqual(3.251562);
  expect(F(5)).toEqual(2.283333);
});
