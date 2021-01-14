function quickSort (arr, startIdx, endIdx) {
  if (startIdx < endIdx) {
    // Partition the array by setting the position of the pivot value
    let pivotIdx = partition(arr, startIdx, endIdx);
    // Sort the left
    quickSort(arr, startIdx, pivotIdx - 1);
    // Sort the right
    quickSort(arr, pivotIdx + 1, endIdx);
  }
  return arr;
}

function partition (arr, startIdx, endIdx) {
  // set a pivot value as a point of reference
  let pivotIdx = arr[endIdx];
  // create a variable to track the largest index of numbers lower than the defined pivot
  let i = startIdx - 1;
  for (let j = startIdx; j <= endIdx - 1; j++) {
    if (arr[j] < pivotIdx) {
      i++;
      swap(arr, j, i);
    }
  }
  // place the value of the pivot location in the middle.
  // all numbers smaller than the pivot are on the left, larger on the right.
  swap(arr, i + 1, endIdx);
  // return the pivot index point
  return (i + 1);
}

function swap (arr, startIdx, endIdx) {
  let temp = arr[startIdx];
  arr[startIdx] = arr[endIdx];
  arr[endIdx] = temp;
}

let arrayInput = [8,4,23,42,16,15];
let arrayLow = 0;
let arrayHigh = arrayInput.length - 1;

console.log(quickSort(arrayInput, arrayLow, arrayHigh));
