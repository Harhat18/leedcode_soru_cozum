// Example 1:

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let k = 0; // kaç adet eleman nums dizisi içinde kalacak
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i]; // nums dizisinde i. eleman val'a eşit değilse, k. elemana yerleştirilir
      k++; // k değeri arttırılır
    }
  }
  return k; // k değeri, nums dizisinde kalan eleman sayısıdır
};
