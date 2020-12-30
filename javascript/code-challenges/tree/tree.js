'use strict';

class Node {
  constructor(value, leftChild = null, rightChild = null) {
    this.value = value;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Depth First Search
  preOrder() { // Pre-order: root >> left >> right
    let outputArray = [];
    let currentNode = this.root;
    if (!currentNode) { // Null tree error handling
      return null;
    } else {
      let traverseTree = currentNode => {
        outputArray.push(currentNode.value);
        if (currentNode.leftChild) { traverseTree(currentNode.leftChild); }
        if (currentNode.rightChild) { traverseTree(currentNode.rightChild); }
      };
      traverseTree(currentNode);
      return outputArray;
    }
  }
  // Depth First Search
  inOrder() { // left >> root >> right
    let outputArray = [];
    let currentNode = this.root;
    if (!currentNode) { // Null tree error handling
      return null;
    } else {
      let traverseTree = currentNode => {
        if (currentNode.leftChild) { traverseTree(currentNode.leftChild); }
        outputArray.push(currentNode.value);
        if (currentNode.rightChild) { traverseTree(currentNode.rightChild); }
      };
      traverseTree(currentNode);
      return outputArray;
    }
  }
  // Depth First Search
  postOrder() { // left >> right >> root
    let outputArray = [];
    let currentNode = this.root;
    if (!currentNode) { // Null tree error handling
      return null;
    } else {
      let traverseTree = currentNode => {
        if (currentNode.leftChild) { traverseTree(currentNode.leftChild); }
        if (currentNode.rightChild) { traverseTree(currentNode.rightChild); }
        outputArray.push(currentNode.value);
      };
      traverseTree(currentNode);
      return outputArray;
    }
  }

  findMaximumValue() {
    let maxValue = null;
    let currentNode = this.root;
    if (!currentNode) { // Null tree error handling
      return null;
    } else {
      let traverseTree = currentNode => {
        if (currentNode.value > maxValue) { maxValue = currentNode.value; }
        if (currentNode.leftChild) { traverseTree(currentNode.leftChild); }
        if (currentNode.rightChild) { traverseTree(currentNode.rightChild); }
      };
      traverseTree(currentNode);
      return maxValue;
    }
  }

  oldFindMaximumValue(arr) {
    if(!arr) {
      return null;
    }
    let largestSoFar = null;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > largestSoFar) {
        largestSoFar = arr[i];
      }
    }

    return largestSoFar;
  }
}

class BinarySearchTree extends BinaryTree {
  add(value) { // Add a new node with value to the bottom of the BinarySearchTree
    let currentNode;
    if (Number.isInteger(value)) { currentNode = new Node(value); } else { return null; }
    if (!this.root) { // Null tree error handling
      this.root = currentNode;
    } else {
      let _addNode = (node, currentNode) => {
        if (currentNode.value < node.value) { // If currentNode is smaller...
          // ...go left...
          if (!node.leftChild) { // ...if leftChild is null
            node.leftChild = currentNode;
          } else { // ...or if it isn't null keep searching to the left.
            _addNode(node.leftChild, currentNode);
          }
        } else { // If currentNode is larger...
          // ...go right...
          if (!node.rightChild) { // ...if rightChild is null
            node.rightChild = currentNode;
          } else { // ...or if it isn't null keep searching to the right.
            _addNode(node.rightChild, currentNode);
          }
        }
      };
      _addNode(this.root, currentNode);
    }
  }
  contains(value) { // Returns a boolean if value is in the tree (at least once)
    if (!this.root) { // Null tree error handling
      return false;
    } else {
      let _containsNode = (node, value) => {
        if (value < node.value) { // If currentNode is smaller...
          // ...go left...
          if (!node.leftChild) { // ...if leftChild is null
            return false;
          } else { // ...or if it isn't null keep searching to the left.
            _containsNode(node.leftChild, value);
          }
        } else if (value > node.value) { // If currentNode is larger...
          // ...go right...
          if (!node.rightChild) { // ...if rightChild is null
            return false;
          } else { // ...or if it isn't null keep searching to the right.
            _containsNode(node.rightChild, value);
          }
        } else if (value === node.value) { // If currentNode is the same as node
          return true;
        }
        return false;
      };
      return _containsNode(this.root, value);
    }
  }
}

module.exports = { Node, BinaryTree, BinarySearchTree };
