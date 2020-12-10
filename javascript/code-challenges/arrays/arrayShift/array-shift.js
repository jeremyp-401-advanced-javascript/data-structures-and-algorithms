'use strict';

let insertShiftArray = (inputArray, inputString) => {
  let outputArray = [];
  let splitIndex = 0;

  if (inputArray) { // Check if the array is exists (not undefined)
    if (inputArray.length % 2 === 1) {
      splitIndex = (inputArray.length / 2) + 0.5; // if true: odd number handling
    } else if (inputArray.length % 2 === 0) {
      splitIndex = (inputArray.length / 2); // if false: even number handling
    } else {
      // Input array is malformed or not an array
    }
  } else if (inputArray == null) {
    // See comment below...
    inputArray = [];
  } else {
    // Let's be pedantic and analyze the actual wording of the problem:
    // "return an array with the new value added at the middle index"
    // If our input array isn't an array or null we still have to return one with,
    //   the value in the middle. So let's do that and put it in the middle at 0. :P
    splitIndex = 0;
  }

  // Start a loop to create the outputArray
  // Since we're adding a value to the outputArray we stop at inputArray.length + 1
  for (let loopIndex = 0; loopIndex < (inputArray.length + 1); loopIndex++) {
    if (loopIndex < splitIndex) { // Before the splitIndex
      outputArray[loopIndex] = inputArray[loopIndex];
    } else if (loopIndex === splitIndex) { // At the splitIndex
      outputArray[loopIndex] = inputString;
    } else if (loopIndex > splitIndex) { // Unecessary, but added for clarity
      // We're now one index *ahead* of our original inputArray,
      //   so we need to make sure to look at 'loopIndex - 1' on our inputArray
      outputArray[loopIndex] = inputArray[loopIndex - 1];
    }
  }
  return outputArray;
};
