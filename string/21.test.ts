import { F } from "./21";
test("should return correct results", () => {
  expect(F(13828)).toEqual(["8", "2", "8", "3", "1"]);
  expect(F(799)).toEqual(["9", "9", "7"]);
  expect(F(13809)).toEqual(["9", "0", "8", "3", "1"]);
});
