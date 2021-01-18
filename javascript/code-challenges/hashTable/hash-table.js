let LinkedList = require('./linked-list');

// Technically a "chained" or "linked" hash table...
class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(string) {
    // According to the article I read, 37 is a good prime number to use here.
    // Further research shows that this is a "arithmetic modular" type hash
    const bestPrime = 37;
    let total = 0;
    // Loop through the characters in the string and...
    for (var i = 0; i < string.length; i++) {
      // For a string 'tacos' at i = 0: total = 0 +       ((37 * 0) +       116) // 116
      // For a string 'tacos' at i = 1: total = 116 +     ((37 * 116) +      97) // 4505
      // For a string 'tacos' at i = 2: total = 4505 +    ((37 * 4505) +     99) // 171289
      // For a string 'tacos' at i = 3: total = 171289 +  ((37 * 171289) +  111) // 6509093
      // For a string 'tacos' at i = 4: total = 6509093 + ((37 * 6509093) + 115) // 247345649
      total += bestPrime * total + string.charCodeAt(i);
    }
    // Divides the total by the length of the table and assigns the remainder to total
    // For a 37 position hash table: total = 247345649 % 37
    total = total % this.size; // total now equals 20
    if (total < 1) { // If 0 then just use 0
      this.table.length - 1;
    }
    // Return the hashed key, making sure to send it as an integer
    //console.log(`Just hashed a key (${string}) to value of: ${total}`);
    return parseInt(total);
  }

  betterHash(string) {
    // This algorithm seems to avoid collisions the best by distributing keys as evenly as possible.
    // Adapted from Mark Wilbur: https://logicmason.com/2013/how-to-implement-a-hash-table/
    // This one uses a 'zero fill left shift' bitwise operator
    var hash = 0;
    if (string.length === 0) return hash;
    for (let i = 0; i < string.length; i++) {
      hash = (hash << 5) - hash;
      hash = hash + string.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash % this.size); // Return only positive numbers
  }

  set(keyString, keyValue) {
    // Get the hash
    const hashedKey = this.hash(keyString);
    // Enter the value at the key
    const entry = { [keyString]: keyValue };
    // Set the entry to the hash value in the map
    // First check to see if there's a hash there already... if not, I need to put in a linked list
    if (!this.table[hashedKey]) {
      this.table[hashedKey] = new LinkedList();
    }
    // Add the value to the linked list
    this.table[hashedKey].insert(entry);
  }

  get(keyString) {
    // Find the index by hashing the key
    let keyIndex = this.hash(keyString);
    if (this.table[keyIndex]) {
      let currentNode = this.table[keyIndex].head;
      // While currentNode.next !== null look for the value at hashedKey
      while (currentNode) {
        let thisKey = Object.keys(currentNode.value).toString();
        let thisValue = Object.values(currentNode.value).toString();
        // Check to see if thisKey is the same as the input keyString
        if (thisKey === keyString) {
          // It was found! Return the value or...
          return thisValue;
        }
        // ...go to the next node and search again.
        currentNode = currentNode.next;
      }
    }
    // Return false since the matching key wasn't found above
    return null;
  }

  contains(keyString) {
    // Find the index by hashing the key
    let keyIndex = this.hash(keyString);
    if (this.table[keyIndex]) {
      let currentNode = this.table[keyIndex].head;
      // While currentNode.next !== null look for the value at hashedKey
      while (currentNode) {
        let thisKey = Object.keys(currentNode.value).toString();
        // Check to see if thisKey is the same as the input keyString
        if (thisKey === keyString) {
          // It was found! Return true or...
          return true;
        }
        // ...go to the next node and search again.
        currentNode = currentNode.next;
      }
    }
    // Return false since the matching key wasn't found above
    return false;
  }

  showHashTable() {
    let output = '';
    for (const iterKey in this.table) {
      let currentNode = this.table[iterKey].head;
      output += `${iterKey.toString()}` + '\n';
      // While currentNode.next !== null look for the value at hashedKey
      while (currentNode) {
        let thisKey = Object.keys(currentNode.value).toString();
        let thisValue = Object.values(currentNode.value).toString();
        output += `${thisKey}: ${thisValue}` + '\n';
        // ...go to the next node and search again.
        currentNode = currentNode.next;
      }
    }
    // console.log(output); // Shows the structure of the entire hash table
    return output;
  }
}

module.exports = HashTable;
