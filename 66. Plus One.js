// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
  let carry = 1; // taşıyıcıyı 1 olarak başlat
  for (let i = digits.length - 1; i >= 0; i--) {
    // en az anlamlı basamaktan başlayarak işleme başla
    let sum = digits[i] + carry; // taşıyıcıyı mevcut basamağa ekle
    if (sum < 10) {
      // eğer toplam 10'dan küçükse, işleme devam etmek gerek yok
      digits[i] = sum;
      return digits;
    } else {
      digits[i] = 0; // mevcut basamağı sıfırla
      carry = 1; // taşıyıcıyı 1 olarak ayarla
    }
  }
  // eğer taşıyıcı hala 1 ise, dizinin başına bir ekstra basamak 1 eklememiz gerekiyor
  if (carry === 1) {
    digits.unshift(1);
  }
  return digits;
}
