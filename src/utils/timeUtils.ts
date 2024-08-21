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
export function calculateTimePassed(createdAt: number): string {
  const timeElapsed = Date.now() - createdAt;

  if (timeElapsed < 60 * 1000) {
    return `${Math.floor(timeElapsed / 1000)}s ago`;
  } else if (timeElapsed < 60 * 60 * 1000) {
    return `${Math.floor(timeElapsed / (60 * 1000))}m ago`;
  } else if (timeElapsed < 24 * 60 * 60 * 1000) {
    return `${Math.floor(timeElapsed / (60 * 60 * 1000))}h ago`;
  } else if (timeElapsed < 365 * 24 * 60 * 1000) {
    return `${Math.floor(timeElapsed / (24 * 60 * 60 * 1000))}d ago`;
  } else return `${Math.floor(timeElapsed / (365 * 24 * 60 * 60 * 1000))}y ago`;
}
