//Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// İkili ağaç düğümünü temsil eden sınıf
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

// Ağacın simetrik olup olmadığını kontrol eden ana fonksiyon
function isSymmetric(root) {
  // Kök düğüm null ise, simetriktir
  if (root === null) {
    return true;
  }

  // Yardımcı fonksiyon ile sol ve sağ alt ağaçları kontrol et
  return isMirror(root.left, root.right);
}

// İki düğümün birbirinin aynısı olup olmadığını kontrol eden yardımcı fonksiyon
function isMirror(node1, node2) {
  // Eğer her iki düğüm de null ise, simetriktir
  if (node1 === null && node2 === null) {
    return true;
  }

  // Eğer sadece bir düğüm null ise, asimetri vardır
  if (node1 === null || node2 === null) {
    return false;
  }

  // Düğümlerin değerlerini karşılaştır
  if (node1.val !== node2.val) {
    return false;
  }

  // Sol düğümün sol alt ağacı ile sağ düğümün sağ alt ağacını
  // ve sol düğümün sağ alt ağacı ile sağ düğümün sol alt ağacını karşılaştır
  return isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left);
}
