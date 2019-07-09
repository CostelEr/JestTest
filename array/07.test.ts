import { F } from "./07";
test("should return correct results", () => {
  expect(F(2, [0.2, 8.32])).toEqual([8.32, 0.2]);
  expect(F(6, [9.13, 7.57, 1.01, 6.25, 5.55, 1.43])).toEqual([
    1.43,
    5.55,
    6.25,
    1.01,
    7.57,
    9.13
  ]);
  expect(F(9, [0.31, 3.69, 3.69, 0.84, 3.87, 5.47, 7.97, 7.58, 6.39])).toEqual([
    6.39,
    7.58,
    7.97,
    5.47,
    3.87,
    0.84,
    3.69,
    3.69,
    0.31
  ]);
});