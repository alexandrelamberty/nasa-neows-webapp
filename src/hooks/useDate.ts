/** */
export const useDateAdd = (date: Date, days: number): Date => {
  const currentDate = new Date(date);
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
export const useDateSubstract = (date: Date, days: number): Date => {
  const currentDate = new Date(date);
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
export const useDateRange = (startDate: Date,
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
