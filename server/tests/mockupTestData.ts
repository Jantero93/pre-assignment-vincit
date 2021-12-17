import { BitcoinPrice, BitcoinVolume } from 'common';

export const testData_1: BitcoinPrice[] = [
  { price: 321, time: 222 },
  { price: 999, time: 256 },
  { price: 888, time: 300 },
  { price: 888, time: 402 },
  { price: 111, time: 402 }
];

export const testDownwardResult_1: BitcoinPrice[] = [
  { price: 999, time: 256 },
  { price: 888, time: 300 }
];

export const testData_2: BitcoinPrice[] = [
  { price: 535, time: 222 },
  { price: 777, time: 256 },
  { price: 888, time: 300 },
  { price: 888, time: 402 },
  { price: 111, time: 4099 }
];

export const testDownwardResult_2: BitcoinPrice[] = [
  { price: 888, time: 402 },
  { price: 111, time: 4099 }
];

export const testVolume_1: BitcoinVolume[] = [
  { time: 1300000000, volume: 222 },
  { time: 1639801574, volume: 111 },
  { time: 1639801576, volume: 100 },
  { time: 1639801600, volume: 200 }
];

export const volumeResult_1: BitcoinVolume = {
  time: 1639801574,
  volume: 411
};
