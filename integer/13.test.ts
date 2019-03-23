import { LR } from "./13";

test("should return correct results", () => {
  expect(LR(227)).toEqual(272);
  expect(LR(846)).toEqual(468);
  expect(LR(730)).toEqual(307);
  expect(LR(195)).toEqual(951);
});
