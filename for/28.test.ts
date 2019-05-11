import { F } from "./28";
test("should return correct results", () => {
  expect(F(-0.15293275, 1)).toEqual(0.92353363);
  expect(F(-0.07945069, 2)).toEqual(0.9594856);
  expect(F(0.3140255, 9)).toEqual(1.14630958);
});
