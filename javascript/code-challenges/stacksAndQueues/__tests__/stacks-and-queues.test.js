'use strict';

let { Queue, Stack, PseudoQueue } = require('../stacks-and-queues');

// Write tests to prove the following functionality:

//  X  Can successfully enqueue into a queue
//  X  Can successfully enqueue multiple values into a queue
//  X  Can successfully dequeue out of a queue the expected value
//  X  Can successfully peek into a queue, seeing the expected value
//  X  Can successfully empty a queue after multiple dequeues
//  X  Can successfully instantiate an empty queue
//  X  Calling dequeue or peek on empty queue raises exception

describe('Queue methods', () => {
  describe('Basic Tests', () => {
    it('successfully instantiates an empty queue', () => {
      let queue = new Queue();
      expect(queue.front).toBeNull();
      expect(queue.end).toBeNull();
      expect(queue.isEmpty()).toBe(true);
    });
  });
  describe('enqueue() method', () => {
    it('successfully enqueues into a queue', () => {
      let queue = new Queue();
      queue.enqueue('tacos');
      expect(queue.end.value).toEqual('tacos');
    });
    it('successfully enqueues multiple values into a queue', () => {
      let queue = new Queue();
      queue.enqueue('tacos');
      queue.enqueue('burritos');
      queue.enqueue('tortas');
      expect(queue.end.value).toEqual('tortas');
    });
  });
  describe('dequeue() method', () => {
    it('successfully dequeues out of a queue the expected value', () => {
      let queue = new Queue();
      queue.enqueue('tacos');
      expect(queue.dequeue()).toEqual('tacos');
    });
    it('Can successfully empty a queue after multiple dequeues', () => {
      let queue = new Queue();
      queue.enqueue('tacos');
      queue.enqueue('burritos');
      queue.enqueue('tortas');
      queue.dequeue();
      queue.dequeue();
      queue.dequeue();
      expect(queue.isEmpty()).toBe(true);
    });
    it('raises an exception if dequeue is called on an empty queue', () => {
      let queue = new Queue();
      queue.enqueue('tacos');
      queue.dequeue();
      expect(() => {
        queue.dequeue();
      }).toThrow('Can not remove from an empty queue!');
    });
  });
  describe('peek() method', () => {
    it('successfully peeks into a queue, seeing the expected value', () => {
      let queue = new Queue();
      queue.enqueue('tacos');
      expect(queue.peek()).toEqual('tacos');
    });
    it('raises an exception if peek is called on an empty queue', () => {
      let queue = new Queue();
      queue.enqueue('tacos');
      queue.dequeue();
      expect(() => {
        queue.peek();
      }).toThrow('Can not peek at an empty queue!');
    });
  });
});

// Write tests to prove the following functionality:

//  X  Can successfully push onto a stack
//  X  Can successfully push multiple values onto a stack
//  X  Can successfully pop off the stack
//  X  Can successfully empty a stack after multiple pops
//  X  Can successfully peek the next item on the stack
//  X  Can successfully instantiate an empty stack
//  X  Calling pop or peek on empty stack raises exception

