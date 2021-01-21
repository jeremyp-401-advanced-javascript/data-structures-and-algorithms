'use strict';

const { BinarySearchTree } = require('../tree');
const { treeIntersection } = require('../tree-intersection');

// Write tests to prove the following functionality:

// - [ ] Successfully outputs the values that intersect in two binary trees
// - [ ] Successfully outputs an empty array if tree 1 is empty
// - [ ] Successfully outputs an empty array if tree 2 is empty

describe('', () => {
  it('Successfully outputs the values that intersect in two binary trees', () => {
    let tree1 = new BinarySearchTree();
    tree1.add(5);
    tree1.add(3);
    tree1.add(7);
    let tree2 = new BinarySearchTree();
    tree2.add(5);
    tree2.add(3);
    tree2.add(7);
    tree2.add(7);
    tree2.add(9);
    // Do the treeIntersection
    let testedOutput = treeIntersection(tree1, tree2);
    let expectedOutput = [5,3,7];
    expect(testedOutput).toEqual(expectedOutput);
  });
  it('Successfully outputs an empty array if tree 1 is empty', () => {
    let tree1 = new BinarySearchTree();
    let tree2 = new BinarySearchTree();
    tree2.add(5);
    tree2.add(3);
    tree2.add(7);
    tree2.add(7);
    tree2.add(9);
    // Do the treeIntersection
    let testedOutput = treeIntersection(tree1, tree2);
    let expectedOutput = [];
    expect(testedOutput).toEqual(expectedOutput);
  });
  it('Successfully outputs an empty array if tree 2 is empty', () => {
    let tree1 = new BinarySearchTree();
    tree1.add(5);
    tree1.add(3);
    tree1.add(7);
    let tree2 = new BinarySearchTree();
    // Do the treeIntersection
    let testedOutput = treeIntersection(tree1, tree2);
    let expectedOutput = [];
    expect(testedOutput).toEqual(expectedOutput);
  });
});
