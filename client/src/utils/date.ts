import moment from 'moment';

/**
 * @param start Start date
 * @param end End Date
 * @returns true if start date is before end date, or they are same
 */
export const isStartBeforeEnd = (start: string, end: string): boolean =>
  moment(start).isBefore(moment(end)) || moment(start).isSame(moment(end));
