import { F } from "./16";
test("should return correct results", () => {
  expect(F(5, [8, 10, 7, 1, 9])).toEqual([8, 9, 10, 1, 7]);
  expect(F(6, [0.09, 3.88, 8.31, 0.53, 8.23, 5.94])).toEqual([
    0.09,
    5.94,
    3.88,
    8.23,
    8.31,
    0.53
  ]);
  expect(F(2, [9.55, 3.3])).toEqual([9.55, 3.3]);
  expect(F(5, [9.04, 8.9, 3.69, 8.39, 5.17])).toEqual([
    9.04,
    5.17,
    8.9,
    8.39,
    3.69
  ]);
});
