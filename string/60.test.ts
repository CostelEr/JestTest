import { F } from "./60";
test("should return correct results", () => {
  expect(F("b:\\wpc37\\995d2\\07\\j\\k7fkhdwr")).toEqual("wpc37");
  expect(F("b:\\r\\5uph3.s\\1\\6q6hdloj.4r")).toEqual("r");
  expect(F("a:\\8j\\kbfu.")).toEqual("8j");
  expect(F("d:\\zdzeprz.")).toEqual("\\");
});
