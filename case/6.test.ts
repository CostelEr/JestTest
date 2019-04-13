import { F } from "./6";
test("should return correct results", () => {
  expect(F(2, 4.2)).toEqual(4200);
  expect(F(1, 1.83)).toEqual(0.183);
  expect(F(4, 1.84)).toEqual(0.00184);
  expect(F(1, 8.83)).toEqual(0.883);
  expect(F(5, 8.71)).toEqual(0.0871);
  expect(F(3, 9.56)).toEqual(9.56);
});
