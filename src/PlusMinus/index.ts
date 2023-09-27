function plusMinus(arr: number[]): void {
  const result = arr.reduce((acc, curr) => {
      if (curr > 0) acc.positive += 1;
      
      if (curr < 0) acc.negative += 1;
      
      if (curr === 0) acc.zero += 1;
      
      return acc;
  }, { positive: 0, negative: 0, zero: 0 });
  
  const length = arr.length;
  
  const positive = (result.positive / length).toFixed(6);
  const negative = (result.negative / length).toFixed(6);
  const zero = (result.zero / length).toFixed(6);
  
  console.log(`${positive}\n${negative}\n${zero}`);
};

const array: number[] = [-4, 3, -9, 0, 4, 1];

plusMinus(array);
