import { F } from "./59";
test("should return correct results", () => {
  expect(F("e:\\b6b\\fv.m9\\6fd.2\\dxhp.atm")).toEqual("atm");
  expect(F("e:\\s.9iq")).toEqual("9iq");
  expect(F("i:\\npu\\ni5yzi\\epga")).toEqual("");

  expect(F("b:\\wpc37\\995d2\\07\\j\\k7fkhdwr")).toEqual("");
  expect(F("b:\\r\\5uph3.s\\1\\6q6hdloj.4r")).toEqual("4r");
  expect(F("h:\\8e8\\kysjc\\he.yit")).toEqual("yit");
});
