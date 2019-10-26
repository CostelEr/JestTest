import { F } from "./29";
test("should return correct results", () => {
  expect(F("L", "t5L4LlD1dYLL", "BRw")).toEqual("t5BRwL4BRwLlD1dYBRwLBRwL");
  expect(F("v", "PvZvgb4vvNh1v", "hKp")).toEqual(
    "PhKpvZhKpvgb4hKpvhKpvNh1hKpv"
  );
  expect(F("k", "VgGsekkNk", "Lgs")).toEqual("VgGseLgskLgskNLgsk");
});
