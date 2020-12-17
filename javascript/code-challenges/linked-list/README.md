# Linked Lists

Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.

Also, create the three methods mentioned below.

## Challenge

**Create a linked list with three different methods:**

>`insert(value)` (adds a new node with `value` to the head of the linked list)  
>Input: a string `value`  
>Output: a node with the `value` inserted at the head  
>Edge Case(s):  
>- If linked list is empty, the new head should also have next = null

>`includes(testValue)` (returns a boolean result depending on whether `testValue` exists in the linked list)  
>Input: a string `testValue` to search for  
>Output: a boolean representing whether the input value was found in the linked list  
>Edge Case(s):
>- If linked list is empty, the method should return false

>`toString()` (returns a string representing our linked list as a string of values).  
>Input: none  
>Output: a representation of the linked list as a string  
>- Format: `"{ a } -> { b } -> { c } -> NULL"`
>Edge cases:
>- The linked list is empty

## Approach & Efficiency

### Big O Notation

- LinkedList.insert() - O(1)  
- LinkedList.includes() - O(n)  
- LinkedList.toString() - O(n)  

## Testing

Write tests to prove the following functionality:

- Can successfully instantiate an empty linked list
- Can properly insert into the linked list
- The head property will properly point to the first node in the linked list
- Can properly insert multiple nodes into the linked list
- Will return true when finding a value within the linked list that exists
- Will return false when searching for a value in the linked list that does not exist
- Can properly return a collection of all the values that exist in the linked list
