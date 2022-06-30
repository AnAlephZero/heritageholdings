export function flattenExt(inputArray: any[], depth = 1): any[] {
  return depth > 0
    ? inputArray.reduce((previousValue, currentValue) => {
        //algo explained for example taking as input [1, 2, [3, 4]] with depth = 1
        //cicle #1: previousValue = [], currentValue = 1 => currentValue is not an array so I concat previous with current; [1]
        //cicle #2: previousValue = [1], currentValue = 2 => currentValue is not an array so I concat previous with current; [1,2]
        //cicle #3: previousValue = [1,2], currentValue = [3,4] => currentValue is an array so I run again the flatten with a depth of 0
        //cicle #4: since depth is 0, I return a shallow copy of the array [3, 4] that will be concatenated to the existing one return [1,2,3,4]

        //algo explained for example taking as input [1, 2, [3, 4, [5, 6]]] with depth = 2
        //cicle #1: previousValue = [], currentValue = 1 => currentValue is not an array so I concat previous with current; [1]
        //cicle #2: previousValue = [1], currentValue = 2 => currentValue is not an array so I concat previous with current; [1,2]
        //cicle #3: previousValue = [1,2], currentValue = [3,4] => currentValue is an array so I run again the flatten with a depth of 1
        //cicle #4: the difference here liest to the fact that flattenExt execution goes not in the exit so previous = [], current = 3 =>  currentValue is not an array so I concat previous with current; [3]
        //etc...etx

        return previousValue.concat(
          Array.isArray(currentValue)
            ? flattenExt(currentValue, depth - 1)
            : currentValue
        );
      }, [])
    : //the exit strategy is returing a shallow copy of the array.
      //A shallow copy of an object is a copy whose properties share the
      //same references (point to the same underlying values) as those of the
      //source object from which the copy was made.
      //As a result, when you change either the source or the copy,
      //you may also cause the other object to change too
      inputArray.slice();
}
