import moment from 'moment';

/**
 * Generates UNIX dates @ 00:00 AM from given date range
 * Function includes end dates "next midnight also" e.g end date 25 december will include december 26 00:00 AM
 * @param startDate
 * @param endDate
 * @returns array of UNIX times @ 00:00 AM
 */
export const convertDateRangeUnixMidnight = (
  startDate: string,
  endDate: string
): number[] => {
  const start = moment.utc(startDate);
  // include ending day in range
  const end = moment.utc(endDate).add(1, 'days');

  const unixDatesOnRange: number[] = [];

  while (start.isBefore(end)) {
    unixDatesOnRange.push(start.utc().valueOf());
    start.add(1, 'days');
  }

  return unixDatesOnRange;
};

/**
 * @param unixTime Time to round in UNIX
 * @returns rounded to closest day in UNIX
 */
export const roundToClosestDayUnix = (unixTime: number): number =>
  moment.utc(unixTime).add(12, 'hours').startOf('day').valueOf();
