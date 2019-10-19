import { F } from "./20";
test("should return correct results", () => {
  expect(F(18982)).toEqual(["1", "8", "9", "8", "2"]);
  expect(F(27981)).toEqual(["2", "7", "9", "8", "1"]);
  expect(F(30201)).toEqual(["3", "0", "2", "0", "1"]);
});
