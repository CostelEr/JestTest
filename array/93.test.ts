import { F } from "./93";
test("should return correct results", () => {
  expect(F(8, [-75, 61, 3, 9, -99, -95, -25, -67])).toEqual([-75, 3, -99, -25]);
  expect(F(7, [84, -64, 59, 87, -47, 55, -88])).toEqual([84, 59, -47, -88]);
});
