/**
 * 
 * @param date 
 * @param days 
 * @returns 
 */
export const dateAdd = (date: Date, days: number): Date => {
  const currentDate = new Date((date).setHours(12, 0, 0, 0));
  var index = 0;
  while (index < days) {
    index++
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return currentDate;
}

/**
 * 
 * @param date 
 * @param days 
 * @returns 
 */
export const dateSubsract = (date: Date, days: number): Date => {
  const currentDate = new Date((date).setHours(12, 0, 0, 0));
  var index = 0;
  while (index < days) {
    index++
    currentDate.setDate(currentDate.getDate() - 1);
  }
  return currentDate;
}

/**
 * 
 * @param startDate 
 * @param endDate 
 * @param includeEndDate 
 * @returns An array of dates
 */
export const dateRange = (startDate: Date,
  // FIXME: noon date
  endDate: Date,
  includeEndDate?: boolean): Date[] => {
  const dates = [];
  const currentDate = new Date(startDate);
  while (currentDate < endDate) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  if (includeEndDate) dates.push(endDate);
  return dates;
}

export const dateFullString = (date: Date): string => {
  return dateDateString(date) + " " + dateTimeString(date);
};

export const dateDateString = (date: Date): string => {
  return date.toISOString().slice(0, 10);
};

export const dateTimeString = (date: Date): string => {
  return date.toTimeString().slice(0, 8);
};
