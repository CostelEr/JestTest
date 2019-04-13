import { F } from "./16";
test("should return correct results", () => {
  expect(F(21)).toEqual("twenty-one years");
  expect(F(43)).toEqual("forty-three years");
  expect(F(40)).toEqual("forty years");
  expect(F(55)).toEqual("fifty-five years");
});
