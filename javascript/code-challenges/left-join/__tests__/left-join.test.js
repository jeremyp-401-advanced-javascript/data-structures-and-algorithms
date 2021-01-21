'use strict';

// Require our linked list class
const HashTable = require('../hash-table');
const leftJoin = require('../left-join');

// Write tests to prove the following functionality:

// - [ ] Successfully left joins the two hash tables
// - [ ] Skips processing if the right hash table is empty
// - [ ] Returns an empty object if the left table is empty
// - [ ] Skips processing if the right hash table is null
// - [ ] Returns an empty object if the left table is null

describe('Hashed Table', () => {
  it('Successfully left joins the two hash tables', () => {
    // Table 1
    let hashTblL = new HashTable(2);
    hashTblL.set('fond','enamored');
    hashTblL.set('wrath','anger');
    hashTblL.set('diligent','employed');
    hashTblL.set('outfit','garb');
    hashTblL.set('guide','usher');
    // Table 2
    let hashTblR = new HashTable(2);
    hashTblR.set('fond','averse');
    hashTblR.set('wrath','delight');
    hashTblR.set('diligent','idle');
    hashTblR.set('guide','follow');
    hashTblR.set('flow','jam');
    // ...then get the output of the left join.
    let objectOutput = leftJoin(hashTblL, hashTblR);
    let expectedOutput = {
      outfit: [ 'garb', null ],
      diligent: [ 'employed', 'idle' ],
      wrath: [ 'anger', 'delight' ],
      fond: [ 'enamored', 'averse' ],
      guide: [ 'usher', 'follow' ]
    };
    expect(objectOutput).toEqual(expectedOutput);
  });
  it('Skips processing if the right hash table is empty', () => {
    // Table 1
    let hashTblL = new HashTable(2);
    hashTblL.set('fond','enamored');
    hashTblL.set('wrath','anger');
    hashTblL.set('diligent','employed');
    hashTblL.set('outfit','garb');
    hashTblL.set('guide','usher');
    // Table 2
    let hashTblR = new HashTable(2);
    console.log({hashTbl2: hashTblR});
    // ...then get the output of the left join.
    let objectOutput = leftJoin(hashTblL, hashTblR);
    let expectedOutput = {
      fond: [ 'enamored', null ],
      wrath: [ 'anger', null ],
      diligent: [ 'employed', null ],
      outfit: [ 'garb', null ],
      guide: [ 'usher', null ]
    };
    expect(objectOutput).toEqual(expectedOutput);
  });
  it('Returns an empty object if the left table is empty', () => {
    // Table 1
    let hashTblL = new HashTable(2);
    console.log({hashTbl2: hashTblL});
    // Table 2
    let hashTblR = new HashTable(2);
    hashTblR.set('fond','enamored');
    hashTblR.set('wrath','anger');
    hashTblR.set('diligent','employed');
    hashTblR.set('outfit','garb');
    hashTblR.set('guide','usher');

    // ...then get the output of the left join.
    let objectOutput = leftJoin(hashTblL, hashTblR);
    let expectedOutput = {};
    expect(objectOutput).toEqual(expectedOutput);
  });
  it('Skips processing if the right hash table is null', () => {
    // Table 1
    let hashTblL = new HashTable(2);
    hashTblL.set('fond','enamored');
    hashTblL.set('wrath','anger');
    hashTblL.set('diligent','employed');
    hashTblL.set('outfit','garb');
    hashTblL.set('guide','usher');
    // Table 2
    let hashTblR = new HashTable();
    console.log({hashTbl2: hashTblR});
    // ...then get the output of the left join.
    let objectOutput = leftJoin(hashTblL, hashTblR);
    let expectedOutput = {
      fond: [ 'enamored', null ],
      wrath: [ 'anger', null ],
      diligent: [ 'employed', null ],
      outfit: [ 'garb', null ],
      guide: [ 'usher', null ]
    };
    expect(objectOutput).toEqual(expectedOutput);
  });
  it('Returns an empty object if the left table is null', () => {
    // Table 1
    let hashTblL = new HashTable();
    console.log({hashTbl2: hashTblL});
    // Table 2
    let hashTblR = new HashTable(2);
    hashTblR.set('fond','enamored');
    hashTblR.set('wrath','anger');
    hashTblR.set('diligent','employed');
    hashTblR.set('outfit','garb');
    hashTblR.set('guide','usher');

    // ...then get the output of the left join.
    let objectOutput = leftJoin(hashTblL, hashTblR);
    let expectedOutput = {};
    expect(objectOutput).toEqual(expectedOutput);
  });
});