describe('Stack methods', () => {
  describe('Basic Tests', () => {
    it('successfully instantiates an empty stack', () => {
      let stack = new Stack();
      expect(stack.top).toBeNull();
      expect(stack.isEmpty()).toBe(true);
    });
  });
  describe('push() method', () => {
    it('successfully pushes on to a stack', () => {
      let stack = new Stack();
      stack.push('tacos');
      expect(stack.top.value).toEqual('tacos');
    });
    it('successfully pushes multiple values on to a stack', () => {
      let stack = new Stack();
      stack.push('tacos');
      stack.push('burritos');
      stack.push('tortas');
      expect(stack.top.value).toEqual('tortas');
    });
  });
  describe('pop() method', () => {
    it('successfully pops out of a stack the expected value', () => {
      let stack = new Stack();
      stack.push('tacos');
      expect(stack.pop()).toEqual('tacos');
    });
    it('Can successfully empty a stack after multiple pops', () => {
      let stack = new Stack();
      stack.push('tacos');
      stack.push('burritos');
      stack.push('tortas');
      stack.pop();
      stack.pop();
      stack.pop();
      expect(stack.isEmpty()).toBe(true);
    });
    it('raises an exception if pop is called on an empty stack', () => {
      let stack = new Stack();
      stack.push('tacos');
      stack.pop();
      expect(() => {
        stack.pop();
      }).toThrow('Can not remove from an empty stack!');
    });
  });
  describe('peek() method', () => {
    it('successfully peeks into a stack, seeing the expected value', () => {
      let stack = new Stack();
      stack.push('tacos');
      expect(stack.peek()).toEqual('tacos');
    });
    it('raises an exception if peek is called on an empty stack', () => {
      let stack = new Stack();
      stack.push('tacos');
      stack.pop();
      expect(() => {
        stack.peek();
      }).toThrow('Stack is empty, nothing to show.');
    });
  });
});

// Write tests to prove the following functionality:

//  X  Can successfully enqueue a value onto a pseudoqueue
//  X  Can successfully enqueue multiple values onto a pseudoqueue
//  X  Can successfully dequeues out of a pseudoqueue the expected value
//  X  Can successfully empty a pseudoqueue after multiple dequeues
//  X  Can successfully peek the first item on the pseudoqueue
//  X  Can successfully instantiate an empty pseudoqueue
//  X  Calling dequeue or peek on empty pseudoqueue raises exception

describe('PseudoQueue methods', () => {
  describe('Basic Tests', () => {
    it('successfully instantiates an empty pseudoqueue', () => {
      let pqueue = new PseudoQueue();
      expect(pqueue.top).toBeNull();
      expect(pqueue.end).toBeNull();
      expect(pqueue.isEmpty()).toBe(true);
    });
  });
  describe('enqueue() method', () => {
    it('successfully enqueue a value onto a pseudoqueue', () => {
      let pqueue = new PseudoQueue();
      pqueue.enqueue('tacos');
      expect(pqueue.top.value).toEqual('tacos');
    });
    it('successfully enqueue multiple values on to a pseudoqueue', () => {
      let pqueue = new PseudoQueue();
      pqueue.enqueue('tacos');
      pqueue.enqueue('burritos');
      pqueue.enqueue('tortas');
      expect(pqueue.top.value).toEqual('tacos');
    });
  });
  describe('dequeue() method', () => {
    it('successfully dequeues out of a pseudoqueue the expected value', () => {
      let pqueue = new PseudoQueue();
      pqueue.enqueue('tacos');
      expect(pqueue.dequeue()).toEqual('tacos');
    });
    it('Can successfully empty a pseudoqueue after multiple dequeues', () => {
      let pqueue = new PseudoQueue();
      pqueue.enqueue('tacos');
      pqueue.enqueue('burritos');
      pqueue.enqueue('tortas');
      pqueue.dequeue();
      pqueue.dequeue();
      pqueue.dequeue();
      expect(pqueue.isEmpty()).toBe(true);
    });
    it('raises an exception if dequeue is called on an empty pseudoqueue', () => {
      let pqueue = new PseudoQueue();
      pqueue.enqueue('tacos');
      pqueue.dequeue();
      expect(() => {
        pqueue.dequeue();
      }).toThrow('Can not remove from an empty pseudostack!');
    });
  });
  describe('PseudoQueue\'s peek() method', () => {
    it('successfully peeks into a pseudostack, seeing the expected value', () => {
      let pqueue = new PseudoQueue();
      pqueue.enqueue('tacos');
      expect(pqueue.peek()).toEqual('tacos');
    });
    it('raises an exception if peek is called on an empty pseudostack', () => {
      let pqueue = new PseudoQueue();
      pqueue.enqueue('tacos');
      pqueue.dequeue();
      expect(() => {
        pqueue.peek();
      }).toThrow('Can not peek at an empty pseudoqueue!');
    });
  });
});
