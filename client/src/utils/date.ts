import moment from 'moment';

export const isStartBeforeEnd = (start: string, end: string): boolean =>
  moment(start).isBefore(moment(end)) || moment(start).isSame(moment(end));
