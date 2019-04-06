import { F } from "./24";

test("should return correct results", () => {
  expect(F(-1.23)).toEqual(7.23);
  expect(F(8.76)).toEqual(1.24);
});
