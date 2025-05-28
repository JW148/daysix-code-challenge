/**
 * Calculates the difference between the current date and the date the test was taken, returning a formatted string
 *
 * @param testDate - The date the test was taken
 * @returns Returns a formatted string of the difference between the current date and the date the test was taken
 */

export function dateDiff(testDate: Date) {
  const now = new Date();
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const utc2 = Date.UTC(
    testDate.getFullYear(),
    testDate.getMonth(),
    testDate.getDate()
  );

  //difference in days between the test date and todays date
  const diff = Math.floor((utc1 - utc2) / _MS_PER_DAY);

  if (diff < 1) return "Today";
  if (diff < 2) return "Yesterday";
  if (diff < 31) return diff + " days ago";
  if (diff > 30) return Math.floor(diff / 30) + " month ago";

  return diff + "days ago";
}
