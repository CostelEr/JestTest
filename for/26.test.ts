import { F } from "./26";
test("should return correct results", () => {
  expect(F(-0.1219923, 8)).toEqual(-0.12139248);
  expect(F(0.51228623, 2)).toEqual(0.47452848);
  expect(F(-0.41072168, 4)).toEqual(-0.38971936);
});
