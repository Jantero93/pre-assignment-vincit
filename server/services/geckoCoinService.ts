import CoinGecko from 'coingecko-api';

/** Types */
import { BitcoinPrice, BitcoinVolume } from 'common';

/** Utils */
import { convertDateRangeUnixMidnight } from '../utils/dates';
import moment from 'moment';

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

/**
 * Fetch geckocoin data. Currency: Euro, Coin: Bitcoin
 * @param start starting date -> moment(start)
 * @param end ending date -> moment(end)
 * @returns general api response from geckocoin
 */
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

/**
 * Get bitcoin prices from general api response
 * @param startDate -> moment(startDate)
 * @param endDate -> moment(endDate)
 * @returns Array of BitcoinPrice objects
 */
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

/**
 * Get bitcoin volumes from general api response
 * @param startDate -> moment(startDate)
 * @param endDate -> moment(endDate)
 * @returns Array of BitcoinVolume objects
 */
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
