/**
 * Formats a number into a human-readable string with suffixes for large numbers.
 *
 * This function converts large numbers into a more compact and readable format by
 * adding suffixes such as 'K' for thousands, 'M' for millions, and 'B' for billions.
 * It rounds the number to one decimal place to ensure a clean and concise representation.
 *
 * For example:
 * - 1,500 becomes '1.5K'
 * - 2,000,000 becomes '2.0M'
 * - 3,000,000,000 becomes '3.0B'
 *
 * @param value - The number to format.
 * @returns A string representing the formatted number.
 */
export function formatNumber(
  value: number,
  t: (key: string) => string
): string {
  if (value >= 1_000_000_000) {
    return value / 1_000_000_000 + ' ' + t('abbreviations.billion');
  } else if (value >= 1_000_000) {
    return value / 1_000_000 + ' ' + t('abbreviations.million');
  } else if (value >= 1_000) {
    return value / 1_000 + ' ' + t('abbreviations.thousand');
  } else {
    return value.toString();
  }
}
