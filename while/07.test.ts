import { F } from "./07";
test("should return correct results", () => {
  expect(F(3)).toEqual(2);
  expect(F(61)).toEqual(8);
  expect(F(4)).toEqual(3);
  expect(F(4930)).toEqual(71);
});
