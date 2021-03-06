import { F } from "./139";
test("should return correct results", () => {
  expect(
    F(8, [
      { x: -5, y: -8 },
      { x: -3, y: -8 },
      { x: -5, y: 0 },
      { x: 8, y: 3 },
      { x: -5, y: 9 },
      { x: -9, y: 4 },
      { x: -5, y: -5 },
      { x: -8, y: -6 }
    ])
  ).toEqual([
    { x: -9, y: 4 },
    { x: -8, y: -6 },
    { x: -5, y: -8 },
    { x: -5, y: -5 },
    { x: -5, y: 0 },
    { x: -5, y: 9 },
    { x: -3, y: -8 },
    { x: 8, y: 3 }
  ]);

  expect(
    F(6, [
      { x: 0, y: -6 },
      { x: 9, y: -6 },
      { x: 9, y: 1 },
      { x: 0, y: 4 },
      { x: 0, y: 6 },
      { x: 0, y: 9 }
    ])
  ).toEqual([
    { x: 0, y: -6 },
    { x: 0, y: 4 },
    { x: 0, y: 6 },
    { x: 0, y: 9 },
    { x: 9, y: -6 },
    { x: 9, y: 1 }
  ]);

  expect(
    F(5, [
      { x: -7, y: -5 },
      { x: -7, y: 5 },
      { x: 9, y: -1 },
      { x: -2, y: -7 },
      { x: -7, y: 7 }
    ])
  ).toEqual([
    { x: -7, y: -5 },
    { x: -7, y: 5 },
    { x: -7, y: 7 },
    { x: -2, y: -7 },
    { x: 9, y: -1 }
  ]);
});
