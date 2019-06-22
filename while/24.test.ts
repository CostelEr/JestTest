import { F } from "./24";
test("should return correct results", () => {
  expect(F(8)).toEqual(true);
  expect(F(144)).toEqual(true);
  expect(F(34)).toEqual(true);
  expect(F(3)).toEqual(true);
  expect(F(233)).toEqual(true);
  expect(F(6)).toEqual(false);
  expect(F(136)).toEqual(false);
  expect(F(12)).toEqual(false);
});
