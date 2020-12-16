'use strict';

let Node = require('./list-node');

class LinkedList {
  constructor(){
    this.head = null;
  }
  append(value) {
  // Add a new node with 'value' to the end of the LinkedList

    // Make a new node with the value from the argument
    const node = new Node(value);

    // Cover edge case where list is empty.
    if (!this.head) { // If the list has no head (it was just created) then...
      this.head = node; // Set the list's head to this node
      return; // That's all. This node is now the list's head
    }

    // Traverse the list until 'next === null' is found.
    let currentNode = this.head;
    while(currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    // When it is found point next to the new node
    currentNode.next = node;
  }

  insertBefore(value, newVal) {
  // Add a new node with `newVal` immediately before the first node containing `value`

    // Make a new node with the newVal from the argument
    const node = new Node(newVal);
    // Set our new node's next to the value
    node.next = value;

    // Cover edge case where list is empty.
    if (!this.head) { // If the list has no head (== null -> it was just created) then...
      const error = new Error('Can not search an empty linked list.'); // There is nothing to search for
      return error; // Return the error to the user
    }

    // Traverse the list 'next === value' is found.
    let currentNode = this.head; // Start at the head

    while(currentNode.value !== value) { // Loop list until value is found
      // What if the value doesn't match AND currentNode.next is null?
      if (currentNode.next === null) { // What if we've ended the list?
        const error = new Error('Value not found in list.');
        return error; // Value not found, send error
      } else { // Value not found, but there is a next in currentNode...
        currentNode = currentNode.next; // Set currentNode to the next node and restart loop
      }
    }

    // When it is found, point next to the new node
    if (currentNode.head) { // Oh, this is the head of the list?
      return this.append(newVal); // Well, we have something for that [specifically append(newVal)]...
    } else { // But if it isn't, that's fine...
      currentNode.next = node; // ...just set our node to be currentNode.next
    }
    console.log(this.toString());
  }
  insertAfter(value, newVal) {
  // Add a new node with `newVal` immediately after the first node containing `value`

    // Make a new node with the newVal from the argument
    const node = new Node(newVal);

    // Cover edge case where list is empty.
    if (!this.head) { // If the list has no head (it was just created) then...
      const error = new Error('Can not search an empty linked list.'); // There is nothing to search for
      return error; // Return the error to the user
    }

    // Traverse the list 'next === value' is found.
    let currentNode = this.head; // Start at the head

    while(currentNode.value !== value) { // Loop list until value is found
      // What if the value doesn't match AND currentNode.next is null?
      if (currentNode.next === null) { // What if we've ended the list?
        const error = new Error('Value not found in list.');
        return error; // Value not found, send error
      } else { // Value not found, but there is a next in currentNode...
        currentNode = currentNode.next; // Set currentNode to the next node and restart loop
      }
    }

    // When it's found, point next to the new node
    if (currentNode.next === null) { // Oh, this is the tail of the list?
      return this.insert(newVal); // Well, we have something for that [specifically insert(newVal)]...
    } else { // But if it isn't, that's okay too...
      node.next = currentNode.next; // ...just set our new node's next to the value...
      currentNode.next = node; // ...and finally set our node to be currentNode.next
    }

  }
  insert(value) {
  // Take a 'value' and adds a new node with that value to the head of the list

    // Make a new node with the value from the argument
    const node = new Node(value);
    // Make the new Node's next point at the current head
    node.next = this.head;
    // Reassign head to the new Node.
    this.head = node;
    return;
  }
  includes(testValue) {
  // Take a 'testValue' and returns a boolean showing if that value exists in the list

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
  toString() {
  // Returns a string representing all values in the linked list
  // Like: "{a} -> {b} -> {c} -> null"

    let arrayString = '';
    let currentNode = this.head;

    if (!this.head) {
      return `NULL`;
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
