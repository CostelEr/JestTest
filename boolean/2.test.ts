import { Odd } from "./2";

test("should return correct results", () => {
  expect(Odd(19)).toEqual(true);
  expect(Odd(-52)).toEqual(false);
  expect(Odd(69)).toEqual(true);
});
