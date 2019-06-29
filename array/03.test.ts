import { F } from "./03";
test("should return correct results", () => {
  expect(F(6, -4.42, 1.85)).toEqual([-4.42, -2.57, -0.72, 1.13, 2.98, 4.83]);
  expect(F(2, -0.74, 1.88)).toEqual([-0.74, 1.14]);
  expect(F(5, -1.96, 3.09)).toEqual([-1.96, 1.13, 4.22, 7.31, 10.4]);
});
