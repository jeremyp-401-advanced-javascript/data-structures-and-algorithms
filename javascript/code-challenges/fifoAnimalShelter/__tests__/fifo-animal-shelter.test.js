'use strict';

let { AnimalShelter, Animal } = require('../fifo-animal-shelter');

// Write tests to prove the following functionality:
//  X  Can successfully instantiate an empty AnimalShelter
//  X  Can successfully instantiates an empty animal of each type
//  X  Can successfully enqueue an animal of each type into the AnimalShelter
//  X  Can successfully enqueue multiple animals of each type into the AnimalShelter
//  X  Calling enqueue on with an animal that isn't a cat or dog raises an exception
//  X  Can successfully dequeue each type of animal out of an AnimalShelter
//  X  Can successfully empty an AnimalShelter of an animal type after multiple dequeues, leaving the other type
//  X  Can successfully completely empty an AnimalShelter of all animals after multiple dequeues
//  X  Calling dequeue on AnimalShelter without any more cats/dogs raises exception
//  X  Calling dequeue with an animal type other than 'cat' or dog' raises exception

describe('AnimalShelter methods', () => {
  describe('Basic Tests', () => {
    it('successfully instantiates an empty shelter', () => {
      let shelter = new AnimalShelter();
      expect(shelter.lastCat).toBeNull();
      expect(shelter.lastDog).toBeNull();
      expect(shelter.lastCat).toBeNull();
      expect(shelter.lastDog).toBeNull();
    });
    it('successfully instantiates an empty animal of each type', () => {
      let cat = new Animal('cat', 'Furball');
      let dog = new Animal('dog', 'Charles Barkley');
      expect(cat.type).toEqual('cat');
      expect(cat.name).toEqual('Furball');
      expect(cat.nextCat).toBeNull();
      expect(dog.type).toEqual('dog');
      expect(dog.name).toEqual('Charles Barkley');
      expect(dog.nextDog).toBeNull();
    });
  });
  describe('enqueue() method', () => {
    it('successfully enqueue an animal of each type into the shelter', () => {
      let shelter = new AnimalShelter();
      let cat = new Animal('cat', 'Panteleimon');
      let dog = new Animal('dog', 'Waghya');
      shelter.enqueue(cat);
      shelter.enqueue(dog);
      expect(shelter.firstCat.type).toEqual('cat');
      expect(shelter.lastCat.type).toEqual('cat');
      expect(shelter.lastCat.name).toEqual('Panteleimon');
      expect(shelter.firstDog.type).toEqual('dog');
      expect(shelter.lastDog.type).toEqual('dog');
      expect(shelter.lastDog.name).toEqual('Waghya');
    });
    it('successfully enqueue multiple animals of each type into the AnimalShelter', () => {
      let shelter = new AnimalShelter();
      let cat1 = new Animal('cat', 'Nothing');
      let cat2 = new Animal('cat', 'Sprite');
      let dog1 = new Animal('dog', 'Joy Romanov');
      let dog2 = new Animal('dog', 'HeiHei');
      shelter.enqueue(cat1);
      shelter.enqueue(dog1);
      shelter.enqueue(cat2);
      shelter.enqueue(dog2);
      expect(shelter.firstCat.name).toEqual('Nothing');
      expect(shelter.lastCat.name).toEqual('Sprite');
      expect(shelter.firstDog.name).toEqual('Joy Romanov');
      expect(shelter.lastDog.name).toEqual('HeiHei');
    });
    it('calling enqueue on with an animal that isn\'t a cat or dog raises an exception', () => {
      let shelter = new AnimalShelter();
      let horse = new Animal('horse', 'Bojack');
      expect(() => {
        shelter.enqueue(horse);
      }).toThrow('Sorry, this shelter only accepts cats and dogs.');
    });
  });
  describe('dequeue() method', () => {
    it('Can successfully dequeue each type of animal out of an AnimalShelter', () => {
      let shelter = new AnimalShelter();
      let cat = new Animal('cat', 'Lil Bub');
      let dog = new Animal('dog', 'Kabosu');
      shelter.enqueue(cat);
      shelter.enqueue(dog);
      let adoptedCat = shelter.dequeue('cat');
      let adoptedDog = shelter.dequeue('dog');
      expect(adoptedCat.name).toEqual('Lil Bub');
      expect(adoptedDog.name).toEqual('Kabosu');
    });
    it('successfully empty an AnimalShelter of an animal type after multiple dequeues, leaving the other type', () => {
      let shelter = new AnimalShelter();
      let cat1 = new Animal('cat', 'All Ball');
      let cat2 = new Animal('cat', 'Lipstick');
      let dog1 = new Animal('dog', 'Cerberus');
      let dog2 = new Animal('dog', 'Orthrus');
      shelter.enqueue(cat1);
      shelter.enqueue(dog1);
      shelter.enqueue(cat2);
      shelter.enqueue(dog2);
      shelter.dequeue('cat');
      shelter.dequeue('cat');
      expect(shelter.firstCat).toBeNull();
      expect(shelter.lastCat).toBeNull();
      expect(shelter.firstDog.name).toEqual('Cerberus');
      expect(shelter.lastDog.name).toEqual('Orthrus');
    });
    it('successfully completely empty an AnimalShelter of all animals after multiple dequeues', () => {
      let shelter = new AnimalShelter();
      let cat1 = new Animal('cat', 'Tabby');
      let cat2 = new Animal('cat', 'Dixie');
      let dog1 = new Animal('dog', 'Fala');
      let dog2 = new Animal('dog', 'Checkers');
      shelter.enqueue(cat1);
      shelter.enqueue(dog1);
      shelter.enqueue(cat2);
      shelter.enqueue(dog2);
      shelter.dequeue('cat');
      shelter.dequeue('cat');
      shelter.dequeue('dog');
      shelter.dequeue('dog');
      expect(shelter.firstCat).toBeNull();
      expect(shelter.firstDog).toBeNull();
      expect(shelter.lastCat).toBeNull();
      expect(shelter.lastDog).toBeNull();
    });
    it('returns null if dequeue is called on an animal type other than cat or dog', () => {
      let shelter = new AnimalShelter();
      let cat = new Animal('cat', 'Felix');
      shelter.enqueue(cat);
      expect(shelter.dequeue('horse')).toBeNull();
    });
    it('raises an exception when doing dequeue on AnimalShelter without any more cats/dogs', () => {
      let shelter = new AnimalShelter();
      let cat1 = new Animal('cat', 'Unsinkable Sam');
      let cat2 = new Animal('cat', 'Felicette');
      let dog1 = new Animal('dog', 'Hachiko');
      let dog2 = new Animal('dog', 'Laika');
      shelter.enqueue(cat1);
      shelter.enqueue(dog1);
      shelter.enqueue(cat2);
      shelter.enqueue(dog2);
      shelter.dequeue('cat');
      shelter.dequeue('cat');
      shelter.dequeue('dog');
      shelter.dequeue('dog');
      expect(() => { shelter.dequeue('cat'); })
        .toThrow('Sorry, there are no more cats available for adoption.');
      expect(() => { shelter.dequeue('dog'); })
        .toThrow('Sorry, there are no more dogs available for adoption.');
    });
    it('raises an exception if dequeue is called on an empty AnimalShelter', () => {
      let shelter = new AnimalShelter();
      expect(() => { shelter.dequeue('cat'); })
        .toThrow('Sorry, there are no more cats available for adoption.');
      expect(() => { shelter.dequeue('dog'); })
        .toThrow('Sorry, there are no more dogs available for adoption.');
    });
  });
});
