/**
  The arithmetic operations are numbered as: 
  1 — addition, 2 — subtraction, 3 — multiplication, 4 — division. 
  The order number N of an operation and two real numbers A and B are given 
  (N is an integer in the range 1 to 4, В is not equal to 0). 
  Perform the operation with the operands A and B and output the result.
 */
export function F(N, A, B: number) {
  let D = 0;
  switch (N) {
    case 1:
      D = parseFloat((A + B).toFixed(2));
      break;
    case 2:
      D = parseFloat((A - B).toFixed(2));
      break;
    case 3:
      D = parseFloat((A * B).toFixed(2));
      break;
    case 4:
      D = parseFloat((A / B).toFixed(2));
      break;
  }

  return D;
}
