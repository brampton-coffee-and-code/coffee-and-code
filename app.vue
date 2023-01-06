<template>
  <div class="cnc">
    <div class="cnc-background" />
    <div class="flex-center position-ref full-height">
      <div class="content">
        <div>
          <div class="title m-b-md">
            Coffee 'n' Code
          </div>

          <div class="sub-title">
            <a :href="`http://bit.ly/2UZMeks`" class="">
              {{ monthName }} {{ eventDate.day }}, {{ eventDate.year }}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="icon">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
              </svg>

            </a>

            <br>11:00 am - 1:00 pm EST
          </div>

          <div class="links">
            <a href="https://bit.ly/2UZMeks" rel="noopener">Join our Discord Server</a>
            <a href="https://www.andrewjudd.ca" rel="noopener" target="_blank">Andrew Judd</a>
            <a href="https://checkiton.us" rel="noopener" target="_blank">Server Monitoring</a>
            <a href="https://www.icepets.com" rel="noopener" target="_blank">IcePets.com</a>
            <a href="https://thegaminglist.com" rel="noopener" target="_blank">Gaming Forum</a>
            <a href="https://onlinegaming.directory" rel="noopener" target="_blank">Game Directory</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const firstEvent = '2023-01-14';
const weeksToSkip: string[] = [
  '2022-04-08',
  '2022-05-20',
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

  return allDates;
})();

const nextEvent: Date = ((): Date => {
  const eventDates = allDates;
  const today = new Date(new Date().toJSON().slice(0, 10))
  today.setHours(0, 0, 0, 0)

  const dates = eventDates.filter((d) => {
    const date = new Date(d)
    date.setHours(0, 0, 0, 0)

    return date >= today
  })

  if (!dates.length) {
    return eventDates[eventDates.length - 1]
  }

  return dates[0];
})();

const eventDate = (() => {
  console.log(nextEvent);
  return {
    year: nextEvent.getFullYear(),
    month: nextEvent.getMonth(),
    day: nextEvent.getDate(),
  }
})();

const monthName = (() => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  return months[+eventDate.month]
})();
</script>


<style>
html,
body,
.cnc {
  background-color: #fff;
  color: #636b6f;
  font-family: "Nunito", sans-serif;
  font-weight: 100;
  height: 100vh;
  margin: 0;
}

.full-height {
  height: 100vh;
}

.cnc-background {
  background-image: url("~/assets/coffee-n-code.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.3;
  height: 100%;
  position: absolute;
  width: 100%;
}

.flex-center {
  align-items: center;
  display: flex;
  justify-content: center;
}

.position-ref {
  position: relative;
}

.top-right {
  position: absolute;
  right: 10px;
  top: 18px;
}

.content {
  text-align: center;
}

.title {
  font-size: 84px;
}

.sub-title {
  font-size: 60px;
}

.sub-sub-title {
  font-size: 40px;
}

.icon {
  width: 50px;
  height: 50px
}

a {
  color: #636b6f;
  text-decoration: none;
}

.links>a {
  color: #636b6f;
  padding: 0 25px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.1rem;
  text-decoration: none;
  text-transform: uppercase;
}


@media screen and (max-width: 480px) {

  .icon {
    width: 20px;
    height: 20px
  }

  .title {
    font-size: 40px;
  }

  .sub-title {
    font-size: 30px;
  }

  .sub-sub-title {
    font-size: 20px;
  }

  .links>a {
    font-size: 10px;
  }
}


.m-10 {
  margin: 10px;
}

.m-b-md {
  margin-bottom: 30px;
}
</style>
