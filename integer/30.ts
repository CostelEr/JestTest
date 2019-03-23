/**
  Given a year (as a positive integer), find the respective number of the century. 
  Note that, for example, 20th century began with the year 1901.
 */
export function Century(A: number) {
  return Math.trunc((A - 1) / 100) + 1;
}
