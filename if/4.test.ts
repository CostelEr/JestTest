import { F } from "./4";

test("should return correct results", () => {
  expect(F(-10, 5, 19)).toEqual(2);
  expect(F(0, 16, 0)).toEqual(1);
  expect(F(18, 13, 0)).toEqual(2);
});
