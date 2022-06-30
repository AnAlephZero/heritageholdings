function isCharRepeated(input: string): boolean {
  //overall result
  let result: boolean = false;
  //support has set so understand if a char is there or not
  let counterHashMap = new Set();

  // Traverse the input array from left to right
  for (let position = 0; position <= input.length - 1; position++) {
    let theChar = input[position];

    // if the char is already present in the map, return since the char is duplicated
    if (counterHashMap.has(theChar)) {
        result = true;
        break;
    }
    // otherwise add it to the support map
    else counterHashMap.add(theChar);
  }
  return result;
}


export function numberOfDuplicateOccurrencies(input: string[]) : number {
    let counter : number = 0;
    input.forEach(element => {
        if (isCharRepeated(element)) {
            counter++;
        }
    });

    return counter;
}