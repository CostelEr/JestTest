import { F } from "./1";

test("should return correct results", () => {
  expect(F(-1)).toEqual(-1);
  expect(F(15)).toEqual(7);
  expect(F(0)).toEqual(0);
  expect(F(14)).toEqual(6);
});
