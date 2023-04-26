// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// Example 1:

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2
// Since 2 has only one digit, return it.
// Example 2:

// Input: num = 0
// Output: 0

function addDigits(num) {
  if (num < 10) {
    // Numara zaten tek haneliyse, onu döndür
    return num;
  } else {
    // Aksi takdirde, rakamlarını toplayın ve işlevi yinelemeli olarak çağırın.
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return addDigits(sum);
  }
}

// Test the function with examples
console.log(addDigits(38)); // Output: 2
console.log(addDigits(0)); // Output: 0
