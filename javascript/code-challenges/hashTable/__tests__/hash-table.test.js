'use strict';

// Require our linked list class
const HashedTable = require('../hash-table');

// Write tests to prove the following functionality:

// - [ ] Displays the hash table structure
// - [ ] Adds a key/value to the hash table resulting in the value being in the data structure using contains()
// - [ ] Successfully returns false when contains() is called on an empty table
// - [ ] Successfully returns false for a key that does not exist in the hash table with contains()
// - [ ] Successfully returns null when get() is called on an empty table
// - [ ] Successfully returns null for a key that does not exist in the hash table with get()
// - [ ] Successfully hashes a string to an in-range value
// - [ ] Successfully hashes an empty string to an in-range value
// - [ ] Successfully hashes a key (using betterHash) to an in-range value
// - [ ] Successfully hashes an empty key (using betterHash) to an index of 0
// - [ ] Retrieves the stored value based on a key
// - [ ] Successfully handles a collision within the hash table
// - [ ] Successfully retrieves a value from a bucket within the hash table that has a collision

describe('Hashed Table', () => {
  it('Displays the hash table structure', () => {
    const hashTbl = new HashedTable(1);
    // First set the value...
    hashTbl.set('tacos', 'tacos are delicious');
    // ...then get the printed version of the whole table.
    let expectedPrint = '0\ntacos: tacos are delicious\n';
    let tableDisplay = hashTbl.showHashTable();
    expect(tableDisplay).toEqual(expectedPrint);
  });
  it('Adds a key/value to the hashtable resulting in the value being in the data structure using contains()', () => {
    const hashTbl = new HashedTable(1);
    // First set the value...
    hashTbl.set('tacos', 'tacos are delicious');
    hashTbl.set('burritos', 'burritos are also delicious');
    // ...then get the value when given the key.
    let keyExists = hashTbl.contains('tacos');
    expect(keyExists).toBe(true);
  });
  it('Successfully returns false when contains() is called on an empty table', () => {
    const hashTbl = new HashedTable(0);
    let keyExists = hashTbl.contains('burritos');
    expect(keyExists).toBe(false);
  });
  it('Successfully returns false for a key that does not exist in the hash table with contains()', () => {
    const hashTbl = new HashedTable(6);
    hashTbl.set('tacos', 'tacos are delicious');
    // ...then get the value when given the key.
    let keyExists = hashTbl.contains('burritos');
    expect(keyExists).toBe(false);
  });
  it('Successfully returns null when get() is called on an empty table', () => {
    const hashTbl = new HashedTable(0);
    let keyExists = hashTbl.get('burritos');
    expect(keyExists).toBeNull();
  });
  it('Successfully returns null for a key that does not exist in the hash table with get()', () => {
    const hashTbl = new HashedTable(6);
    hashTbl.set('tacos', 'tacos are delicious');
    // ...then get the value when given the key.
    let keyExists = hashTbl.get('burritos');
    expect(keyExists).toBeNull();
  });
  it('Successfully hashes a string to an in-range value', () => {
    const hashTbl = new HashedTable(6);
    let key = hashTbl.hash('tacos');
    let tableLength = hashTbl.size;
    expect(key).toBeGreaterThanOrEqual(0);
    expect(key).toBeLessThanOrEqual(tableLength);
  });
  it('Successfully hashes an empty string to an in-range value', () => {
    const hashTbl = new HashedTable(6);
    let key = hashTbl.hash('');
    let tableLength = hashTbl.size;
    expect(key).toBeGreaterThanOrEqual(0);
    expect(key).toBeLessThanOrEqual(tableLength);
  });
  it('Successfully hashes a key (using betterHash) to an in-range value', () => {
    const hashTbl = new HashedTable(6);
    let key = hashTbl.betterHash('tacos');
    let tableLength = hashTbl.size;
    expect(key).toBeGreaterThanOrEqual(0);
    expect(key).toBeLessThanOrEqual(tableLength);
  });
  it('Successfully hashes an empty key (using betterHash) to an index of 0', () => {
    const hashTbl = new HashedTable(1);
    let key = hashTbl.betterHash('');
    expect(key).toBe(0);
  });
  it('Retrieves the stored value based on a key', () => {
    const hashTbl = new HashedTable(6);
    // First set the value...
    hashTbl.set('tacos', 'tacos are delicious');
    hashTbl.set('burritos', 'burritos are also delicious');
    hashTbl.set('enchiladas', 'enchiladas are pretty delicious');
    hashTbl.set('scorpions', 'scorpions are less delicious');
    // ...then get the value when given the key.
    let tableEntry = hashTbl.get('tacos');
    expect(tableEntry).toEqual('tacos are delicious');
  });
  it('Successfully handles a collision within the hash table', () => {
    const hashTbl = new HashedTable(1);
    // First set the value...
    hashTbl.set('tacos', 'tacos are delicious');
    hashTbl.set('burritos', 'burritos are also delicious');
    hashTbl.set('enchiladas', 'enchiladas are pretty delicious');
    hashTbl.set('scorpions', 'scorpions are less delicious');
    // ...then get the value when given the key.
    let tableEntry = hashTbl.get('tacos');
    expect(tableEntry).toEqual('tacos are delicious');
  });
  it('Successfully retrieves a value from a bucket within the hash table that has a collision', () => {
    const hashTbl = new HashedTable(2);
    // First set the value...
    hashTbl.set('tacos', 'tacos are delicious');
    hashTbl.set('burritos', 'burritos are also delicious');
    hashTbl.set('enchiladas', 'enchiladas are pretty delicious');
    hashTbl.set('scorpions', 'scorpions are less delicious');
    // ...then get the value when given the key.
    let tableEntry = hashTbl.get('tacos');
    expect(tableEntry).toEqual('tacos are delicious');
  });
});
