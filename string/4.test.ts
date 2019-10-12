import { F } from "./4";
test("should return correct results", () => {
  expect(F(6)).toEqual("ABCDEF");
  expect(F(1)).toEqual("A");
  expect(F(4)).toEqual("ABCD");
  expect(F(15)).toEqual("ABCDEFGHIJKLMNO");
});
