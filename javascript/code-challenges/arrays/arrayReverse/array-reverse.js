'use strict';

let reverseArray = (inputArray) => {
  let outputArray = [];
  let outputIndex = 0;

  for (let i = inputArray.length - 1; i > -1; i--) {
    outputArray[outputIndex] = inputArray[i];
    outputIndex += 1;
  }

  return outputArray;
};
