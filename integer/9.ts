/**
   A three-digit integer is given. Using one operator of integer division 
   find first digit of the given integer (a hundreds digit).
 */
export function Sute(A: number) {
  return Math.trunc(A / 100);
}
