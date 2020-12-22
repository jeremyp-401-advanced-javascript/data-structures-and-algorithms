'use strict';

const Node = require('./node');

class Stack { // Create a stack class
  constructor(){
    this.top = null; // Set the initial top to null.
  }

  push(value) { // O(1)
    let node = new Node(value); // Create a new node with the value passed in.
    node.next = this.top; // Set the node's next to the current top.
    this.top = node; // Make it the new top.
  }

  pop() { // O(1)
    if (!this.top) { // If there is no top then the stack is empty.
      throw 'Can not remove from an empty stack!'; // Throw an error
    }
    let poppedVal = this.top; // Store the thing at the top of the stack in a variable.
    this.top = this.top.next; // Make it the new top.
    return poppedVal.value; // Return the popped value
  }

  peek() { // O(1)
    if (!this.top) { // If there is no top then the stack is empty.
      throw 'Stack is empty, nothing to show.'; // Throw an error
    }
    return this.top.value; // Return the top value
  }

  isEmpty() { // O(1)
    // Return boolean if stack is empty
    return (!this.top) ? true : false;
  }

}

class Queue { // Create a queue class
  constructor(){
    this.front = null; // Set the initial front to null.
    this.end = null; // Set the initial end to null.
  }

  enqueue(value) { // O(1) - Add to the end of the queue
    // Create a new node
    let node = new Node(value);
    if (!this.front) { // The queue is empty
      this.front = node; // So, set the queue front to the node...
      this.end = node; /// ...and set the queue end to the node.
      return;
    } else { // If the queue has something in it...
      this.end.next = node; // Set the current end's next to our new node.
      this.end = node; // Set the queue's new end to the node.
    }
  }

  dequeue() { // O(1) - Remove from the front of the queue
    if (!this.front) { // If there is no front then the queue is empty.
      throw 'Can not remove from an empty queue!'; // Throw an error.
    }
    if (this.front === this.end) {
      // The queue will be empty after this is removed.
      let dequeuedVal = this.front; // Store the thing at the top of the stack in a variable.
      this.front = null; // Set the front of the node to null.
      this.end = null; // Set the end of the node to null.
      return dequeuedVal.value; // Return the value that we dequeued.
    } else { // There is still going to be something left.
      let dequeuedVal = this.front; // Store the thing at the top of the stack in a variable.
      this.front = this.front.next; // So, the queue front becomes whatever was the queue's front.next
      return dequeuedVal.value; // Return the value that we dequeued.
    }

  }

  peek() { // O(1)
    if (!this.front) { // If there is no front then the queue is empty.
      throw 'Can not peek at an empty queue!'; // Throw an error.
    } else {
      return this.front.value; // Return the value of the front.
    }
  }

  isEmpty() { // O(1)
    // Return boolean if queue is empty
    return (!this.front) ? true : false;
  }
}

class PseudoQueue extends Stack {
  constructor() {
    super();
    this.stackTwo = new Stack();
    this.top = null;
    this.end = null;
  }

  enqueue(value) { // O(1)
    this.stackTwo.push(value); // Push the value to the temporary stack
    if (!this.top) { // If the original PseudoQueue has nothing in it...
      this.top = this.stackTwo.top; // So, set the pseudoqueue top to the stackTwo's top...
      this.end = this.stackTwo.top; // ...and set the pseudoqueue end to stackTwo's top.
      this.stackTwo.top = null; // Empty stackTwo
      return;
    } else { // ...but if it does...
      this.end.next = this.stackTwo.top; // Set the current end's next to our new node.
      this.end = this.stackTwo.top; // Set the new end to the node in the temporary queue.
      this.stackTwo.top = null; // Empty stackTwo
    }
    return;
  }

  dequeue() { // O(1)
    if (!this.top) { // If the PseudoStack is empty...
      throw 'Can not remove from an empty pseudostack!'; // Throw an error
    }
    if (this.top === this.end) { // The stack will be empty after this is removed.
      let dequeuedVal = this.top.value; // Temporarily store the value of the top of the stack
      this.top = null; // Set the top of the node to null.
      this.end = null; // Set the end of the node to null.
      return dequeuedVal;
    } else { // There is still going to be something left.
      let dequeuedVal = this.top.value; // Store the thing at the top of the stack in a variable.
      this.top = this.top.next; // So, the queue front becomes whatever was the queue's front.next
      return dequeuedVal; // Return the value that we dequeued.
    }
  }

  peek() { // O(1)
    if (!this.top) { // If there is no top then the queue is empty.
      throw 'Can not peek at an empty pseudoqueue!'; // Throw an error.
    } else { // There is a top, so...
      return this.top.value; // Return the value of the top.
    }
  }
}

module.exports = { Stack, Queue, PseudoQueue };
