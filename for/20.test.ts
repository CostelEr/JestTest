import { F } from "./20";
test("should return correct results", () => {
  expect(F(2)).toEqual(3);
  expect(F(6)).toEqual(873);
  expect(F(7)).toEqual(5913);
});
