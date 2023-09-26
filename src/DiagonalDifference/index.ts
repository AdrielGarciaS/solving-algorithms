function diagonalDifference(arr: number[][]): number {
  const isFirstMatrixSize = arr[0].length === 1;

  const matrixSize = isFirstMatrixSize ? arr[0][0] : arr[0].length

  if (isFirstMatrixSize) arr.shift();

  const matrix = [...arr];

  let leftToRight = 0, leftToRightLastColumnSum = 0, leftToRightLastLineSum = 0;
  let rightToLeft = 0, rightToLeftLastColumnSum = 0, rightToLeftLastLineSum = 0;

  for (let line = 0; line < matrixSize; line++) {
    for (let columnLeftToRight = 0; columnLeftToRight < matrixSize; columnLeftToRight++) {

      // Sum from left to right

      if (line === 0 && columnLeftToRight === 0) {
        leftToRight += matrix[line][columnLeftToRight];
        leftToRightLastColumnSum = columnLeftToRight;
        leftToRightLastLineSum = line;
      }

      if (line > leftToRightLastLineSum && columnLeftToRight > leftToRightLastColumnSum) {
        leftToRight += matrix[line][columnLeftToRight];
        leftToRightLastColumnSum = columnLeftToRight;
        leftToRightLastLineSum = line;
      }

      // Sum from right to left

      const columnRightToLeft = (matrixSize - 1) - columnLeftToRight;

      if (line === 0 && columnRightToLeft === 0) {
        rightToLeft += matrix[line][columnLeftToRight];
        rightToLeftLastColumnSum = columnLeftToRight;
        rightToLeftLastLineSum = line;
      }

      if (line > rightToLeftLastLineSum && columnRightToLeft === (rightToLeftLastColumnSum - 1)) {
        rightToLeft += matrix[line][columnRightToLeft];
        rightToLeftLastColumnSum = columnRightToLeft;
        rightToLeftLastLineSum = line;
      }
    }
  }

  return Math.abs(leftToRight - rightToLeft);
}

const arr = [ [3], 
  [ 11, 2, 4 ], 
  [ 4, 5, 6 ], 
  [ 10, 8, -12 ],
]

console.log(diagonalDifference(arr))
