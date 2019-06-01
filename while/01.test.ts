import { F } from "./01";
test("should return correct results", () => {
  expect(F(48.6, 15)).toEqual(3.6);
  expect(F(50.25, 9.17)).toEqual(4.4);
  expect(F(59.44, 16.09)).toEqual(11.17);
});
