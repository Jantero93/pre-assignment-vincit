import CoinGecko from 'coingecko-api';

/** Types */
import { BitcoinPrice, BitcoinVolume } from 'common';
import { ICoinResponse } from './bitcoinService';

/** Utils */
import { convertDateRangeUnixMidnight } from '../utils/dates';
import moment from 'moment';

const geckocoinResponse = async (
  start: string | number,
  end: string | number
): Promise<ICoinResponse> => {
  const CoinGeckoClient = new CoinGecko();

  return await CoinGeckoClient.coins.fetchMarketChartRange('bitcoin', {
    vs_currency: 'eur',
    from: moment.utc(start).unix(),
    to: moment.utc(end).endOf('days').add(1, 'hours').unix()
  });
};

const getBitcoinPricesWithinDate = async (
  startDate: string,
  endDate: string
): Promise<BitcoinPrice[]> => {
  const unixDatesOnRange: number[] = convertDateRangeUnixMidnight(
    startDate,
    endDate
  );

  const response: ICoinResponse = await geckocoinResponse(
    unixDatesOnRange[0],
    unixDatesOnRange[unixDatesOnRange.length - 1]
  );

  return response.data.prices.map(([time, price]) => ({
    time,
    price
  })) as BitcoinPrice[];
};

const getBitcoinVolume = async (
  startDate: string,
  endDate: string
): Promise<BitcoinVolume[]> => {
  const response: ICoinResponse = await geckocoinResponse(startDate, endDate);

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
