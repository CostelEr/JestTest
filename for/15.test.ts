import { F } from "./15";
test("should return correct results", () => {
  expect(F(-5, 6)).toEqual(15625);
  expect(F(6, 8)).toEqual(1679616);
  expect(F(4, 1)).toEqual(4);
});
