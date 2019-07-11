import { F } from "./19";
test("should return correct results", () => {
  expect(F([29, 21, 95, 27, 30, 94, 57, 42, 77, 58])).toEqual(8);
  expect(F([33, 95, 82, 96, 86, 38, 50, 31, 35, 48])).toEqual(9);
  expect(F([84, 72, 56, 85, 45, 53, 59, 51, 66, 87])).toEqual(4);
});
