import { BitcoinPrice } from 'common';

import * as mockUpData from './mockupTestData';
import {
  closestBitCoinTime,
  findLongestDecreasingSubArray
} from '../utils/math';

import { convertDateRangeUnixMidnight } from '../utils/dates';

describe('Longest downward trend', () => {
  it('Longest downward trend from mockup data # 1', () => {
    const result: BitcoinPrice[] = findLongestDecreasingSubArray(
      mockUpData.testData_1
    );
    expect(result).toStrictEqual(mockUpData.testDownwardResult_1);
  });

  it('Longest downward trend from mockup data # 2', () => {
    const result: BitcoinPrice[] = findLongestDecreasingSubArray(
      mockUpData.testData_2
    );
    expect(result).toStrictEqual(mockUpData.testDownwardResult_2);
  });

  it('Find closest bitcoin price by time from mockup data # 1', () => {
    const result: BitcoinPrice = closestBitCoinTime(mockUpData.testData_1, 301);
    expect(result).toStrictEqual({ price: 888, time: 300 });
  });

  it('Find closest bitcoin price by time from mockup data # 1', () => {
    const result: BitcoinPrice = closestBitCoinTime(mockUpData.testData_1, 240);
    expect(result).toStrictEqual({ price: 999, time: 256 });
  });

  it('Create UNIX times @ 00:00 from date string # 1', () => {
    const startDate = '2021-01-28';
    const endDate = '2021-01-30';
    const result: number[] = convertDateRangeUnixMidnight(startDate, endDate);
    expect(result).toStrictEqual([1611792000000, 1611878400000, 1611964800000]);
  });

  it('Create UNIX times @ 00:00 from date string # 2', () => {
    const startDate = '2021-03-26';
    const endDate = '2021-03-26';
    const result: number[] = convertDateRangeUnixMidnight(startDate, endDate);
    expect(result).toStrictEqual([1616716800000]);
  });
});
