import allDates from '../src/helpers/allDates';

export const useNextEvent = () => {
  const nextEvent: Date = ((): Date => {
    const eventDates = [...allDates];
    const now = new Date();
    const estOffset = -5 * 60; // EST is UTC-5
    const estTime = new Date(now.getTime() + (now.getTimezoneOffset() + estOffset) * 60000);
    const today = new Date(estTime.getFullYear(), estTime.getMonth(), estTime.getDate());

    const dates = eventDates.filter((d) => {
      const date = new Date(d);
      date.setHours(0, 0, 0, 0);
      return date >= today;
    });

    if (!dates.length) {
      return eventDates[eventDates.length - 1];
    }

    return dates[0];
  })();

  const eventDate = {
    year: nextEvent.getFullYear(),
    month: nextEvent.getMonth(),
    day: nextEvent.getDate(),
  };

  const monthName = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ][eventDate.month];

  return { nextEvent, eventDate, monthName };
};