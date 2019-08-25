import { F } from "./74";
test("should return correct results", () => {
  expect(F(3, [-4.13, 3.22, -8.28])).toEqual([-4.13, 3.22, -8.28]);
  expect(F(6, [-9.85, 0.71, 9.65, 2.04, 2.53, 5.35])).toEqual([
    -9.85,
    0,
    9.65,
    2.04,
    2.53,
    5.35
  ]);
  expect(
    F(10, [7.84, 0.85, 1.15, 7.83, -5.35, -0.78, -2.87, -0.46, 8.53, 6.32])
  ).toEqual([7.84, 0.85, 1.15, 7.83, -5.35, 0, 0, 0, 8.53, 6.32]);
});