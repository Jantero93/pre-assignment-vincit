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

export const roundToClosestDayUnix = (unixTime: number): number =>
  moment.utc(unixTime).add(12, 'hours').startOf('day').valueOf();

export const calcBusinessDays = (
  startDate: string | number,
  endDate: string | number
): number => {
  const day = moment(startDate);
  let businessDays = 0;

  while (day.isSameOrBefore(endDate, 'day')) {
    day.day() != 0 && day.day() != 6 && businessDays++;
    day.add(1, 'days');
  }
  return businessDays;
};
