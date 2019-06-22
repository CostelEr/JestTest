/**
   The skier began trainings having run 10 km. 
   Each next day he increased the run distance by P percent 
   from the distance of the last day. A real number P is given, 0 < P < 50). 
   Find, how many days K it will take for a total run to exceed 200 km. 
   Output K (as an integer) and the total run S (as a real number).
 */
export function F(P: number) {
  let k = 1;
  let sum = 10;
  let S = 10;
  while (S < 200) {
    k = k + 1;
    sum = (P / 100) * sum + sum;
    S = S + sum;
  }
  S = parseFloat(S.toFixed(3));
  return [k, S];
}
