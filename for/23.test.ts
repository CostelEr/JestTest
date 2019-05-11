import { F } from "./23";
test("should return correct results", () => {
  expect(F(-1.43161651, 8)).toEqual(-0.99033011);
  expect(F(1.32366237, 9)).toEqual(0.96961751);
  expect(F(0.88093084, 2)).toEqual(0.77141245);
});
