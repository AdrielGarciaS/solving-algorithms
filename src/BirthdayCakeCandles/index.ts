function birthdayCakeCandles(candles: number[]): number {
  /**
   * Easy way:
  const maxHeight = Math.max(...candles);

  const maxCandleCount = candles.filter(candle => candle === maxHeight).length;

  return maxCandleCount;
  */

  let maxHeight = Number.MIN_SAFE_INTEGER;
  let maxHeightCount = 0;

  for (let i = 0; i < candles.length; i++) {
    if (maxHeight === candles[i]) maxHeightCount += 1;

    if (candles[i] > maxHeight) {
      maxHeight = candles[i];
      maxHeightCount = 1;
    }
  }

  return maxHeightCount;
}

const candles = [3,2,1,3];

console.log(birthdayCakeCandles(candles))