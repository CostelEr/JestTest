import { F } from "./18";

test("should return correct results", () => {
  expect(F(0, 4, 4)).toEqual(1);
  expect(F(7, 7, 0)).toEqual(3);
  expect(F(8, 8, 3)).toEqual(3);
  expect(F(3, 0, 3)).toEqual(2);
});
