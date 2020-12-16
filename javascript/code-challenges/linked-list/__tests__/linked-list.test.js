'use strict';

// Require our linked list class
const LinkedList = require('../linked-list');

// Write tests to prove the following functionality:

//  X  Can successfully instantiate an empty linked list
//  X  Can properly insert into the linked list
//  X  The head property will properly point to the first node in the linked list
//  X  Can properly insert multiple nodes into the linked list
//  X  Will return true when finding a value within the linked list that exists
//  X  Will return false when searching for a value in the linked list that does not exist
//  X  Can properly return a collection of all the values that exist in the linked list

describe('Linked List', () => {
  it('inserts a new node at the list beginning', () => {
    const list = new LinkedList();
    list.insert('thing');
    list.insert('other thing');
    list.insert('more stuff');
    expect(list.head.value).toEqual('more stuff');
  });
  it('includes - returns true if value is in list', () => {
    const list = new LinkedList();
    list.insert('thing');
    list.insert('other thing');
    list.insert('more stuff');
    expect(list.includes('thing')).toBe(true);
  });
  it('includes - returns false if value is not in list', () => {
    const list = new LinkedList();
    list.insert('thing');
    list.insert('other thing');
    list.insert('more stuff');
    expect(list.includes('exists')).toBe(false);
  });
  it('turns the values into a string', () => {
    const list = new LinkedList();
    list.insert('thing');
    list.insert('other thing');
    list.insert('more stuff');
    expect(list.toString()).toEqual('{more stuff} -> {other thing} -> {thing} -> {NULL}');
  });
  // expected string output: {head, value:'thing', next: {{head, value:'other thing', next: {{head, value:'more stuff', next: {}}}}
});
