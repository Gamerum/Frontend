/**
 * Calculates the time passed since a given timestamp and returns a human-readable string.
 *
 * This function determines the amount of time that has elapsed since the given
 * timestamp and formats it into a string representation such as "X minutes ago",
 * "Y hours ago", or "Z days ago". It uses the current date and time to compute the
 * difference between the given timestamp and the present time.
 *
 * @param timestamp - The timestamp (in milliseconds) from which to calculate the time passed.
 * @returns A string representing the time elapsed since the given timestamp.
 */
export function calculateTimePassed(
  createdAt: number,
  t: (key: string) => string
): string {
  const timeElapsed = Date.now() - createdAt;

  const seconds = t('time.seconds');
  const minutes = t('time.minutes');
  const hours = t('time.hours');
  const days = t('time.days');
  const years = t('time.years');
  const ago = t('time.ago');

  if (timeElapsed < 60 * 1000) {
    return `${Math.floor(timeElapsed / 1000)} ${seconds} ${ago}`;
  } else if (timeElapsed < 60 * 60 * 1000) {
    return `${Math.floor(timeElapsed / (60 * 1000))} ${minutes} ${ago}`;
  } else if (timeElapsed < 24 * 60 * 60 * 1000) {
    return `${Math.floor(timeElapsed / (60 * 60 * 1000))} ${hours} ${ago}`;
  } else if (timeElapsed < 365 * 24 * 60 * 60 * 1000) {
    return `${Math.floor(timeElapsed / (24 * 60 * 60 * 1000))} ${days} ${ago}`;
  } else {
    return `${Math.floor(timeElapsed / (365 * 24 * 60 * 60 * 1000))} ${years} ${ago}`;
  }
}
