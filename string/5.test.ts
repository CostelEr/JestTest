import { F } from "./5";
test("should return correct results", () => {
  expect(F(17)).toEqual("zyxwvutsrqponmlkj");
  expect(F(10)).toEqual("zyxwvutsrq");
  expect(F(13)).toEqual("zyxwvutsrqpon");
});
