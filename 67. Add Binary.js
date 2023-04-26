// Given two binary strings a and b, return their sum as a binary string.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = "";

  // Her iki sayının basamakları toplanana kadar veya taşma olana kadar döngü devam eder.
  while (i >= 0 || j >= 0 || carry > 0) {
    const sum =
      (i >= 0 ? parseInt(a[i--]) : 0) + (j >= 0 ? parseInt(b[j--]) : 0) + carry;
    carry = sum >> 1; // carry, sum'un 2'ye bölümünden kalan değeri alarak belirlenir.
    result = (sum & 1) + result; // sum'un 2'ye bölümünden kalan (yani 0 veya 1) sonucu, result'un başına eklenir.
  }

  return result;
}
