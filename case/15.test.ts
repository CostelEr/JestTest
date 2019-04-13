import { F } from "./15";
test("should return correct results", () => {
  expect(F(11, 4)).toEqual("Jack of hearts");
  expect(F(9, 1)).toEqual("Nine of spades");
  expect(F(10, 3)).toEqual("Ten of diamonds");
  expect(F(14, 2)).toEqual("Ace of clubs");
});
