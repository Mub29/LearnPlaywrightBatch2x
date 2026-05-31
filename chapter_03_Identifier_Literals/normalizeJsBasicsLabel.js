/**
 * Reusable label normalizer for JavaScript QA utilities.
 * Covers JS basics: trim, lowercase, regex replacement, string concatenation.
 *
 * Rules:
 * 1. Trim leading and trailing spaces.
 * 2. Convert text to lowercase.
 * 3. Replace non-alphanumeric groups with a single hyphen.
 * 4. Prefix the result with "js-basic-".
 *
 * @param {string} label - The raw label string to normalize.
 * @returns {string} - The normalized label.
 */
function normalizeJsBasicsLabel(label) {
  // Ensure input is a string; fallback to empty string for null/undefined
  if (label === null || label === undefined) {
    return "js-basic-";
  }

  let str = String(label);

  // Step 1: Trim leading and trailing spaces
  str = str.trim();

  // Step 2: Convert to lowercase
  str = str.toLowerCase();

  // Step 3: Replace non-alphanumeric groups with a single hyphen
  // [^a-z0-9]+ matches one or more characters that are NOT a-z or 0-9
  str = str.replace(/[^a-z0-9]+/g, "-");

  // Step 3b: Remove any leading or trailing hyphens created by replacement
  str = str.replace(/^-+|-+$/g, "");

  // Step 4: Prefix with "js-basic-"
  return "js-basic-" + str;
}

// =======================
// Example Usage / QA Test
// =======================
console.log(normalizeJsBasicsLabel(" Login Button "));
// Expected output: "js-basic-login-button"

console.log(normalizeJsBasicsLabel("  User Name   "));
// Expected output: "js-basic-user-name"

console.log(normalizeJsBasicsLabel("Email@Address!"));
// Expected output: "js-basic-email-address"

console.log(normalizeJsBasicsLabel("---Special___Chars---"));
// Expected output: "js-basic-special-chars"

console.log(normalizeJsBasicsLabel(null));
// Expected output: "js-basic-"

console.log(normalizeJsBasicsLabel(undefined));
// Expected output: "js-basic-"

console.log(normalizeJsBasicsLabel(""));
// Expected output: "js-basic-"
