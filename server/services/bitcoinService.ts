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
      prices: Array<Array<number>>;
      market_caps: Array<Array<number>>;
      total_volumes: Array<Array<number>>;
    };
  }

  const CoinGeckoClient = new CoinGecko();
  const start = moment.utc(startDate);
  const end = moment.utc(endDate);
  const diffDays: number = end.diff(start, 'days');

  const response: ICoinResponse =
    await CoinGeckoClient.coins.fetchMarketChartRange('bitcoin', {
      vs_currency: 'eur',
      from: start.unix(),
      to: end.unix()
    });

  if (!response.success) throw `Geckocoin api couldn't handle request`;

  console.log(`response`, response);
  console.log(`diffDays`, diffDays);
  console.log(`start`, start.unix());
  console.log(`end`, end.unix());
};

const BitcoinService = {
  longestDownwardTrend
};

export default BitcoinService;
