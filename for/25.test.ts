import { F } from "./25";
test("should return correct results", () => {
  expect(F(0.45520034, 7)).toEqual(0.37530781);
  expect(F(-0.60081067, 3)).toEqual(-0.85358964);
  expect(F(-0.88787257, 4)).toEqual(-1.67070117);
});
