import { F } from "./11";

test("should return correct results", () => {
  expect(F(25, 25)).toEqual([0, 0]);
  expect(F(1, 15)).toEqual([15, 15]);
  expect(F(22, 46)).toEqual([46, 46]);
  expect(F(35, 27)).toEqual([35, 35]);
});
