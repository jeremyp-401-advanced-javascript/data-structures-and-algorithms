'use strict';

BinarySearch(initialArray, searchValue);

function BinarySearch(inputArray, searchValue) {
  let loopIndex = 0;
  let foundIndex = -2;
  let splitIndex = 0;
  let initialArrayLength = inputArray.length;
  let arrayLength = inputArray.length;

  if (!inputArray) { // Check if the array exists (not undefined)
    //foundIndex = -1;
    return -1;
  } else if (inputArray == null) {
    //foundIndex = -1;
    return -1;
  }

  let findNewSplitIndex = (inputArrayLength, oldSplitIndex) => {
    if (inputArrayLength % 2 === 1) {
      splitIndex = (inputArrayLength / 2) + 0.5; // if true: odd number handling
    } else if (inputArray.length % 2 === 0) {
      splitIndex = (inputArrayLength / 2); // if false: even number handling
    }
    splitIndex += oldSplitIndex;
    loopSplitFunction(oldSplitIndex, splitIndex);
  };

  let loopSplitFunction = (loopIndex, splitIndex) => {
    console.log(`Start at: ${loopIndex} end at: ${splitIndex}`);
    for(loopIndex; loopIndex < splitIndex; loopIndex++) {
      if (inputArray[loopIndex] === searchValue) {
        foundIndex = loopIndex; // We found our value!
      } else if (loopIndex >= initialArrayLength) { // If it wasn't found in this sub-search
        foundIndex = -1;
      }
    }
    // Loop over, we didn't find anything... our new array length is total - split index
    arrayLength = initialArrayLength - splitIndex;
    if (arrayLength === 0) {
      foundIndex = -1; // End of array. It wasn't found at all.
    } else if (foundIndex === -2) {
      findNewSplitIndex(arrayLength, splitIndex);
    }
  };

  if (foundIndex === -2) { // Causes the initial run on the sub-functions and edge cases
    findNewSplitIndex(arrayLength, loopIndex); // Begin searching
  }
  return foundIndex;
}
