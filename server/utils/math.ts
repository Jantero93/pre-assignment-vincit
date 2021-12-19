import { BitcoinPrice, BitcoinVolume } from 'common';
import moment from 'moment';

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
  if (!arrayToSearch?.length) return [];

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

/**
 * Calculates total volume of given day in bitcoin volume array
 * @param volumeArray Array of bitcoin volumes
 * @param date Which date total volume calculated
 * @returns total bitcoin volume on given day
 */
export const getTotalVolumeFromDay = (
  volumeArray: BitcoinVolume[],
  date: number
): BitcoinVolume =>
  volumeArray
    .filter((bitcoin: BitcoinVolume) =>
      moment(bitcoin.time).isSame(date, 'days')
    )
    .reduce((prev: BitcoinVolume, curr: BitcoinVolume) => ({
      ...prev,
      volume: prev.volume + curr.volume
    }));

export const timeMachineMath = (priceArray: BitcoinPrice[]): BitcoinPrice[] => {
  let maxDiff = -1;

  let lowestCoin: BitcoinPrice = priceArray[0];
  let highestCoin: BitcoinPrice = priceArray[1];

  for (let i = 0; i < priceArray.length; i++) {
    for (let j = i + 1; j < priceArray.length; j++) {
      if (priceArray[j].price - priceArray[i].price > maxDiff) {
        maxDiff = priceArray[j].price - priceArray[i].price;
        lowestCoin = priceArray[i];
        highestCoin = priceArray[j];
      }
    }
  }

  return maxDiff <= 0 ? [] : [lowestCoin, highestCoin];
};
