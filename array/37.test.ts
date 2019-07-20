import { F } from "./37";
test("should return correct results", () => {
  expect(F(7, [5.69, -0.17, -8.18, -0.42, 9.1, -7.29, 6.93])).toEqual(2);
  expect(
    F(9, [9.05, -4.71, 2.08, 0.59, -8.9, -4.51, -8.28, 3.65, -0.6])
  ).toEqual(3);
  expect(F(7, [3.55, 8.6, -5.16, 4.55, -0.61, -3.99, -6.36])).toEqual(2);
});
