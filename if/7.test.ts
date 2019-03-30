import { F } from "./7";

test("should return correct results", () => {
  expect(F(3.63, 1.88)).toEqual(2);
  expect(F(-1.55, 3.56)).toEqual(1);
  expect(F(-6.41, -1.28)).toEqual(1);
});
