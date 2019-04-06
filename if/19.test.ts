import { F } from "./19";

test("should return correct results", () => {
  expect(F(3, 2, 3, 3)).toEqual(2);
  expect(F(4, 6, 6, 6)).toEqual(1);
  expect(F(1, 1, 1, 2)).toEqual(4);
});
