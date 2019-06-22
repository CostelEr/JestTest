import { F } from "./22";
test("should return correct results", () => {
  expect(F(3)).toEqual(true);
  expect(F(199)).toEqual(true);
  expect(F(13)).toEqual(true);
  expect(F(89)).toEqual(true);
  expect(F(162)).toEqual(false);
  expect(F(117)).toEqual(false);
  expect(F(837)).toEqual(false);
  expect(F(100)).toEqual(false);
});
