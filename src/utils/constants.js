// src/utils/constants.js

/**
 * Difficulty levels for reading texts
 * Used in Firestore (/texts) and app filters
 */
export const DIFFICULTY_LEVELS = {
  EASY: "easy",
  MEDIUM: "medium",
  HARD: "hard",
};

/**
 * Predefined reading text categories
 * These should match what's stored in Firestore (/categories)
 */
export const TEXT_CATEGORIES = [
  { id: "training", label: "Training" },
  { id: "story", label: "Stories" },
  { id: "science", label: "Science" },
  { id: "news", label: "News" },
  { id: "tech", label: "Technology" },
  { id: "custom", label: "Custom" },
];

/**
 * Supported languages (for filtering texts or UI localization)
 */
export const SUPPORTED_LANGUAGES = [
  { code: "en", name: "English" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "de", name: "German" },
  { code: "tr", name: "Turkish" },
];

/**
 * App themes — used in user settings (/users/{userId}.settings)
 */
export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
  SYSTEM: "system",
};

/**
 * Default user stats (used when creating new users)
 */
export const DEFAULT_USER_STATS = {
  totalSessions: 0,
  avgSpeedWPM: 0,
  avgComprehension: 0,
};

/**
 * Default app configuration values
 * (You can also mirror these in Firestore under /appConfig)
 */
export const APP_CONFIG = {
  MIN_APP_VERSION: "1.0.0",
  FEATURE_FLAGS: {
    enableLeaderboard: true,
    enableDarkMode: true,
    enableComprehensionQuiz: false,
  },
};

/**
 * Time constants
 */
export const TIME = {
  ONE_MINUTE: 60 * 1000,
  ONE_HOUR: 60 * 60 * 1000,
  ONE_DAY: 24 * 60 * 60 * 1000,
};

