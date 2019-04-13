import { F } from "./13";
test("should return correct results", () => {
  expect(F(4, 94.92)).toEqual([13.8, 19.5, 9.7]);
  expect(F(3, 9.68)).toEqual([13.7, 19.4, 93.7]);
  expect(F(2, 8.87)).toEqual([6.3, 4.4, 19.7]);
  expect(F(1, 9.94)).toEqual([14.1, 7.0, 49.4]);
});
