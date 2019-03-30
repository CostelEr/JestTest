import { F } from "./15";

test("should return correct results", () => {
  expect(F(7.77, 4.1, -0.99)).toEqual(11.87);
  expect(F(-7.6, 1.84, -9.57)).toEqual(-5.76);
  expect(F(-7.88, 5.72, 2.48)).toEqual(8.2);
  expect(F(5, 1, 3)).toEqual(8);
});
