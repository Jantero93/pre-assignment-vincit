import { get } from 'common';

const BASE_URL = '/api/bitcoin/';

export const getLongestDownward = (startDate: string, endDate: string): any =>
  get(`${BASE_URL}/downwardtrend?startDate=${startDate}&endDate=${endDate}`);
