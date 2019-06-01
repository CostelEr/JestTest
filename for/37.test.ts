import { F } from "./37";
test("should return correct results", () => {
  expect(F(9)).toEqual(405071317);
  expect(F(3)).toEqual(32);
  expect(F(4)).toEqual(288);
});
