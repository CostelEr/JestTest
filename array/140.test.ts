import { F } from "./140";
test("should return correct results", () => {
  expect(
    F(4, [{ x: 2, y: -8 }, { x: -2, y: 8 }, { x: 4, y: -4 }, { x: 1, y: -8 }])
  ).toEqual([
    { x: -2, y: 8 },
    { x: 4, y: -4 },
    { x: 2, y: -8 },
    { x: 1, y: -8 }
  ]);

  expect(
    F(4, [{ x: -2, y: 9 }, { x: -7, y: 9 }, { x: -1, y: -4 }, { x: -3, y: 9 }])
  ).toEqual([
    { x: -2, y: 9 },
    { x: -3, y: 9 },
    { x: -7, y: 9 },
    { x: -1, y: -4 }
  ]);

  expect(
    F(5, [
      { x: -4, y: -7 },
      { x: -6, y: 1 },
      { x: -4, y: 2 },
      { x: 7, y: 0 },
      { x: -2, y: 0 }
    ])
  ).toEqual([
    { x: 7, y: 0 },
    { x: -2, y: 0 },
    { x: -4, y: 2 },
    { x: -6, y: 1 },
    { x: -4, y: -7 }
  ]);
});
