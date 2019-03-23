/**
    From the beginning of the day N seconds have passed (N is integer). 
    Find an amount of full minutes passed from the beginning of the day.
 */
export function Minute(A: number) {
  return Math.trunc(A / 60);
}
