# Hash Tables

Create a 'chained' or 'linked' HashTable class that stores data using hashes and linked lists to handle collisions.

Also, create the four methods mentioned below.

## Challenge

**Create a hashed table with four different methods:**

>`hash(keyString)` (hashes a `keyString` to associate it to an index in the hashed table)  
>Input: a string of any length  
>Output: an integer representing the hashed table index that the `keyString` resolves to  
>Edge Case(s):
>- All known edge cases are handled (empty string in argument)

>`set(keyString, keyValue)` (adds a key/value pair to the hash table at a hashed index).  
>Input: a `keyString` string representing the key of the entry and `keyValue` item as the value to be stored.  
>Output: none  
>Edge cases:
>- All edge cases handed (empty values in arguments)

>`get(keyString)` (returns a boolean result depending on whether `keyString` exists in the hash table)  
>Input: a string `keyString` to search for in the keys of the hash table  
>Output: the value found at the hashed index of `keyString`  
>Edge Case(s):
>- If the hash table is empty, the method should return null

>`contains(keyString)` (returns a boolean result depending on whether `keyString` exists in the hash table)  
>Input: a string `keyString` to search for in the keys of the hash table  
>Output: a boolean representing whether the key `keyString` was found in the hash table  
>Edge Case(s):
>- If the hash table is empty, the method should return false

## Approach & Efficiency

### Big O Notation

Space is O(n), all other operations are O(1) in the best case (when collisions are avoided) and O(n) in the worst case.

## Testing

Write tests to prove the following functionality:
*(Checked tests are required by the assignment however all tests are passing with 100% coverage)*

- [ ] Displays the hash table structure
- [X] Adds a key/value to the hash table resulting in the value being in the data structure using contains()
- [ ] Successfully returns false when contains() is called on an empty table
- [ ] Successfully returns false for a key that does not exist in the hash table with contains()
- [ ] Successfully returns null when get() is called on an empty table
- [X] Successfully returns null for a key that does not exist in the hash table with get()
- [X] Successfully hashes a key to an in-range value
- [ ] Successfully hashes an empty key to an in-range value
- [ ] Successfully hashes a key (using betterHash) to an in-range value
- [ ] Successfully hashes an empty key (using betterHash) to an index of 0
- [X] Retrieves the stored value based on a key
- [X] Successfully handles a collision within the hash table
- [X] Successfully retrieves a value from a bucket within the hash table that has a collision

## Helpful Links

- [https://medium.com/javascript-in-plain-english/algorithm-in-javascript-hash-table-7b0464d2b81b](https://medium.com/javascript-in-plain-english/algorithm-in-javascript-hash-table-7b0464d2b81b)
- [https://www.educative.io/blog/data-strucutres-hash-table-javascript](https://www.educative.io/blog/data-strucutres-hash-table-javascript)
- [https://www.mattzeunert.com/2017/02/01/implementing-a-hash-table-in-javascript.html](https://www.mattzeunert.com/2017/02/01/implementing-a-hash-table-in-javascript.html)
- [https://logicmason.com/2013/how-to-implement-a-hash-table/](https://logicmason.com/2013/how-to-implement-a-hash-table/)
- [https://www.w3schools.com/js/js_bitwise.asp](https://www.w3schools.com/js/js_bitwise.asp)
