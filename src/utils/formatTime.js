// src/utils/formatTime.js

/**
 * Convert milliseconds to a human-readable time string (MM:SS or HH:MM:SS)
 *
 * @param {number} ms - duration in milliseconds
 * @returns {string} formatted time (e.g. "2:45" or "01:12:05")
 */
export function formatDuration(ms) {
  if (!ms || ms < 0) return "0:00";

  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (hours > 0) {
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }
  return `${minutes}:${pad(seconds)}`;
}

/**
 * Format a timestamp (Date or number) into a short time string.
 * Example: 12:05 PM
 *
 * @param {Date|number} time
 * @returns {string}
 */
export function formatClockTime(time) {
  const date = time instanceof Date ? time : new Date(time);
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

/**
 * Get a relative time label (e.g., "5 minutes ago", "2 hours ago")
 *
 * @param {Date|number} time
 * @returns {string}
 */
export function timeAgo(time) {
  if (!time) return "";
  const now = Date.now();
  const past = time instanceof Date ? time.getTime() : time;
  const diffSec = Math.floor((now - past) / 1000);

  if (diffSec < 60) return `${diffSec}s ago`;
  if (diffSec < 3600) return `${Math.floor(diffSec / 60)}m ago`;
  if (diffSec < 86400) return `${Math.floor(diffSec / 3600)}h ago`;
  return `${Math.floor(diffSec / 86400)}d ago`;
}

/**
 * Helper: pad number with leading zero if < 10
 * @param {number} n
 * @returns {string}
 */
function pad(n) {
  return n.toString().padStart(2, "0");
}

