# Linked Lists

Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.

- Define a method called `insert` which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
- Define a method called `includes` which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
- Define a method called `toString` which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
  - `"{ a } -> { b } -> { c } -> NULL"`

Any exceptions or errors that come from your code should be semantic, capturable errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.

## Challenge

**Create a linked list with three different methods:**

>`insert` (creates a new `head`)
>Input: a string value
>Output: a node with the input value inserted at the `head`
>
>Edge Case(s):
>- If linked list is empty, the new head should have next = null

>`includes` (searches the list for a value)
>Input: a string value
>Output: a boolean representing whether the input value was found in the linked list
>
>Edge Case(s):
>- If linked list is empty, the method should return false

>`toString` (represent our linked list as a string of values).
>Input: none
>Output: a representation of the linked list as a string
>
>Edge cases:
>- The linked list is empty

## Approach & Efficiency

### Big O Notation

- insert - O(1)  
- includes - O(n)  
- toString - O(n)  

## Testing

Write tests to prove the following functionality:

- Can successfully instantiate an empty linked list
- Can properly insert into the linked list
- The head property will properly point to the first node in the linked list
- Can properly insert multiple nodes into the linked list
- Will return true when finding a value within the linked list that exists
- Will return false when searching for a value in the linked list that does not exist
- Can properly return a collection of all the values that exist in the linked list
