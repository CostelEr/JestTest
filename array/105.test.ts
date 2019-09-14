import { F } from "./105";
test("should return correct results", () => {
  expect(F(4, [-0.39, 2.51, -7.56, 2.12], 2, 6)).toEqual([
    -0.39,
    2.51,
    0,
    0,
    0,
    0,
    0,
    0,
    -7.56,
    2.12
  ]);
  expect(F(4, [-0.39, 2.51, -7.56, 2.12], 4, 3)).toEqual([
    -0.39,
    2.51,
    -7.56,
    2.12,
    0,
    0,
    0
  ]);
  expect(F(5, [6.85, -7.06, 9.57, 8.63, 9.98], 2, 1)).toEqual([
    6.85,
    -7.06,
    0,
    9.57,
    8.63,
    9.98
  ]);
  expect(F(2, [8.9, 3.51], 1, 3)).toEqual([8.9, 0, 0, 0, 3.51]);
});