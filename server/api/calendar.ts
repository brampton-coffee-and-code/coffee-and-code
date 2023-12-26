import ics, { EventAttributes } from 'ics'
import allDates from '../../src/helpers/allDates';

export default defineEventHandler(({req, res}) => {
    const allEvents: EventAttributes[] = allDates.map(date => {
    const dateObject = new Date(date);

    const year = dateObject.getUTCFullYear();
    const month = dateObject.getUTCMonth() + 1; // Month is zero-based, so add 1
    const day = dateObject.getUTCDate();

    const event = {
      title: 'Coffee and Code',
      description: `Are you a software developer looking to connect with other developers? Or are you looking to start your development journey?  Then this event is for you!\nNo formal lesson/lecture just fellow technology people looking to connect!`,
      start: [year, month, day, 11, 0],
      duration: { hours: 2 },
      busyStatus: 'BUSY',
      location: 'Springdale Library - 10705 Bramalea Road',
      geo: {
        lat: 43.7579167,
        lon: -79.7613611,
      }
    };

    return event as EventAttributes;
  });

  const calendar = ics.createEvents(allEvents);

   // Set response headers for file download
   res.setHeader('Content-Type', 'text/calendar');
   res.setHeader('Content-Disposition', 'attachment; filename=coffee-and-code.ics');

  res.end(calendar.value!);
});