import { F } from "./21";
test("should return correct results", () => {
  expect(F(138)).toEqual(true);
  expect(F(64)).toEqual(false);
  expect(F(486)).toEqual(false);
  expect(F(1)).toEqual(true);
  expect(F(4826)).toEqual(false);
  expect(F(4821)).toEqual(true);
  expect(F(9)).toEqual(true);
});
