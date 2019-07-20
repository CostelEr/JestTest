import { F } from "./28";
test("should return correct results", () => {
  expect(F(3, [2.67, 0.82, -5.38])).toEqual(0.82);
  expect(F(7, [1.91, -0.66, -9.01, 5.51, -4.94, 7.3, -2.7])).toEqual(-0.66);
  expect(F(6, [3.67, 7.5, -8.62, 5.02, 3.65, 7.33])).toEqual(5.02);
});
