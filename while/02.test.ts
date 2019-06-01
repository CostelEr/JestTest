import { F } from "./02";
test("should return correct results", () => {
  expect(F(30.96, 11.3)).toEqual(2);
  expect(F(8, 2)).toEqual(4);
});
