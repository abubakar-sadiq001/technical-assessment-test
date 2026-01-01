import { differenceInDays } from "date-fns";

export function updateDailyStreak(user, updateLastClaim) {
  const today = new Date();
  // Set time to midnight for consistent day comparison, handles timezones for the current user
  today.setHours(0, 0, 0, 0);

  const lastActive = user?.last_claimed_at
    ? new Date(user?.last_claimed_at)
    : null;

  if (!lastActive) {
    // First interaction ever
    // user.streakCount = 20;
    updateLastClaim(user?.id);
  } else {
    // Calculate the difference in days
    // (currentDate - lastDate) / (1000 * 60 * 60 * 24) milliseconds in a day
    // const dayDifference = Math.floor((today - lastActive) / (1000 * 60 * 60 * 24));

    // using date-fns lib
    const dayDifference = differenceInDays(today, lastActive);

    if (dayDifference === 0) {
      // User already active today, do nothing to prevent double counting
      return null;
    } else if (dayDifference === 1) {
      // User was active yesterday, increment the streak
      updateLastClaim(user?.id);
    } else {
      // User missed one or more days, reset the streak
      // user.streakCount = 1;
    }
  }

  // Update the last active date to today
  // user.last_claimed_at = today.toISOString();

  // In a real application, you would save this 'user' object to your database/localStorage here.
  return user;
}
