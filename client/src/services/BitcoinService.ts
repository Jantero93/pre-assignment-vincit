import { BitcoinPrice, BitcoinVolume, get } from 'common';

const BASE_URL = '/api/bitcoin/';

export const getLongestDownward = async (
  startDate: string,
  endDate: string
): Promise<BitcoinPrice[]> =>
  get(
    `${BASE_URL}downwardtrend?startDate=${startDate}&endDate=${endDate}`
  ).then((response) => response.data as BitcoinPrice[]);

export const getHighestTradingVolume = async (
  startDate: string,
  endDate: string
): Promise<BitcoinVolume> =>
  await get(
    `${BASE_URL}highesttradingvolume?startDate=${startDate}&endDate=${endDate}`
  ).then((response) => response.data as BitcoinVolume);

export const getTimeMachine = (
  startDate: string,
  endDate: string
): Promise<BitcoinPrice[]> =>
  get(`${BASE_URL}timemachine?startDate=${startDate}&endDate=${endDate}`).then(
    (response) => response.data as BitcoinPrice[]
  );
