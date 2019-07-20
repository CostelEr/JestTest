import { F } from "./38";
test("should return correct results", () => {
  expect(F(6, [7.17, 3.84, 5.74, 7.84, 4.89, 5.43])).toEqual(2);
  expect(F(7, [-0.83, -7.49, -3.68, 0.69, -7.12, 8.62, 3.13])).toEqual(3);
  expect(F(8, [3.24, -4.34, -4.98, 4.33, 8.67, -0.51, 6.68, -8.69])).toEqual(3);
});
