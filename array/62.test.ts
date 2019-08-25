import { F } from "./62";
test("should return correct results", () => {
  expect(F(8, [-4.23, -5.55, -5.84, -2.6, 6.91, -3.64, -5.56, -7.82])).toEqual([
    1,
    [6.91],
    7,
    [-4.23, -5.55, -5.84, -2.6, -3.64, -5.56, -7.82]
  ]);
  expect(F(5, [6.08, 3.31, -5.03, 9.22, 8.33])).toEqual([
    4,
    [6.08, 3.31, 9.22, 8.33],
    1,
    [-5.03]
  ]);
  expect(F(5, [9.21, 7.06, -3.84, -8.13, 2.69])).toEqual([
    3,
    [9.21, 7.06, 2.69],
    2,
    [-3.84, -8.13]
  ]);
});