import { F } from "./16";

test("should return correct results", () => {
  expect(F(5.88, 1.75, 1.12)).toEqual([-5.88, -1.75, -1.12]);
  expect(F(-5.99, -1.95, 1.09)).toEqual([-11.98, -3.9, 2.18]);
  expect(F(0.59, 7.37, 9.68)).toEqual([1.18, 14.74, 19.36]);
});
