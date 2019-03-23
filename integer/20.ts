/**
    From the beginning of the day N seconds have passed (N is integer). 
    Find an amount of full hours passed from the beginning of the day.
 */
export function Hours(A: number) {
  return Math.trunc(A / 60 / 60);
}
