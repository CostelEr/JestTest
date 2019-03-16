/**
  A weight M is given in kilograms. Find the amount of full tons of this weight (1 ton = 1000 kg). 
  Use the operator of integer division.
 */
export function Tone(M: number) {
  return Math.trunc(M / 1000);
}
