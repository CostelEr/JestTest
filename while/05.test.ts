import { F } from "./05";
test("should return correct results", () => {
  expect(F(128)).toEqual(7);
  expect(F(2048)).toEqual(11);
  expect(F(16)).toEqual(4);
  expect(F(1)).toEqual(0);
});
