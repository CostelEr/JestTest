import { F } from "./90";
test("should return correct results", () => {
  expect(F(5, [4.49, 4.49, -6.87, 9.01, 5.79], 4)).toEqual([
    4.49,
    4.49,
    -6.87,
    5.79
  ]);
  expect(
    F(9, [-8.5, 1.63, 2.32, -3.21, -5.16, -8.91, -5.41, -9.98, -4.85], 4)
  ).toEqual([-8.5, 1.63, 2.32, -5.16, -8.91, -5.41, -9.98, -4.85]);
  expect(F(8, [3.46, -4.79, -7.89, 5.67, 0.89, 7.97, -4.99, -4.34], 6)).toEqual(
    [3.46, -4.79, -7.89, 5.67, 0.89, -4.99, -4.34]
  );
});
