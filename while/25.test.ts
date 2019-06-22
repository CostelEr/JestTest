import { F } from "./25";
test("should return correct results", () => {
  expect(F(2)).toEqual(3);
  expect(F(189)).toEqual(233);
  expect(F(59)).toEqual(89);
  expect(F(55)).toEqual(89);
  expect(F(89)).toEqual(144);
});
