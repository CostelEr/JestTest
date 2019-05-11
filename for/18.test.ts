import { F } from "./18";
test("should return correct results", () => {
  expect(F(-3, 4)).toEqual(121);
  expect(F(5, 2)).toEqual(21);
  expect(F(2, 5)).toEqual(-21);
  expect(F(-1, 3)).toEqual(4);
});
