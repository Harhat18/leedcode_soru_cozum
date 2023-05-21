//Given an integer numRows, return the first numRows of Pascal's triangle.
// Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]

var generate = function (numRows) {
  // İlk satırı oluştur
  const triangle = [[1]];

  // İkinci satırdan itibaren üçgeni oluştur
  for (let i = 1; i < numRows; i++) {
    const row = [];
    const prevRow = triangle[i - 1];

    // Satırın başındaki 1'i ekle
    row.push(1);

    // İki üst satırdaki sayıları topla ve yeni satıra ekle
    for (let j = 1; j < i; j++) {
      const sum = prevRow[j - 1] + prevRow[j];
      row.push(sum);
    }

    // Satırın sonundaki 1'i ekle
    row.push(1);

    // Yeni satırı üçgene ekle
    triangle.push(row);
  }

  return triangle;
};
