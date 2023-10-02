function staircase(n: number): void {
  // New is cleaner
  Array.from({ length: n }, (_, index) => {
    let value = "";

    Array.from({ length: index + 1 }, () => (value += "#"));

    console.log(value.padStart(n, " "));
  });

  // Old school
  const lines: string[][] = [];

  for (let line = 0; line < n; line++) {
    const lineSpaces = n - (line + 1);
    const lineValue: string[] = [];

    for(let column = 0; column < n; column++) {
      lineValue[column] = column + 1 <= lineSpaces ? ' ' : '#'
    }

    lines[line] = lineValue;
  }

  for (const line in lines) {
    let lineValue = '';

    for (const column in lines[line]) {
      lineValue += lines[line][column];
    }

    console.log(lineValue);
  }
}

staircase(4);
