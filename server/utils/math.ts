import { BitcoinPrice } from '../services/bitcoinService';

/**
 * Find closest price from array.
 * @param bitcoinPrices Given BitcoinPrices array
 * @param timeToMatch Target time (UNIX ms)
 * @returns BitCoin price, which time is closest to the target
 */
export const closestBitCoinTime = (
  bitcoinPrices: BitcoinPrice[],
  timeToMatch: number
): BitcoinPrice =>
  bitcoinPrices.reduce((a, b) =>
    Math.abs(b.time - timeToMatch) < Math.abs(a.time - timeToMatch) ? b : a
  );

/**
 * Finds longest subarray which prices are consecutive same or descending
 * @param arrayToSearch Array to search from
 * @returns Subarray with longest non-increasing prices
 */
export const findLongestDecreasingSubArray = (
  arrayToSearch: BitcoinPrice[]
): BitcoinPrice[] => {
  if (!arrayToSearch.length) return [];

  let maxArray: BitcoinPrice[] = [arrayToSearch[0]];
  let currentArray: BitcoinPrice[] = [arrayToSearch[0]];

  // Traverse array from second element (compare to previous)
  for (let i = 1; i < arrayToSearch.length; i++) {
    // If current price same or lower --> increase current array
    if (arrayToSearch[i - 1].price >= arrayToSearch[i].price) {
      currentArray.push(arrayToSearch[i]);
    } else {
      // If current array is longer than max --> update
      if (maxArray.length < currentArray.length) {
        maxArray = currentArray;
      }
      // If current is not longer --> reset current array
      currentArray = [arrayToSearch[i]];
    }
  }

  // Compare current and max array after last element comparing
  if (maxArray.length < currentArray.length) maxArray = currentArray;

  // required maximum length
  return maxArray;
};
