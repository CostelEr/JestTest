import { F } from "./5";
test("should return correct results", () => {
  expect(F(3, 10, 8.8)).toEqual(88);
  expect(F(2, 8.2, 8.1)).toEqual(0.1);
  expect(F(3, 1.7, 6.4)).toEqual(10.88);
  expect(F(4, 5.4, 9.5)).toEqual(0.57);
});
