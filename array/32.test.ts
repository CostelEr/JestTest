import { F } from "./32";
test("should return correct results", () => {
  expect(
    F(10, [6.02, 5.82, 5.5, 5.24, 4.9, 4.59, 4.37, 4.62, 7.44, 7.57])
  ).toEqual(7);
  expect(F(8, [4.72, 4.34, 4.12, 4.55, 9.42, 2.09, 6.46, 6.55])).toEqual(3);
  expect(F(9, [5.69, 6.78, 1.07, 9.1, 7.09, 0.31, 8.64, 3.12, 8.1])).toEqual(1);
  expect(F(6, [5.68, 5.45, 5.29, 5.14, 4.86, 4.56])).toEqual(6);
});