import { F } from "./29";
test("should return correct results", () => {
  expect(F(0.00008)).toEqual([11, 1.750038, 1.749987]);
  expect(F(0.051189)).toEqual([5, 1.777778, 1.740741]);
  expect(F(0.000007)).toEqual([13, 1.750004, 1.749999]);
  expect(F(0.099187)).toEqual([5, 1.777778, 1.740741]);
});
