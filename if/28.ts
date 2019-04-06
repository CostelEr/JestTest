/**
  Given a number of year (as a positive integer), find the amount of days in the year. 
  Note that the length of year is 365 days for an ordinary year and 366 days for a leap year. 
  A leap year is every year whose number is divisible by 4, as 1980, except centenary years 
  that are not divisible by 400 (for example, 1300 and 1900 
  are ordinary years, 1200 and 2000 are leap years).
 */
export function F(x: number) {
  let D = 365;
  if (x % 400 == 0 || (x % 4 == 0 && x % 100 != 0)) {
    D = 366;
  }
  return D;
}
