function miniMaxSum(arr: number[]): void {
  /** ES6+
  const minMaxIndexes = arr.reduce((acc, curr, index) => {
    if (curr < acc.min) {
      acc.min = curr;
      acc.minIndex = index;
    }

    if (curr > acc.max) {
      acc.max = curr;
      acc.maxIndex = index;
    }

    return acc;
  }, { min: Number.MAX_SAFE_INTEGER, max: 0, minIndex: 0, maxIndex: 0 })

  const miniMaxSum = arr.reduce((acc, curr, index) => {
    
    if (index !== minMaxIndexes.minIndex) acc.mini += curr;
    
    if (index !== minMaxIndexes.maxIndex) acc.max += curr;

    return acc;
  }, { mini: 0, max: 0 });

  console.log(`${miniMaxSum.max} ${miniMaxSum.mini}`);
   */

  let min = Number.MAX_SAFE_INTEGER, minIndex = 0,
      max = 0, maxIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      minIndex = i;
    }

    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
  }

  let minSum = 0, maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i !== minIndex) minSum += arr[i];
    
    if (i !== maxIndex) maxSum += arr[i];
  }

  console.log(`${maxSum} ${minSum}`);
}

const values = [1,2,3,4,5];
// const values = [5,5,5,5,5];

miniMaxSum(values);
