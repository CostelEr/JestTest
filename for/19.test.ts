import { F } from "./19";
test("should return correct results", () => {
  expect(F(7)).toEqual(5040);
  expect(F(6)).toEqual(720);
  expect(F(10)).toEqual(3628800);
});
