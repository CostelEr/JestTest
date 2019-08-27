import { F } from "./76";
test("should return correct results", () => {
  expect(
    F(9, [-3.73, 4.76, -9.49, -6.43, -7, 1.53, -4.6, -2.32, -0.2])
  ).toEqual([-3.73, 0, -9.49, 0, -7, 0, -4.6, -2.32, 0]);
  expect(F(3, [0.31, 9.61, 0.06])).toEqual([0.31, 0, 0.06]);
  expect(F(7, [-1.46, -1.84, -7.52, 2.36, -3.68, 3.04, -3.25])).toEqual([
    0,
    -1.84,
    -7.52,
    0,
    -3.68,
    0,
    -3.25
  ]);
});
