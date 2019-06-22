/**
   A principal of 1000 euro is invested at a rate of P percent compounded annually. 
   A real number P is given, 0 < P < 25. Find, 
   how many years K it will take for an investment to exceed 1100 euro. 
   Output K (as an integer) and the compound amount S of the principal 
   at the end of K years (as a real number).
 */
export function F(P: number) {
  let k = 0;
  let sum = 1000;
  while (sum < 1100) {
    k = k + 1;
    sum = sum + (P * sum) / 100;
  }
  sum = parseFloat(sum.toFixed(2));
  return [k, sum];
}
