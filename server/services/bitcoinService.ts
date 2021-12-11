import CoinGecko from 'coingecko-api';
import moment from 'moment';

import { BitcoinPrice } from 'common';

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
  // get all days 00:00 AM time in UNIX
  const unixDatesOnRange: number[] = convertDateRangeUnixMidnight(
    startDate,
    endDate
  );

  const CoinGeckoClient = new CoinGecko();

  const response: ICoinResponse =
    await CoinGeckoClient.coins.fetchMarketChartRange('bitcoin', {
      vs_currency: 'eur',
      // CoinGecko takes parameter UNIX time in s but returns UNIX time in ms
      from: unixDatesOnRange[0] / 1000,
      to:
        moment(unixDatesOnRange[unixDatesOnRange.length - 1])
          .add(1, 'hours')
          .valueOf() / 1000
    });

  const bitcoinPrices: BitcoinPrice[] = response.data.prices.map(
    ([time, price]) => ({
      time,
      price
    })
  );

  const midnightCoinPrices: BitcoinPrice[] = unixDatesOnRange.map(
    (unixDate: number) => closestBitCoinTime(bitcoinPrices, unixDate)
  );

  const subArrayPrices: BitcoinPrice[] =
    findLongestDecreasingSubArray(midnightCoinPrices);

  // One price is not trend, send empty array for easier frontend handling
  if (subArrayPrices.length === 1) return [];

  // Replace unix times rounded to closest 00:00
  return subArrayPrices.map((bitcoin: BitcoinPrice) => ({
    ...bitcoin,
    time: roundToClosestDayUnix(bitcoin.time)
  }));
};

const BitcoinService = {
  longestDownwardTrend
};

export default BitcoinService;
