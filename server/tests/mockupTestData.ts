import { BitcoinPrice } from '../services/bitcoinService';

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
