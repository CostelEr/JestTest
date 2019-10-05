import { F } from "./137";
test("should return correct results", () => {
  expect(
    F(8, [
      { x: 3.83, y: 2.61 },
      { x: 3.61, y: -4.63 },
      { x: 8.87, y: 0.64 },
      { x: -2.42, y: 2.67 },
      { x: 4.54, y: -6.8 },
      { x: 3.72, y: -7.25 },
      { x: 3.74, y: -6.37 },
      { x: 8.34, y: 9.67 }
    ])
  ).toEqual([
    42.04,
    { x: -2.42, y: 2.67 },
    { x: 3.72, y: -7.25 },
    { x: 8.34, y: 9.67 }
  ]);

  expect(
    F(6, [
      { x: 6.55, y: -4.83 },
      { x: -7.41, y: 3.08 },
      { x: -4.13, y: 3.01 },
      { x: 7.87, y: 8.44 },
      { x: -9.12, y: -2.85 },
      { x: 5.32, y: 6.27 }
    ])
  ).toEqual([
    49.53,
    { x: 6.55, y: -4.83 },
    { x: 7.87, y: 8.44 },
    { x: -9.12, y: -2.85 }
  ]);

  expect(
    F(4, [
      { x: 5.84, y: -4.81 },
      { x: 3.72, y: 0.24 },
      { x: 0.51, y: -1.92 },
      { x: -8.93, y: 6.59 }
    ])
  ).toEqual([
    38.29,
    { x: 5.84, y: -4.81 },
    { x: 3.72, y: 0.24 },
    { x: -8.93, y: 6.59 }
  ]);
});