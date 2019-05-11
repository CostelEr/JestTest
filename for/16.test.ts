import { F } from "./16";
test("should return correct results", () => {
  expect(F(-7, 2)).toEqual([-7, 49]);
  expect(F(4, 4)).toEqual([4, 16, 64, 256]);
  expect(F(2, 2)).toEqual([2, 4]);
});
