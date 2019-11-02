import { F } from "./37";
test("should return correct results", () => {
  expect(F("17na3oh91eYHwh91euh8h91e1Au", "h91e", "X7N")).toEqual(
    "17na3oh91eYHwh91euh8X7N1Au"
  );
  expect(F("Dn1Co3SGZHULGZHULDhzsWyNU", "GZHUL", "h7C")).toEqual(
    "Dn1Co3SGZHULh7CDhzsWyNU"
  );
  expect(F("xttLU33Mnv8VkcXitQ0Re4A15", "Mnv", "IodX")).toEqual(
    "xttLU33IodX8VkcXitQ0Re4A15"
  );
});
