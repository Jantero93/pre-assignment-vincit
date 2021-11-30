export type ParsedDate = {
  day: string;
  month: string;
  year: string;
};

export const dateParser = (inputDate: string): ParsedDate => {
  const splitDate: string[] = inputDate.split('-');
  return {
    day: splitDate[2],
    month: splitDate[1],
    year: splitDate[0]
  };
};

export const isStartBeforeEnd = (start: string, end: string): boolean =>
  new Date(start).valueOf() < new Date(end).valueOf();
