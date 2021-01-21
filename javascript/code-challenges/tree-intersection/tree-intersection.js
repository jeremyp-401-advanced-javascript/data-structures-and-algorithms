let HashTable = require('./hash-table');

function treeIntersection(tree1, tree2) {
  let hashTbl = new HashTable(50);
  let outputArr = [];

  if (!tree1.root || !tree2.root) {
    return outputArr;
  }

  function _walkTree(currentNode, treeNum) {
    if (treeNum === 1) {
      hashTbl.set(`${currentNode.value}`);
    } else if (treeNum === 2) {
      if (hashTbl.contains(`${currentNode.value}`)) {
        addToOutput(currentNode.value, outputArr);
      }
    }
    if (currentNode.leftChild) { _walkTree(currentNode.leftChild, treeNum); }
    if (currentNode.rightChild) { _walkTree(currentNode.rightChild, treeNum); }
  }
  _walkTree(tree1.root, 1);
  _walkTree(tree2.root, 2);

  return outputArr;
}

function addToOutput(value, array) {
  let isDuplicated = false;
  // If there's nothing in the array then we can safely add this value
  if (!array.length) { array[0] = value; }
  // Search everything in the array for a duplicate
  for (let i = 0; i < array.length; i++) {
    isDuplicated = (array[i] === value) ? true : false;
  }
  // If it wasn't duplicated, put it at the end of the array
  if (!isDuplicated) { array[array.length] = value; }
  return array;
}

module.exports = { treeIntersection, addToOutput };
