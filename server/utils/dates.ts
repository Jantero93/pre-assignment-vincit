import moment from 'moment';

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
