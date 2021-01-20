let HashTable = require('./hash-table');

function treeIntersection(tree1, tree2) {
  let hashTbl = new HashTable(50);
  let outputArr = [];

  if (!tree1.root || !tree2.root) {
    return outputArr;
  }

  function walkTree(node, treeNum) {
    if (treeNum === 1) {
      hashTbl.add(node.value);
    } else if (treeNum === 2) {
      hashTbl.contains(node.value);
      addToOutput(node.value, outputArr);
    }
    if (node.leftChild) { walkTree(node.leftChild); }
    if (node.rightChild) { walkTree(node.rightChild); }
  }
  walkTree(tree1.root, 1);
  walkTree(tree2.root, 2);

  return outputArr;
}

function addToOutput(value, array) {
  for (let arrIter = 0; arrIter < array.length - 1; arrIter++) {
    if (array[arrIter] === value) {
      return;
    } else {
      array[array.length] = value;
    }
  }
}

module.exports = { treeIntersection, addToOutput };
