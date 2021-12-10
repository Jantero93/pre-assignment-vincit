import { BitcoinPrice } from '../services/bitcoinService';

export const closestBitCoinTime = (
  bitcoinPrices: BitcoinPrice[],
  timeToMatch: number
): BitcoinPrice =>
  bitcoinPrices.reduce((a, b) =>
    Math.abs(b.time - timeToMatch) < Math.abs(a.time - timeToMatch) ? b : a
  );
