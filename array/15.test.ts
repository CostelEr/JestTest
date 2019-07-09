import { F } from "./15";
test("should return correct results", () => {
  expect(F(5, [8, 10, 1, 9, 6])).toEqual([8, 1, 6, 9, 10]);
  expect(F(2, [1.11, 2.61])).toEqual([1.11, 2.61]);
  expect(F(3, [9.78, 5.48, 7.29])).toEqual([9.78, 7.29, 5.48]);
  expect(F(4, [2.49, 9.36, 6.52, 7.04])).toEqual([2.49, 6.52, 7.04, 9.36]);
});
