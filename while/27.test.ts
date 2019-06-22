import { F } from "./27";
test("should return correct results", () => {
  expect(F(55)).toEqual(10);
  expect(F(2)).toEqual(3);
  expect(F(89)).toEqual(11);
  expect(F(8)).toEqual(6);
  expect(F(5)).toEqual(5);
  expect(F(13)).toEqual(7);
  expect(F(3)).toEqual(4);
  expect(F(144)).toEqual(12);
});
