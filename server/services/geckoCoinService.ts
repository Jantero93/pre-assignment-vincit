import CoinGecko from 'coingecko-api';

/** Types */
import { BitcoinPrice, BitcoinVolume } from 'common';
import { ICoinResponse } from './bitcoinService';

/** Utils */
import { convertDateRangeUnixMidnight } from '../utils/dates';
import moment from 'moment';

const getBitcoinPricesWithinDate = async (
  startDate: string,
  endDate: string
): Promise<BitcoinPrice[]> => {
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

  return response.data.prices.map(([time, price]) => ({
    time,
    price
  })) as BitcoinPrice[];
};

const getBitcoinVolume = async (
  startDate: string,
  endDate: string
): Promise<BitcoinVolume[]> => {
  const CoinGeckoClient = new CoinGecko();

  const response: ICoinResponse =
    await CoinGeckoClient.coins.fetchMarketChartRange('bitcoin', {
      vs_currency: 'eur',
      from: moment.utc(startDate).unix(),
      to: moment.utc(endDate).endOf('days').add(1, 'hours').unix()
    });

  return response.data.total_volumes.map(([time, volume]) => ({
    time,
    volume
  })) as BitcoinVolume[];
};

const GeckocoinService = {
  getBitcoinPricesWithinDate,
  getBitcoinVolume
};

export default GeckocoinService;
