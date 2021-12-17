/** Services */
import GeckocoinService from './geckoCoinService';

/** Types */
import { BitcoinPrice, BitcoinVolume } from 'common';

/** Utils */
import {
  convertDateRangeUnixMidnight,
  roundToClosestDayUnix
} from '../utils/dates';
import {
  closestBitCoinTime,
  getTotalVolumeFromDay,
  findLongestDecreasingSubArray
} from '../utils/math';
export interface ICoinResponse {
  success: boolean;
  message: string;
  code: number;
  data: {
    prices: number[][];
    market_caps: number[][];
    total_volumes: number[][];
  };
}

const longestDownwardTrend = async (
  startDate: string,
  endDate: string
): Promise<BitcoinPrice[]> => {
  const unixDatesOnRange: number[] = convertDateRangeUnixMidnight(
    startDate,
    endDate
  );

  const bitcoinPrices: BitcoinPrice[] =
    await GeckocoinService.getBitcoinPricesWithinDate(startDate, endDate);

  // Find closest midnight price per day
  const midnightCoinPrices: BitcoinPrice[] = unixDatesOnRange.map(
    (unixDate: number) => closestBitCoinTime(bitcoinPrices, unixDate)
  );

  const subArrayPrices: BitcoinPrice[] =
    findLongestDecreasingSubArray(midnightCoinPrices);

  // One price is not trend, send empty array for indicating no subarray found
  if (subArrayPrices.length === 1) return [];

  // Replace unix times rounded to closest 00:00
  return subArrayPrices.map((bitcoin: BitcoinPrice) => ({
    ...bitcoin,
    time: roundToClosestDayUnix(bitcoin.time)
  }));
};

const highestTradingVolume = async (
  startDate: string,
  endDate: string
): Promise<void> => {
  const volumeArray: BitcoinVolume[] = await GeckocoinService.getBitcoinVolume(
    startDate,
    endDate
  );

  console.log(`volumeArray.length`, volumeArray.length);

  const volumeEachDay: BitcoinVolume[] = convertDateRangeUnixMidnight(
    startDate,
    endDate
  ).map((date: number) => getTotalVolumeFromDay(volumeArray, date));

  console.log(`volumeEachDay`, volumeEachDay);
  console.log(`volumeEachDay.length`, volumeEachDay.length);
};

const BitcoinService = {
  highestTradingVolume,
  longestDownwardTrend
};

export default BitcoinService;
