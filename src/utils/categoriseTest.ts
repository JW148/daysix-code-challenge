import type { Gender, Category } from "../types/types";

/**
 * Determines a category based on the user's test result and gender. Returns uncategorised if the test result does not fall in one of the pre-defined test categories.
 *
 * @param gender - The gender of the user ('male' or 'female').
 * @returns A category string: 'average', 'aboveAverage', 'belowAverage', or 'uncategorised'.
 */
export function categoriseTest(result: number, gender: Gender): Category {
  if (gender === "male") {
    if (result < 10) return "belowAverage";
    if (result >= 10 && result <= 14) return "average";
    if (result > 14) return "aboveAverage";
  }
  if (gender === "female") {
    if (result < 8) return "belowAverage";
    if (result >= 12 && result <= 19) return "average";
    if (result > 20) return "aboveAverage";
  }
  return "uncategorised";
}
