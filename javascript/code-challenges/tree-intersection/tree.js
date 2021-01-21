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

  breadthFirstNoPush() {
  // Adapted from code at:
  // https://learnersbucket.com/examples/algorithms/tree-traversal-in-javascript/

    let array = [];
    let iter = 0;

    // Find the number of levels in the tree
    const findTreeLevel = (node) => {
      if (node === null) {
        return 0; // If the tree is empty then return 0 so our FOR loop in LevelTraversal doesn't run.
      }
      // The following, when running recursively, goes to the bottom of the left side first
      const leftLevels = findTreeLevel(node.leftChild); // Get left height/depth starting at the bottom
      const rightLevels = findTreeLevel(node.rightChild); // Get right height/depth starting at the bottom
      //console.log(`node value: ${node.value} // leftLevels: ${leftLevels + 1} - rightLevels: ${rightLevels + 1}`);

      if (leftLevels > rightLevels) { // return the largest (plus 1 to account for starting at 0)
        return leftLevels + 1; // Left is deeper, return its depth
      } else {
        return rightLevels + 1; // Right is deeper, return its depth
      }
      // At the end of all of the recursive runs return the ultimate winner (left or right)
    };

    // Move through the levels found by findTreeLevel
    const levelTraversal = (node) => {
      const levels = findTreeLevel(node);
      //console.log('Final height is :', levels);
      //Print node at each level
      for (let i = 1; i <= levels; i++) { // i = 1 to account for an empty tree (levels = 0)
        //console.log('i is now:', i);
        _addNodeToArray(node, i); // Run this passing in the node and the current level to add to the array
      }
    };

    // This is so complicated it might need a /* */ comment block.
    /*
      On the first run of the FOR loop this function is passed the root and level = 1
        "Level Check" PASSES and adds the root value to the array at iter++ (then iter+1)
        "Over Level Check" BYPASSES and completes the loop (i++)

      On the second run of the FOR loop this function is passed the root and level = 2
        "Level Check" BYPASSES (level !== 1)
        "Over Level Check" PASSES and:
          Calls the function again with (node.leftChild, level - 1)
            "Level Check" PASSES and adds the node's value to the array at iter++ (then iter+1)
            "Over Level Check" BYPASSES and completes the function's run
          Calls the function again with (node.rightChild, level - 1)
            "Level Check" PASSES and adds the node's value to the array at iter++ (then iter+1)
            "Over Level Check" BYPASSES and completes the function's run
        This run of the for loop completes (i++)

      On the third run there will be two recursive failures of the Level Check which will
      each call the function twice, meaning the function will be called
      inside the FOR loop a total of 5 function calls on this run.

      Wow.
    */
    const _addNodeToArray = (node, level) => {
      // If null just return the array as empty
      if (!node) {
        return array; // Array will be []
      }
      // "Level Check"
      if (level === 1){ // Since we've found the correct level return this side's 
        array[iter] = node.value; // Push this node's value to the array
        //console.log(`pushed node value: ${node.value} - at iter: ${iter} to array:`, array);
        iter++; // Move forward one position in the array to store the next value
      }
      // "Over Level Check"
      if (level > 1) { // There are still levels remaining... We've gotta go deeper.
        _addNodeToArray(node.leftChild, level - 1); // Pass this node's left side back in with level - 1
        _addNodeToArray(node.rightChild, level - 1); // Once that's done do the right side with level -1
      }
    };
    levelTraversal(this.root);
    //console.log('Final array:', array);
    return array;
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
