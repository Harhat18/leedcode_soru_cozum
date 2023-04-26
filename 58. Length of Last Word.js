// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal
// substring
//  consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
  let i = s.length - 1;
  let len = 0;
  // Skip all the spaces at the end of the string
  while (i >= 0 && s[i] === " ") {
    i--;
  }
  // Count the length of the last word
  while (i >= 0 && s[i] !== " ") {
    len++;
    i--;
  }
  return len;
}
