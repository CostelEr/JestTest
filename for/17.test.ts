import { F } from "./17";
test("should return correct results", () => {
  expect(F(-4, 2)).toEqual(13);
  expect(F(0, 3)).toEqual(1);
  expect(F(8, 4)).toEqual(4681);
});
