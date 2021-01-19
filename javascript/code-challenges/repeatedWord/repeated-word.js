'use strict';

const HashTable = require('./hash-table');

const repeatedWord = (string) => {
  let hashTable = new HashTable(2);
  //Each word will be stored in a hash table, which means:
  // Any non-word characters need to be removed from the input
  // Split the string by spaces (' ') into a wordsArray
  // In a loop test each index of the wordsArray...
  //   ...use the hashTable's contains() method
  //      If false, add to the hash table
  //      If true, return the current word in the loop
  // Return false (if nothing matches in the input string)
  let sanitizedString = string.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,'').toLowerCase();
  //let collisions = 0;
  let newWord = '';
  for (let i = 0; i < sanitizedString.length; i++) {
    if (sanitizedString[i] === ' ') { // There is a break in the sanitizedString
      if (hashTable.contains(newWord)) {
        //collisions++;
        return newWord;
      } else {
        hashTable.set(newWord, '');
        newWord = '';
      }
    } else {
      newWord += sanitizedString[i];
    }
  }
  return false;
};

module.exports = repeatedWord;
