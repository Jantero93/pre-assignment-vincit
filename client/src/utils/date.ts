import moment from 'moment';

/**
 * @param start Start date
 * @param end End Date
 * @returns true if start date is before end date, or they are same
 */
export const isStartBeforeEnd = (start: string, end: string): boolean =>
  moment(start).isBefore(moment(end)) || moment(start).isSame(moment(end));

  /**
   * Formats date to string
   * @param format Format
   * @param date optional - date to format, if not given current time will be formatted
   * @returns date string
   */
export const formatDate = (format: string, date?: string | number): string =>
  date ? moment(date).format(format) : moment().format(format);
