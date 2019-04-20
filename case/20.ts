/**
    Given two integers D (day) and M (month) that represent a correct date, 
    output the zodiacal name corresponding to this date: 
    "Aquarius" 20.1–18.2, "Pisces" 19.2–20.3, "Aries" 21.3–19.4, 
    "Taurus" 20.4–20.5, "Gemini" 21.5–21.6, "Cancer" 22.6–22.7, 
    "Leo" 23.7–22.8, "Virgo" 23.8–22.9, "Libra" 23.9–22.10, 
    "Scorpio" 23.10–22.11, "Sagittarius" 23.11–21.12, "Capricorn" 22.12–19.1.
 */
export function F(D, M: number) {
  let Zodiac = "";
  switch (M) {
    case 1:
      if (D <= 19) {
        Zodiac = "Capricorn";
      } else {
        Zodiac = "Aquarius";
      }
      break;
    case 2:
      if (D <= 18) {
        Zodiac = "Aquarius";
      } else {
        Zodiac = "Pisces";
      }
      break;
    case 3:
      if (D <= 20) {
        Zodiac = "Pisces";
      } else {
        Zodiac = "Aries";
      }
      break;
    case 4:
      if (D < 19) {
        Zodiac = "Aries";
      } else {
        Zodiac = "Taurus";
      }
      break;

    case 5:
      if (D <= 20) {
        Zodiac = "Taurus";
      } else {
        Zodiac = "Gemini";
      }
      break;
    case 6:
      if (D <= 21) {
        Zodiac = "Gemini";
      } else {
        Zodiac = "Cancer";
      }
      break;
    case 7:
      if (D <= 22) {
        Zodiac = "Cancer";
      } else {
        Zodiac = "Leo";
      }
      break;
    case 8:
      if (D <= 22) {
        Zodiac = "Leo";
      } else {
        Zodiac = "Virgo";
      }
      break;
    case 9:
      if (D <= 22) {
        Zodiac = "Virgo";
      } else {
        Zodiac = "Libra";
      }
      break;
    case 10:
      if (D <= 22) {
        Zodiac = "Libra";
      } else {
        Zodiac = "Scorpio";
      }
      break;
    case 11:
      if (D <= 22) {
        Zodiac = "Scorpio";
      } else {
        Zodiac = "Sagittarius";
      }
      break;
    case 12:
      if (D <= 21) {
        Zodiac = "Sagittarius";
      } else {
        Zodiac = "Capricorn";
      }
      break;
  }
  return Zodiac;
}
