import { F } from "./2";
test("should return correct results", () => {
  expect(F(68)).toEqual("D");
  expect(F(95)).toEqual("_");
  expect(F(88)).toEqual("X");
});
