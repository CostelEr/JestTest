import { F } from "./12";
test("should return correct results", () => {
  expect(F(1)).toEqual(1.1);
  expect(F(8)).toEqual(17.643226);
  expect(F(5)).toEqual(3.6036);
  expect(F(7)).toEqual(9.801792);
});
