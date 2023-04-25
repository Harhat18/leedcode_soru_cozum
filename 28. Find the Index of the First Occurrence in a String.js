// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
  const needleLen = needle.length;
  const haystackLen = haystack.length;

  if (needleLen === 0) {
    return 0;
  }

  for (let i = 0; i <= haystackLen - needleLen; i++) {
    if (haystack.substring(i, i + needleLen) === needle) {
      return i;
    }
  }

  return -1;
}
