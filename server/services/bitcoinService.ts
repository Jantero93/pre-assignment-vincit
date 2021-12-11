import CoinGecko from 'coingecko-api';
import moment from 'moment';

/** Utils */
import { convertDateRangeUnixMidnight } from '../utils/dates';
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

export interface BitcoinPrice {
  time: number;
  price: number;
}

const longestDownwardTrend = async (
  startDate: string,
  endDate: string
): Promise<void> => {
  if (moment(startDate).isAfter(moment(endDate)))
    throw new Error(`End date begins before start date`);

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

  if (!response.success)
    throw new Error(`Geckocoin api couldn't handle request`);

  const bitcoinPrices: BitcoinPrice[] = response.data.prices.map(
    ([time, price]) => ({
      time,
      price
    })
  );

  const closestStart: BitcoinPrice = closestBitCoinTime(
    bitcoinPrices,
    unixDatesOnRange[0]
  );

  const closestEnd: BitcoinPrice = closestBitCoinTime(
    bitcoinPrices,
    unixDatesOnRange[unixDatesOnRange.length - 1]
  );

  const mockUparray: BitcoinPrice[] = [
    { price: 321, time: 222 },
    { price: 999, time: 256 },
    { price: 888, time: 300 },
    { price: 888, time: 402 },
    { price: 111, time: 402 }
  ];

  const bitcoinpricesNight: BitcoinPrice[] = unixDatesOnRange.map(
    (date: number) => closestBitCoinTime(bitcoinPrices, date)
  );

  console.log(`unixDatesOnRange`, unixDatesOnRange);
  console.log(`response eka`, bitcoinPrices[0]);
  console.log('vika ', bitcoinPrices[bitcoinPrices.length - 1]);
  console.log(`closestStart`, closestStart);
  console.log(`closestEnd`, closestEnd);
  console.log(`findSub`, findLongestDecreasingSubArray(mockUparray));
  console.log(`bitcoinpricesNight`, bitcoinpricesNight);
};

const BitcoinService = {
  longestDownwardTrend
};

export default BitcoinService;
