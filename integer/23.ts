/**
    From the beginning of the day N seconds have passed (N is integer). 
    Find an amount of full minutes passed from the beginning of the last hour.
 */
export function Last(A: number) {
  return Math.trunc((A % 3600) / 60);
}
