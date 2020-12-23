'use strict';

class Animal { // Create an Animal class that accepts an animal type
  constructor(type, name){
    this.type = type; // Create a new value.
    this.name = name; // Give our animal a name.
    this.nextCat = null; // Set the initial cat to null.
    this.nextDog = null; // Set the initial dog to null.
  }
}

class AnimalShelter { // Create an AnimalShelter class
  constructor(){
    this.firstCat = null; // Set the initial first cat to null.
    this.firstDog = null; // Set this initial first dog to null.
    this.lastCat = null; // Set the initial last cat to null.
    this.lastDog = null; // Set the initial last dog to null.
  }

  enqueue(animal) { // O(1) - Add to the end of the queue
    if (animal.type === 'cat') { // Cat intake stuff
      if (!this.lastCat) { // If there isn't a cat in the AnimalShelter
        this.firstCat = animal; // The first cat...
        this.lastCat = animal; // ...and the last cat are our new cat.
      } else { // If there is another cat in the AnimalShelter
        this.lastCat.nextCat = animal; // Set the current lastCat.nextCat to our new cat.
        this.lastCat = animal; // ...then set the AnimalShelter.lastCat to our new cat.
      }
    } else if (animal.type === 'dog') { // Dog intake stuff
      if (!this.lastDog) { // If there isn't a dog in the AnimalShelter
        this.firstDog = animal; // The first dog...
        this.lastDog = animal; // ...and the last dog are our new dog.
      } else { // If there is another cat in the AnimalShelter
        this.lastDog.nextDog = animal; // Set the current lastDog.nextDog to our new cat.
        this.lastDog = animal; // ...then set the AnimalShelter.lastDog to our new cat.
      }
    } else {
      throw 'Sorry, this shelter only accepts cats and dogs.';
    }
    return;
  }

  dequeue(animalPref) { // O(1) - Remove from the front of the queue
    if (animalPref === 'cat') { // Cat adoption stuff
      if (!this.lastCat) { // If there isn't a cat in the AnimalShelter
        throw 'Sorry, there are no more cats available for adoption.';
      } else { // If there is another cat in the AnimalShelter
        if (this.firstCat === this.lastCat) {
          this.lastCat = this.firstCat.nextCat; // Make sure the new lastCat is the one after the cat in the crate.
        }
        let catCrate = this.firstCat; // Get the firstCat in a crate to give to the adopter
        this.firstCat = this.firstCat.nextCat; // Make sure the new firstCat is the one after the cat in the crate.
        return catCrate; // Another cat successfully adopted!
      }
    } else if (animalPref === 'dog') { // Dog adoption stuff
      if (!this.lastDog) { // If there isn't a dog in the AnimalShelter
        throw 'Sorry, there are no more dogs available for adoption.';
      } else { // If there is another dog in the AnimalShelter
        if (this.firstDog === this.lastDog) {
          this.lastDog = this.firstDog.nextDog; // Make sure the new lastCat is the one after the cat in the crate.
        }
        let dogCrate = this.firstDog; // Get the firstDog in a crate to give to the adopter
        this.firstDog = this.firstDog.nextDog; // Make sure the new firstDog is the one after the dog in the crate.
        return dogCrate; // Another dog successfully adopted!
      }
    } else {
      return null;
    }
  }

}

module.exports = { Animal, AnimalShelter };
