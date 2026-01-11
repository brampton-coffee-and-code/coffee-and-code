const firstEvent = '2026-01-10';
const weeksToSkip: string[] = [
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
  const startDate = new Date(+year, +month - 1, +day);
  const today = new Date();
  const estOffset = -5 * 60; // EST is UTC-5
  const estTime = new Date(today.getTime() + (today.getTimezoneOffset() + estOffset) * 60000);
  const endDate = new Date(estTime.getFullYear() + 2, estTime.getMonth(), estTime.getDate());

  let currentDate = new Date(startDate);
  
  while (currentDate <= endDate) {
    const nextDateString = `${currentDate.getFullYear()}-`
      + `${pad((currentDate.getMonth() + 1).toString(), 2)}-`
      + `${pad(currentDate.getDate().toString(), 2)}`;

    if (!weeksToSkip.includes(nextDateString)) {
      allDates.push(new Date(currentDate));
    }
    
    currentDate.setDate(currentDate.getDate() + 14);
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
