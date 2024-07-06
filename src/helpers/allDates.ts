const firstEvent = '2024-07-13';
const weeksToSkip: string[] = [
  '2024-05-11'
];

const extraWeeks: string[] = [
];

function pad(n: string, width: number, z: string = '0') {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

const allDates = (() => {
  const allDates = [];
  const [year, month, day] = firstEvent.split('-');
  const currentDate = new Date(+year, +month - 1, +day);

  for (let weekNumber = 0; weekNumber < 26; weekNumber++) {
    const nextDate = new Date(currentDate);

    nextDate.setHours(0, 0, 0, 0);
    nextDate.setDate(nextDate.getDate() + (2 * 7 * weekNumber));

    const nextDateString = `${nextDate.getFullYear()}-`
      + `${pad((nextDate.getMonth() + 1).toString(), 2)}-`
      + `${pad(nextDate.getDate().toString(), 2)}`;

    if (weeksToSkip.includes(nextDateString)) {
      continue;
    }

    allDates.push(nextDate);
  }

  extraWeeks.forEach(week => {
    const [year, month, day] = week.split('-');
    const currentDate = new Date(+year, +month - 1, +day);
    currentDate.setHours(0, 0, 0, 0);

    allDates.push(currentDate);
  })

  return allDates.sort((a, b) => a.getTime() - b.getTime());
})();

export default allDates;