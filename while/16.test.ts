import { F } from "./16";
test("should return correct results", () => {
  expect(F(40)).toEqual([7, 238.534]);
  expect(F(47)).toEqual([7, 294.314]);
  expect(F(20)).toEqual([9, 207.989]);
  expect(F(7)).toEqual([13, 201.406]);
  expect(F(1)).toEqual([19, 208.109]);
});
