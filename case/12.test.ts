import { F } from "./12";
test("should return correct results", () => {
  expect(F(3, 35.97)).toEqual([5.7, 11.4, 103.0]);
  expect(F(3, 14.99)).toEqual([2.4, 4.8, 17.9]);
  expect(F(4, 34.52)).toEqual([3.3, 6.6, 20.8]);
  expect(F(2, 3.96)).toEqual([2.0, 12.4, 12.3]);
  expect(F(1, 1.76)).toEqual([3.5, 11.1, 9.7]);
});
