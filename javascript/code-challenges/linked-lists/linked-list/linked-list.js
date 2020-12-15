'use strict';

let Node = require('./list-node');

class LinkedList {
  constructor(value){
    this.value = value;
    this.next = '';
  }
  // Insert - Takes a value argument and adds a new node with that value to the head
  insert(value) {
    // Make a new node with the value from the argument
    const node = new Node(value);
    // Make the new Node's next point at the current head
    node.next = this.head;
    // Reassign head to the new Node.
    this.head = node;
    return;
  }
  includes(testValue) {
    // Takes a value argument and returns a boolean if that value exists
    if(!this.head) { // If there's no head then we're done before we start.
      return false;
    }
    // Start at the head for our while loop.
    let currentNode = this.head;
    while(currentNode !== null) {
      if (currentNode.value === testValue) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;
  }
  append(value) { // Not needed for the code challenge
    const node = new Node(value);
    // Traverse the list until 'next === null' is found.

    if (!this.head) {
      this.head = node;
      return;
    }

    let currentNode = this.head;
    while(currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    // When it is found point next to the new node
    currentNode.next = node;
  }
  toString() {
    // Returns a string representing all values in the linked list
    // Like: "{a} -> {b} -> {c} -> null"
    let arrayString = '';

    let currentNode = this.head;

    if (!this.head) {
      return 'NULL';
    } else {
      arrayString = `{${this.head.value}} -> `;
    }

    // Traverse the linked list and concat the values.
    while(currentNode.next !== null) {
      currentNode = currentNode.next;
      arrayString += `{${currentNode.value}} -> `;
    }

    arrayString += `NULL`;

    return arrayString;
  }
}

module.exports = LinkedList;
