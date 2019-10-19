import { F } from "./26";
test("should return correct results", () => {
  expect(F(5, "9u7yXxw6Ns")).toEqual("xw6Ns");
  expect(F(12, "MW3zfYeseFv")).toEqual(".MW3zfYeseFv");
  expect(F(11, "MW3zfYeseFv")).toEqual("MW3zfYeseFv");
  expect(F(3, "92Ul57TlazblWP")).toEqual("lWP");
  expect(F(14, "xTaII")).toEqual(".........xTaII");
});
