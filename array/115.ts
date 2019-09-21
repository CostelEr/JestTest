/**
 Array 115. 
   An array A of N real numbers is given. Without changing the array A, 
   output the order numbers that correspond to array elements in ascending 
   order of their values. For solving the task create an additional index array I, 
   which contains order numbers in the range 1 to N, and use the bubble sorting 
   (see Array112) as follows: compare elements of array A (with the order numbers 
    I1 and I2, I2 and I3, and so on) and exchange, if necessary, values 
    of corresponding elements of index array I. After repeating N − 1 times of 
    such array pass the required sequence of order numbers will be contained 
    in the array I.
 */
export function F(N: number, A: number[]) {
  let i = 0;
  let j = 0;
  let k1 = 0;
  let k2 = 0;
  let B = [];
  let I = [];

  for (i = 0; i <= N - 1; i++) {
    I[i] = i;
  }

  for (j = 0; j <= N - 2; j++) {
    for (i = 0; i <= N - 2; i++) {
      k1 = I[i + 1];
      k2 = I[i];
      if (A[k1] < A[k2]) {
        [I[i], I[i + 1]] = [I[i + 1], I[i]];
      }
    }
    console.log(I.map(x => x + 1));
  }
  for (i = 0; i <= N - 1; i++) {
    I[i] = I[i] + 1;
  }
  return I;
}
