import { F } from "./18";
test("should return correct results", () => {
  expect(F("ShгТиОНdE8SбНКиgTшWOg")).toEqual("sHГтИонDe8sБнкИGtШwoG");
  expect(F("uзцЫmcVi8I")).toEqual("UЗЦыMCvI8i");
  expect(F("офпцgисжм3t4pDcEH")).toEqual("ОФПЦGИСЖМ3T4PdCeh");
});
