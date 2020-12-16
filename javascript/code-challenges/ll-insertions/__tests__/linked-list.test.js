'use strict';

// Require our linked list class
const LinkedList = require('../linked-list');

describe('Linked List', () => {
// Write tests to prove the following functionality:

  // 06 - Linked List Insertions
  //  X  Can successfully add a node to the end of the linked list
  //  X  Can successfully add multiple nodes to the end of a linked list
  //  O  Can successfully insert a node before a node located i the middle of a linked list
  //  O  Can successfully insert a node before the first node of a linked list
  //  O  Can successfully insert after a node in the middle of the linked list
  //  O  Can successfully insert a node after the last node of the linked list

  it('inserts new node(s) at the end of the list', () => {
    const list = new LinkedList();
    list.append('thing');
    list.append('other thing');
    list.append('more stuff'); // This is the tail of the list
    // Traverse the list until 'next === null' is found.
    let currentNode = list.head;
    while(currentNode.next !== null) { // Look for .next = null
      currentNode = currentNode.next;
    }
    // We can assume that when currentNode passes the while currentNode.next = null
    expect(currentNode.value).toEqual('more stuff');
    expect(currentNode.next).toBeNull();
  });
  it('inserts new node before the `thing` at middle of the list', () => {
    const list = new LinkedList();
    list.append('other thing');
    // val:test me next: thing
    list.append('thing');
    list.append('i can do this all day'); // Well said.
    list.insertBefore('thing', 'test me');
    // Traverse the list until 'next === thing' is found.
    console.log('List', toString());
    let currentNode = list.head;
    while(currentNode.next !== 'thing') { // Look for .next = thing
      currentNode = currentNode.next;
    }
    // We can assume that currentNode.next === 'thing'
    //expect(currentNode.value).toEqual('test me');
    expect(currentNode.next).toEqual('thing');
  });
  // insertBefore(value, newVal)
  it('inserts a node before the `thing` at the head of a linked list', () => {
    const list = new LinkedList();
    list.append('thing'); // This is the current head
    list.append('i can do this all day');
    list.append('other thing');
    list.insertBefore('thing', 'test me');
    // Simply set the currentNode to the head.
    let headNode = list.head;
    // We can assume that currentNode.next = 'thing' (what we inserted before) and...
    // ...that the head node's properties should:
    expect(headNode.value).toEqual('test me');
    expect(headNode.next).toEqual('thing');
  });
  //insertAfter(value, newVal)
  it('inserts new node after the `thing` at middle of the list', () => {

  });
  //insertAfter(value, newVal)
  it('insert a node after the `thing` at the end of a linked list', () => {

  });


  // 05 - Linked List
  //  X  Can successfully instantiate an empty linked list
  //  X  Can properly insert into the linked list
  //  X  The head property will properly point to the first node in the linked list
  //  X  Can properly insert multiple nodes into the linked list
  //  X  Will return true when finding a value within the linked list that exists
  //  X  Will return false when searching for a value in the linked list that does not exist
  //  X  Can properly return a collection of all the values that exist in the linked list

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
    expect(list.toString()).toEqual('{more stuff} -> {other thing} -> {thing} -> NULL');
  });
  // expected string output: {head, value:'thing', next: {{head, value:'other thing', next: {{head, value:'more stuff', next: {}}}}
});
