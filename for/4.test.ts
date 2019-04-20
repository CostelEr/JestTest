import { F } from "./4";
test("should return correct results", () => {
  expect(F(15.1)).toEqual([15.1, 30.2, 45.3, 60.4]);
  expect(F(39)).toEqual([39, 78, 117, 156]);
});
