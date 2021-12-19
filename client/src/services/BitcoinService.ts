import { ApiResponse, BitcoinPrice, BitcoinVolume, get } from 'common';

const BASE_URL = '/api/bitcoin/';

export const getLongestDownward = (
  startDate: string,
  endDate: string
): Promise<ApiResponse<BitcoinPrice[]>> =>
  get(`${BASE_URL}downwardtrend?startDate=${startDate}&endDate=${endDate}`);

export const getHighestTradingVolume = (
  startDate: string,
  endDate: string
): Promise<ApiResponse<BitcoinVolume>> =>
  get(
    `${BASE_URL}highesttradingvolume?startDate=${startDate}&endDate=${endDate}`
  );

export const getTimeMachine = (
  startDate: string,
  endDate: string
): Promise<ApiResponse<BitcoinPrice>> =>
  get(`${BASE_URL}timemachine?startDate=${startDate}&endDate=${endDate}`);
