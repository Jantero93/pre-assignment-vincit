import moment from 'moment';

import CoinGecko from 'coingecko-api';

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

  const start = moment.utc(startDate);
  /** If dates are same, and end date one day because start and end day must be included */
  const end = moment.utc(endDate).isSame(start)
    ? moment.utc(endDate).add(1, 'days')
    : moment.utc(endDate);

  console.log(`start`, start);
  console.log(`end`, end);
  const diffDays: number = end.diff(start, 'days');

  const CoinGeckoClient = new CoinGecko();

  const response: ICoinResponse =
    await CoinGeckoClient.coins.fetchMarketChartRange('bitcoin', {
      vs_currency: 'eur',
      from: start.unix(),
      to: end.unix()
    });

  if (!response.success) throw `GeckoCoin API couldn't handle request`;

  console.log(`response`, response);
  console.log(`diffDays`, diffDays);
  console.log(`start`, start.unix());
  console.log(`end`, end.unix());
};

const BitcoinService = {
  longestDownwardTrend
};

export default BitcoinService;
