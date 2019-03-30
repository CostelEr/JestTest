import { F } from "./9";

test("should return correct results", () => {
  expect(F(4.27, -8.09)).toEqual([-8.09, 4.27]);
  expect(F(1.66, -5.64)).toEqual([-5.64, 1.66]);
  expect(F(7.99, 8.21)).toEqual([7.99, 8.21]);
});
