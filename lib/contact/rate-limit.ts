const WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 5;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const attempts = new Map<string, RateLimitEntry>();

export function consumeContactRateLimit(key: string, now = Date.now()) {
  if (attempts.size > 5000) {
    for (const [entryKey, entry] of attempts) {
      if (entry.resetAt <= now) {
        attempts.delete(entryKey);
      }
    }
  }

  const current = attempts.get(key);

  if (!current || current.resetAt <= now) {
    attempts.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  if (current.count >= MAX_ATTEMPTS) {
    return false;
  }

  current.count += 1;
  return true;
}
