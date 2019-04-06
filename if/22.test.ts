import { F } from "./22";

test("should return correct results", () => {
  expect(F(7.77, -0.15)).toEqual(4);
  expect(F(-7.58, -8.16)).toEqual(3);
  expect(F(2.53, 2.13)).toEqual(1);
  expect(F(-5.43, 4.15)).toEqual(2);
});
