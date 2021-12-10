import CoinGecko from 'coingecko-api';

import moment from 'moment';

import { convertDateRangeUnixMidnight } from '../utils/dates';

const longestDownwardTrend = async (
  startDate: string,
  endDate: string
): Promise<void> => {
  interface ICoinResponse {
    success: boolean;
    message: string;
    code: number;
    data: {
      prices: number[][];
      market_caps: number[][];
      total_volumes: number[][];
    };
  }

  if (moment(startDate).isAfter(moment(endDate)))
    throw `End date begins before start date`;

  // get all days 00:00 AM time in UNIX
  const unixDatesOnRange: number[] = convertDateRangeUnixMidnight(
    startDate,
    endDate
  );

  const CoinGeckoClient = new CoinGecko();

  const response: ICoinResponse =
    await CoinGeckoClient.coins.fetchMarketChartRange('bitcoin', {
      vs_currency: 'eur',
      from: unixDatesOnRange[0],
      to: unixDatesOnRange[unixDatesOnRange.length - 1]
    });

  if (!response.success) throw `Geckocoin api couldn't handle request`;

  console.log(`unixDatesOnRange`, unixDatesOnRange);
};

const BitcoinService = {
  longestDownwardTrend
};

export default BitcoinService;
