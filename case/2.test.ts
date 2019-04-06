import { F } from "./2";
test("should return correct results", () => {
  expect(F(-7)).toEqual("error");
  expect(F(1)).toEqual("bad");
});
