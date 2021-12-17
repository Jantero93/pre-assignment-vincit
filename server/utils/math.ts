import { BitcoinPrice, BitcoinVolume } from 'common';

/**
 * Find closest price from array.
 * @param bitcoinPrices Given Bitcoin prices array
 * @param timeToMatch Target time (UNIX ms)
 * @returns Bitcoin price, which time is closest to the target
 */
export const closestBitCoinTime = (
  bitcoinPrices: BitcoinPrice[],
  timeToMatch: number
): BitcoinPrice =>
  bitcoinPrices.reduce((prev, curr) =>
    Math.abs(curr.time - timeToMatch) < Math.abs(prev.time - timeToMatch)
      ? curr
      : prev
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
    // If current price same or lower than previous --> add to current array
    if (arrayToSearch[i - 1].price > arrayToSearch[i].price) {
      currentArray.push(arrayToSearch[i]);
    } else {
      // If current array is longer than max --> update max array
      if (maxArray.length < currentArray.length) {
        maxArray = currentArray;
      }
      // If current is not longer --> reset current array
      currentArray = [arrayToSearch[i]];
    }
  }

  // Compare current and max array after last element comparing
  if (maxArray.length < currentArray.length) maxArray = currentArray;

  return maxArray;
};

export const getTotalVolumeFromDay = (
  volumeArray: BitcoinVolume[]
): BitcoinVolume[] => {
  console.log('volumeArray', volumeArray);
  return volumeArray;
};
