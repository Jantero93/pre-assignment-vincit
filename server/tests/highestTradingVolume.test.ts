import { BitcoinVolume } from 'common';
import * as mockupData from './mockupTestData';

import { getTotalVolumeFromDay } from '../utils/math';

describe('Longest downward trend', () => {
  it('Calculate trading volume from day # 1', () => {
    const result: BitcoinVolume = getTotalVolumeFromDay(
      mockupData.testVolume_1,
      1639785600
    );

    expect(result).toStrictEqual(mockupData.volumeResult_1);
  });
});
