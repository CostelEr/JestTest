import { F } from "./09";
test("should return correct results", () => {
  expect(F(961)).toEqual(7);
  expect(F(4481)).toEqual(8);
  expect(F(80)).toEqual(4);
  expect(F(4)).toEqual(2);
  expect(F(9)).toEqual(3);
});
