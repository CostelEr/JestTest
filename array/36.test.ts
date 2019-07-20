import { F } from "./36";
test("should return correct results", () => {
  expect(F(8, [-4.45, 5.56, 0.61, -2.45, 1.25, -7.54, 3.55, -1.25])).toEqual(
    0.61
  );
  expect(F(6, [-5.93, -9.72, 9.7, -9.16, 1.15, 6.16])).toEqual(1.15);
  expect(F(7, [-4.35, -0.99, -1.55, 9.98, -9.94, 1.36, -7.57])).toEqual(0);
});
