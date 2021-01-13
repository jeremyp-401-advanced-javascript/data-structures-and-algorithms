const insertionSort = (arr) => {
  console.log('Original array:', arr);
  for (let i = 1; i < arr.length; i++) {
    console.log(`New iteration! Step ${i}`);
    let j = i - 1;
    console.log(`let j(${j}) = i(${i}) - 1`);
    let temp = arr[i];
    console.log(`temp(${temp}) = arr[i](${arr[i]})`);

    while (j >= 0 && temp < arr[j]) {
      console.log(`In the while loop! j(${j}) >= 0 AND temp(${temp}) < arr[j](${arr[j]})`);
      arr[j + 1] = arr[j];
      console.log(`    arr[j + 1](${arr[j+1]}) = arr[j](${arr[j]})`);
      j = j - 1;
      console.log(`    j is now j - 1 // (${j})`);
    }
    console.log(`Exited (or bypassed) the while loop!`);
    arr[j + 1] = temp;
    console.log(`arr[j + 1](${arr[j+1]}) = temp(${temp})`);
    console.log(`Array after ${i} steps:`, arr);
  }
  console.log('Final array:', arr);
  return arr;
};

let testArr = [8,4,23,42,16,15];

insertionSort(testArr);
