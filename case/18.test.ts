import { F } from "./18";
test("should return correct results", () => {
  expect(F(200)).toEqual("two hundred");
  expect(F(281)).toEqual("two hundred and eighty-one");
  expect(F(708)).toEqual("seven hundred and eight");
  expect(F(407)).toEqual("four hundred and seven");
  expect(F(400)).toEqual("four hundred");
  expect(F(213)).toEqual("two hundred and thirteen");
});
