import { F } from "./7";
test("should return correct results", () => {
  expect(F(3, 12)).toEqual(75);
  expect(F(5, 13)).toEqual(81);
  expect(F(1, 5)).toEqual(15);
});
