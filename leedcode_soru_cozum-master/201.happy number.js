function isHappy(n) {
  let set = new Set(); // Daha önce gördüğümüz sayıları takip etmek için bir Set kullanıyoruz
  while (n !== 1) {
    let str = n.toString();
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += Math.pow(Number(str[i]), 2);
    }
    if (set.has(sum)) {
      // Aynı toplam daha önce görülmüşse, sonsuz bir döngü vardır
      return false;
    }
    set.add(sum);
    n = sum;
  }
  return true; // n 1 olduğundan, mutlu bir sayıdır
}
