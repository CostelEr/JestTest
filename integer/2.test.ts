import { Tone } from "./2";

test("should return correct results", () => {
  expect(Tone(8570)).toEqual(8);
  expect(Tone(4012)).toEqual(4);
});
