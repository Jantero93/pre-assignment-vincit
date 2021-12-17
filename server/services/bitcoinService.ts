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

  // Find closest midnight price
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
  const data: BitcoinVolume[] = await GeckocoinService.getBitcoinVolume(
    startDate,
    endDate
  );
  console.log(data[0]);
};
const BitcoinService = {
  highestTradingVolume,
  longestDownwardTrend
};

export default BitcoinService;
