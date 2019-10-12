import { F } from "./8";
test("should return correct results", () => {
  expect(F(10, "w")).toEqual("wwwwwwwwww");
  expect(F(11, "t")).toEqual("ttttttttttt");
  expect(F(10, "G")).toEqual("GGGGGGGGGG");
});
