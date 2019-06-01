import { F } from "./08";
test("should return correct results", () => {
  expect(F(8)).toEqual(2);
  expect(F(820)).toEqual(28);
  expect(F(3)).toEqual(1);
  expect(F(1011)).toEqual(31);
});
