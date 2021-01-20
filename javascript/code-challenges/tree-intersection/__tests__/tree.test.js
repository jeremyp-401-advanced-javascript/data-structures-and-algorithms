'use strict';

const { Node, BinarySearchTree } = require('../tree');

// Write tests to prove the following functionality:

//     Can successfully instantiate a new node
//     Can successfully instantiate an empty Binary Search Tree
//     Can successfully instantiate a tree with a single root node
//     Can successfully add a left child and right child to a single root node
//     Can successfully returns null on BinaryTree methods if called on an empty tree
//     Can successfully return a collection from a preorder traversal
//     Can successfully return a collection from an inorder traversal
//     Can successfully return a collection from a postorder traversal
//     Can successfully return true when running contains() on good value
//     Can successfully return false when running contains() on bad value
//     Can successfully find a maximum value using preOrder traversal (OLD)
//     Can successfully find a maximum value in the tree
//     Can successfully return a collection from breadth first traversal

describe('Node Constructor', () => {
  it('successfully instantiates a new node', () => {
    let node = new Node(5);
    expect(node.leftChild).toBeNull();
    expect(node.rightChild).toBeNull();
    expect(node.value).toBe(5);
  });
});

describe('BinarySearchTree Constructor', () => {
  it('successfully instantiate an empty Binary Search Tree', () => {
    let tree = new BinarySearchTree();
    expect(tree.root).toBeNull();
  });
  it('successfully instantiate a tree with a single root node', () => {
    let tree = new BinarySearchTree();
    tree.add(9);
    expect(tree.root.value).toBe(9);
  });
  it('successfully add a left child and right child to a single root node', () => {
    let tree = new BinarySearchTree();
    tree.add(5);
    tree.add(3);
    tree.add(7);
    expect(tree.root.value).toBe(5);
    expect(tree.root.leftChild.value).toBe(3);
    expect(tree.root.rightChild.value).toBe(7);
  });
});

describe('BinaryTree Methods', () => {
  it('successfully returns null on BinaryTree methods if called on an empty tree', () => {
    let tree = new BinarySearchTree();
    let preOrder = tree.preOrder();
    let inOrder = tree.inOrder();
    let postOrder = tree.postOrder();
    let preOrderArray = tree.preOrder();
    let findMax = tree.oldFindMaximumValue(preOrderArray);
    expect(preOrder).toBeNull();
    expect(inOrder).toBeNull();
    expect(postOrder).toBeNull();
    expect(findMax).toBeNull();
  });
  it('successfully return a collection from a preOrder traversal', () => {
    let tree = new BinarySearchTree();
    tree.add(4);
    tree.add(2);
    tree.add(6);
    tree.add(1);
    tree.add(3);
    tree.add(5);
    let preOrder = tree.preOrder();
    expect(preOrder).toEqual([4, 2, 1, 3, 6, 5]);
  });
  it('successfully return a collection from an inOrder traversal', () => {
    let tree = new BinarySearchTree();
    tree.add(4);
    tree.add(2);
    tree.add(6);
    tree.add(1);
    tree.add(3);
    tree.add(5);
    let inOrder = tree.inOrder();
    expect(inOrder).toEqual([1, 2, 3, 4, 5, 6]);
  });
  it('successfully return a collection from a postOrder traversal', () => {
    let tree = new BinarySearchTree();
    tree.add(4);
    tree.add(2);
    tree.add(6);
    tree.add(1);
    tree.add(3);
    tree.add(5);
    let postOrder = tree.postOrder();
    expect(postOrder).toEqual([1, 3, 2, 5, 6, 4]);
  });
  it('successfully returns true when running contains() on good value', () => {
    let tree = new BinarySearchTree();
    tree.add(4);
    tree.add(2);
    tree.add(6);
    tree.add(1);
    tree.add(3);
    tree.add(5);
    let contains = tree.contains(4);
    expect(contains).toBe(true);
  });
  it('successfully returns false when running contains() on a bad value', () => {
    let tree = new BinarySearchTree();
    tree.add(4);
    tree.add(2);
    tree.add(6);
    tree.add(1);
    tree.add(3);
    tree.add(5);
    let contains = tree.contains(9);
    expect(contains).toBe(false);
  });
  it('successfully find a maximum value using preOrder traversal (OLD)', () => {
    let tree = new BinarySearchTree();
    tree.add(4);
    tree.add(2);
    tree.add(6);
    tree.add(1);
    tree.add(3);
    tree.add(5);
    let preOrderArray = tree.preOrder();
    let findMax = tree.oldFindMaximumValue(preOrderArray);
    expect(findMax).toEqual(6);
  });
  it('successfully find a maximum value in the tree', () => {
    let tree = new BinarySearchTree();
    tree.add(4);
    tree.add(2);
    tree.add(6);
    tree.add(1);
    tree.add(3);
    tree.add(5);
    let findMax = tree.findMaximumValue();
    expect(findMax).toEqual(6);
  });

  it('successfully return a collection from breadth first traversal', () => {
    let tree = new BinarySearchTree();
    tree.add(4);
    tree.add(2);
    tree.add(7);
    tree.add(1);
    tree.add(3);
    tree.add(5);
    tree.add(9);
    tree.add(8);
    tree.add(6);
    tree.add(0);
    tree.add(10);
    tree.add(11);
    let levelOrder = tree.breadthFirstNoPush();
    expect(levelOrder).toEqual([4, 2, 7, 1, 3, 5, 9, 0, 6, 8, 10, 11]);
  });
});
