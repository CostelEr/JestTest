import { truncate } from "fs";

/**
    An integer greater than 999 is given. Using one operator of integer division 
    and one operator of taking the remainder find a hundreds digit of the given integer.
 */
export function Sute(A: number) {
  return Math.trunc(A / 100) - Math.trunc(A / 1000) * 10;
}
