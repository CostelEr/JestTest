import { F } from "./31";
test("should return correct results", () => {
  expect(F(1)).toEqual([2.5]);
  expect(F(6)).toEqual([2.5, 2.4, 2.416667, 2.413793, 2.414286, 2.414201]);
});
