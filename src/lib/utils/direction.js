/**
 * Utility function to get text direction based on locale
 * @param {string} locale - The locale code (e.g., 'ar', 'en')
 * @returns {string} - 'rtl' for Arabic, 'ltr' for other languages
 */
export function getDirection(locale) {
  return locale === "ar" ? "rtl" : "ltr";
}

/**
 * Check if the locale is RTL
 * @param {string} locale - The locale code
 * @returns {boolean} - true if RTL, false otherwise
 */
export function isRTL(locale) {
  return locale === "ar";
}

