import { F } from "./40";
test("should return correct results", () => {
  expect(F(-2.38, 2, [-5.1, -1.04])).toEqual(-1.04);
  expect(
    F(3.67, 9, [6.05, 9.17, -8, 0.55, -5.68, -4.48, -4.68, 8.5, -3.74])
  ).toEqual(6.05);
  expect(
    F(-8.05, 8, [4.64, -1.01, -7.35, -6.58, -0.41, 6.59, 8.79, -5.69])
  ).toEqual(-7.35);
});
