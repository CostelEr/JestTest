import { F } from "./64";
test("should return correct results", () => {
  expect(
    F(3, [17, -1, -69], 5, [93, 82, 24, -29, -66], 9, [
      99,
      58,
      50,
      8,
      7,
      0,
      -31,
      -50,
      -92
    ])
  ).toEqual([
    99,
    93,
    82,
    58,
    50,
    24,
    17,
    8,
    7,
    0,
    -1,
    -29,
    -31,
    -50,
    -66,
    -69,
    -92
  ]);
  expect(
    F(4, [89, 22, 9, -31], 6, [83, 80, 49, 24, -54, -62], 3, [99, 35, 7])
  ).toEqual([99, 89, 83, 80, 49, 35, 24, 22, 9, 7, -31, -54, -62]);
  expect(
    F(5, [-3, -9, -12, -44, -78], 8, [85, 71, 67, 57, 52, 40, 10, -87], 4, [
      52,
      -16,
      -37,
      -40
    ])
  ).toEqual([
    85,
    71,
    67,
    57,
    52,
    52,
    40,
    10,
    -3,
    -9,
    -12,
    -16,
    -37,
    -40,
    -44,
    -78,
    -87
  ]);
});
