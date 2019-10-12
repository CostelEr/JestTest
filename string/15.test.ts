import { F } from "./15";
test("should return correct results", () => {
  expect(F("ЖЕМ1бvnp7фtYШpGE")).toEqual(7);
  expect(F("BжieWbГTDEш")).toEqual(5);
  expect(F("ZAAcqГ9fЦХлиыайОlZKCqZМПщваv")).toEqual(14);
});
