/**
    An integer greater than 999 is given. 
    Using one operator of integer division 
    and one operator of taking the remainder find a thousands digit of the given integer.
 */
export function Mii(A: number) {
  return Math.trunc(A / 1000) - Math.trunc(A / 10000) * 10;
}
