import { F } from "./106";
test("should return correct results", () => {
  expect(F(4, [4.9, 9.9, 9.8, 2.1])).toEqual([4.9, 9.9, 9.9, 9.8, 2.1, 2.1]);
  expect(F(6, [1.3, 7.4, 0.8, 1.7, 9.9, 4.6])).toEqual([
    1.3,
    7.4,
    7.4,
    0.8,
    1.7,
    1.7,
    9.9,
    4.6,
    4.6
  ]);
  expect(F(7, [5.4, 8, 0.5, 4.4, 4.6, 1.1, 8.6])).toEqual([
    5.4,
    8,
    8,
    0.5,
    4.4,
    4.4,
    4.6,
    1.1,
    1.1,
    8.6
  ]);
});