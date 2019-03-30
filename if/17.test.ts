import { F } from "./17";

test("should return correct results", () => {
  expect(F(7.84, 1.43, 3.46)).toEqual([-7.84, -1.43, -3.46]);
  expect(F(-3.33, -9.27, -0.14)).toEqual([3.33, 9.27, 0.14]);
});
