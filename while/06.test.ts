import { F } from "./06";
test("should return correct results", () => {
  expect(F(4)).toEqual(8);
  expect(F(10)).toEqual(3840);
  expect(F(6)).toEqual(48);
  expect(F(2)).toEqual(2);
  expect(F(14)).toEqual(645120);
});
