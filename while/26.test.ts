import { F } from "./26";
test("should return correct results", () => {
  expect(F(55)).toEqual([34, 89]);
  expect(F(377)).toEqual([233, 610]);
  expect(F(233)).toEqual([144, 377]);
});
