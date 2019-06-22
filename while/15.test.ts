import { F } from "./15";
test("should return correct results", () => {
  expect(F(1.5)).toEqual([7, 1109.84]);
  expect(F(2.5)).toEqual([4, 1103.81]);
  expect(F(1.25)).toEqual([8, 1104.49]);
  expect(F(6)).toEqual([2, 1123.6]);
});
