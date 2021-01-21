function leftJoin(hashTblL, hashTblR) {
  let outputObj = {};
  let bypassProc = false;

  //console.log('hashTblL.table',hashTblL.table);
  if (hashTblL.table == null || hashTblL.size == null) {
    return outputObj;
  }
  //console.log('hashTblR.table',hashTblR.table);
  if (hashTblR.table == null || hashTblR.size == null) {
    bypassProc = true;
  }

  // Output hashTblL to outputObj
  for (let i = 0; i <= hashTblL.size - 1; i++) {
    if (hashTblL.table[i]) {
      let currentNode = hashTblL.table[i].head;
      while (currentNode) {
        let thisKey = Object.keys(currentNode.value);
        let thisValue = Object.values(currentNode.value);
        outputObj[`${thisKey}`] = [ `${thisValue}`, null ];
        currentNode = currentNode.next;
      }
    }
  }
  // Process hashTblR into outputObj
  if (!bypassProc) {
    for (let i = 0; i <= hashTblR.size - 1; i++) {
      if (hashTblR.table[i]) {
        let currentNode = hashTblR.table[i].head;
        while (currentNode) {
          let thisKey = Object.keys(currentNode.value);
          let thisValue = Object.values(currentNode.value);
          if (outputObj[`${thisKey}`]) {
            outputObj[`${thisKey}`][1] = `${thisValue}`;
          }
          currentNode = currentNode.next;
        }
      }
    }
  }
  return outputObj;
}

module.exports = leftJoin;
