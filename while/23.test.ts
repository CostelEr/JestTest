import { F } from "./23";
test("should return correct results", () => {
  expect(F(6699, 3289)).toEqual(11);
  expect(F(21, 14)).toEqual(7);
  expect(F(14, 21)).toEqual(7);
  expect(F(2052, 2432)).toEqual(76);
  expect(F(3, 276)).toEqual(3);
  expect(F(2880, 3195)).toEqual(45);
});
