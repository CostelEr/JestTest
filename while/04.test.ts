import { F } from "./04";
test("should return correct results", () => {
  expect(F(2178)).toEqual(false);
  expect(F(309)).toEqual(false);
  expect(F(243)).toEqual(true);
});
