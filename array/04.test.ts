import { F } from "./04";
test("should return correct results", () => {
  expect(F(6, 1.2, 1.9)).toEqual([1.2, 2.28, 4.33, 8.23, 15.64, 29.71]);
  expect(F(3, -2.9, -2)).toEqual([-2.9, 5.8, -11.6]);
  expect(F(7, -0.4, 2.4)).toEqual([
    -0.4,
    -0.96,
    -2.3,
    -5.53,
    -13.27,
    -31.85,
    -76.44
  ]);
});
