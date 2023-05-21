// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: rowIndex = 3
// Output: [1,3,3,1]
// Example 2:

// Input: rowIndex = 0
// Output: [1]
// Example 3:

// Input: rowIndex = 1
// Output: [1,1]

var getRow = function (rowIndex) {
  const row = [];

  // Satırın başındaki 1'i ekle
  row.push(1);

  // Satırın diğer elemanlarını hesapla ve ekle
  for (let i = 1; i <= rowIndex; i++) {
    let prev = 1;

    // Satırın içerisindeki elemanları hesapla
    for (let j = 1; j < i; j++) {
      const curr = row[j];
      row[j] = prev + curr;
      prev = curr;
    }

    // Satırın sonundaki 1'i ekle
    row.push(1);
  }

  return row;
};
