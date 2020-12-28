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
}

class BinarySearchTree extends BinaryTree {
  add(value) { // Add a new node with value to the correct location in BinarySearchTree
    let currentNode = new Node(value);
    if (!this.root) { // Null tree error handling
      this.root = currentNode;
    } else {
      let addNode = (node, currentNode) => {
        if (currentNode.value < node.value) { // If currentNode is smaller...
          // ...go left...
          if (!node.leftChild) { // ...if leftChild is null
            node.leftChild = currentNode;
          } else { // ...or if it isn't null keep searching to the left.
            addNode(node.leftChild, currentNode);
          }
        } else { // If currentNode is larger...
          // ...go right...
          if (!node.rightChild) { // ...if rightChild is null
            node.rightChild = currentNode;
          } else { // ...or if it isn't null keep searching to the right.
            addNode(node.rightChild, currentNode);
          }
        }
      };
      addNode(this.root, currentNode);
    }
  }
  contains(value) { // Returns a boolean if value is in the tree (at least once)
    if (!this.root) { // Null tree error handling
      return false;
    } else {
      let containsNode = (node, value) => {
        if (value < node.value) { // If currentNode is smaller...
          // ...go left...
          if (!node.leftChild) { // ...if leftChild is null
            return false;
          } else { // ...or if it isn't null keep searching to the left.
            containsNode(node.leftChild, value);
          }
        } else if (value > node.value) { // If currentNode is larger...
          // ...go right...
          if (!node.rightChild) { // ...if rightChild is null
            return false;
          } else { // ...or if it isn't null keep searching to the right.
            containsNode(node.rightChild, value);
          }
        } else if (value === node.value) { // If currentNode is the same as node
          return true;
        }
        return false;
      };
      return containsNode(this.root, value);
    }
  }
}

module.exports = { Node, BinaryTree, BinarySearchTree };
