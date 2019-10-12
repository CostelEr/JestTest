import { F } from "./9";
test("should return correct results", () => {
  expect(F(20, "Y", "6")).toEqual("Y6Y6Y6Y6Y6Y6Y6Y6Y6Y6");
  expect(F(8, "i", "0")).toEqual("i0i0i0i0");
  expect(F(12, "C", "7")).toEqual("C7C7C7C7C7C7");
});
