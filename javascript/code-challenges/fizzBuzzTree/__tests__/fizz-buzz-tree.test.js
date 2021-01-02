'use strict';

const { BinarySearchTree } = require('../tree');
const fizzBuzzTree = require('../fizz-buzz-tree');

// [Optional] Write tests to prove the following functionality:

//     Can return null on an empty tree input
//     Can successfully transform a tree to a FizzBuzz tree

describe('Node Constructor', () => {
  it('returns null on an empty tree input', () => {
    let tree = new BinarySearchTree();
    let fizzyTree = fizzBuzzTree(tree);
    expect(fizzyTree).toBeNull();
  });
  it('successfully transforms a tree to a FizzBuzz tree', () => {
    let tree = new BinarySearchTree();
    tree.add(9);
    tree.add(7);
    tree.add(10);
    tree.add(5);
    tree.add(8);
    tree.add(13);
    tree.add(15);
    tree.add(3);
    tree.add(6);
    let fizzyTree = fizzBuzzTree(tree);
    let preOrder = fizzyTree.preOrder();
    expect(preOrder).toEqual([ 'Fizz', '7', 'Buzz', 'Fizz', 'Fizz', '8', 'Buzz', '13', 'FizzBuzz' ]);
  });
});
