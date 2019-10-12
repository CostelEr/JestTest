import { F } from "./1";
test("should return correct results", () => {
  expect(F("t")).toEqual(116);
  expect(F("+")).toEqual(43);
  expect(F("c")).toEqual(99);
});
