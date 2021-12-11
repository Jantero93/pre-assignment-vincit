import { ApiResponse, BitcoinPrice, get } from 'common';

const BASE_URL = '/api/bitcoin/';

export const getLongestDownward = (
  startDate: string,
  endDate: string
): Promise<ApiResponse<BitcoinPrice[]>> =>
  get(`${BASE_URL}/downwardtrend?startDate=${startDate}&endDate=${endDate}`);
