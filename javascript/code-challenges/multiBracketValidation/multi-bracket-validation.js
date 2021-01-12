'use strict';

function multiBracketValidation (string) {
  if(!string) {
    return false;
  }

  let stringArray = [...string];

  let testArrayOne = [];
  let bracketCheck = false;

  for (let i = 0; i < stringArray.length; i++) {
    if(stringArray[i] === '(' || stringArray[i] === '{' || stringArray[i] === '['){
      testArrayOne.push(stringArray[i]);
      bracketCheck = true;
      continue;
    }
    if(stringArray[i] === ')' || stringArray[i] === '}' || stringArray[i] === ']'){
      bracketCheck = true;
      if((stringArray[i] === ')') && (testArrayOne[testArrayOne.length - 1] !== '(')) {
        return false;
      } else if (stringArray[i] === '}' && testArrayOne[testArrayOne.length - 1] !== '{') {
        return false;
      } else if (stringArray[i] === ']' && testArrayOne[testArrayOne.length - 1] !== '[') {
        return false;
      } else {
        testArrayOne.pop();
      }
    }
  }
  if(testArrayOne.length === 0 && bracketCheck === true) {
    return true;
  } else {
    return false;
  }

}

module.exports = multiBracketValidation;