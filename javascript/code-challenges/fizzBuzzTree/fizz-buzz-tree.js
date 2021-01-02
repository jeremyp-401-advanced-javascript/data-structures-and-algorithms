const fizzBuzzTree = (inputTree) => {
  let tree = inputTree;
  let currentNode = tree.root;

  if (!currentNode) {
    return null;
  } else {
    let _traverseTree = (currentNode) => {
      // Use modulo to check if division by a number has a remainder
      if (!(currentNode.value % 15)) { currentNode.value = 'FizzBuzz'; }
      else if (!(currentNode.value % 5)) { currentNode.value = 'Buzz'; }
      else if (!(currentNode.value % 3)) { currentNode.value = 'Fizz'; }
      else { currentNode.value = `${currentNode.value}`; }
      // Then recursively move through the child nodes (if they exist)
      if (currentNode.leftChild) { _traverseTree(currentNode.leftChild); }
      if (currentNode.rightChild) { _traverseTree(currentNode.rightChild); }
    };
    _traverseTree(currentNode);
    return tree;
  }
};

module.exports = fizzBuzzTree;
