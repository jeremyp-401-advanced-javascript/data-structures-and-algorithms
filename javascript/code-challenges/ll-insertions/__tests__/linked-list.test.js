'use strict';

// Require our linked list class
const LinkedList = require('../linked-list');

describe('Linked List', () => {
// Write tests to prove the following functionality:

  // 06 - Linked List Insertions
  //  X  Can successfully add a node to the end of the linked list
  //  X  Can successfully add multiple nodes to the end of a linked list
  //  X  Can successfully insert a node before a node located i the middle of a linked list
  //  X  Can successfully insert a node before the first node of a linked list
  //  X  Can successfully insert after a node in the middle of the linked list
  //  X  Can successfully insert a node after the last node of the linked list

  it('inserts new node(s) at the END of the list', () => {
    const list = new LinkedList();
    list.append('thing');
    list.append('other thing');
    list.append('more stuff'); // This is the tail of the list
    //console.log('list test 1:', list.toString());
    // Traverse the list until 'next === null' is found.
    let currentNode = list.head;
    while(currentNode.next !== null) { // Look for .next = null
      currentNode = currentNode.next; // Move one node deeper
    }
    // We can assume that when currentNode passes the while currentNode.next = null
    // list test 1: {thing} -> {other thing} -> {more stuff} -> NULL
    expect(currentNode.value).toEqual('more stuff');
    expect(currentNode.next).toBeNull();
  });
  it('inserts new node BEFORE the `thing` at middle of the list', () => {
    const list = new LinkedList();
    list.append('other thing');
    list.append('thing');
    list.append('thing too');
    list.insertBefore('thing', 'test me');
    //console.log('list test 2:', list.toString());
    // Traverse the list until 'next === thing' is found.
    let currentNode = list.head;
    while(currentNode.next.value !== 'thing') { // Look for .next = thing
      currentNode = currentNode.next; // Move one node deeper
    }
    // We can assume that currentNode.next === 'thing'
    // list test 2: {other thing} -> {test me} -> {thing} -> {thing too} -> NULL
    expect(currentNode.value).toEqual('test me');
    expect(currentNode.next.value).toEqual('thing');
  });
  it('inserts a node BEFORE the `thing` at the head of a linked list', () => {
    const list = new LinkedList();
    list.append('thing');
    list.append('other thing');
    list.append('thing too');
    list.insertBefore('thing', 'test me');
    //console.log('list test 3:', list.toString());
    // Traverse the list until 'next === thing' is found.
    let currentNode = list.head;
    while(currentNode.next.value !== 'thing') { // Look for .next = thing
      currentNode = currentNode.next; // Move one node deeper
    }
    // We can assume that currentNode.next === 'thing'
    // list test 3: {test me} -> {thing} -> {other thing} -> {thing too} -> NULL
    expect(list.head.value).toEqual('test me');
    expect(list.head.next.value).toEqual('thing');
  });
  it('inserts new node AFTER the `thing` at middle of the list', () => {
    const list = new LinkedList();
    list.append('other thing');
    list.append('thing');
    list.append('thing too');
    list.insertAfter('thing', 'test me');
    //console.log('list test 4:', list.toString());
    // Traverse the list until 'next === thing' is found.
    let currentNode = list.head;
    while(currentNode.next.value !== 'test me') { // Look for .next = 'test me'
      currentNode = currentNode.next; // Move one node deeper
    }
    // We can assume that currentNode.next === 'thing'
    // list test 4: {other thing} -> {thing} -> {test me} -> {thing too} -> NULL
    expect(currentNode.value).toEqual('thing');
    expect(currentNode.next.value).toEqual('test me');
  });
  it('inserts a node AFTER the `thing` at the tail of a linked list', () => {
    const list = new LinkedList();
    list.append('other thing');
    list.append('thing too');
    list.append('thing');
    list.insertAfter('thing', 'test me');
    //console.log('list test 5:', list.toString());
    // Traverse the list until 'next === thing' is found.
    let currentNode = list.head;
    while(currentNode.value !== 'thing') { // Look for .next = thing
      currentNode = currentNode.next;
    }
    // We can assume that currentNode.next === 'thing'
    // list test 5: {other thing} -> {thing too} -> {thing} -> {test me} -> NULL
    expect(currentNode.value).toEqual('thing');
    expect(currentNode.next.value).toEqual('test me');
    expect(currentNode.next.next).toBeNull();
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
    //console.log('Test 05 - 1:', list.toString());
    // Test 05 - 1: {more stuff} -> {other thing} -> {thing} -> NULL
    expect(list.head.value).toEqual('more stuff');
  });
  it('includes - returns true if value is in list', () => {
    const list = new LinkedList();
    list.insert('thing');
    list.insert('other thing');
    list.insert('more stuff');
    //console.log('Test 05 - 2:', list.toString());
    // Test 05 - 1: {more stuff} -> {other thing} -> {thing} -> NULL
    expect(list.includes('thing')).toBe(true);
  });
  it('includes - returns false if value is not in list', () => {
    const list = new LinkedList();
    list.insert('thing');
    list.insert('other thing');
    list.insert('more stuff');
    //console.log('Test 05 - 3:', list.toString());
    // Test 05 - 1: {more stuff} -> {other thing} -> {thing} -> NULL
    expect(list.includes('exists')).toBe(false);
  });
  it('turns the values into a string', () => {
    const list = new LinkedList();
    list.insert('thing');
    list.insert('other thing');
    list.insert('more stuff');
    //console.log('Test 05 - 4:', list.toString());
    // Test 05 - 1: {more stuff} -> {other thing} -> {thing} -> NULL
    expect(list.toString()).toEqual('{more stuff} -> {other thing} -> {thing} -> NULL');
  });
});
