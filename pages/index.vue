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

            <br>11:00 am - 1:00 pm EST <a href="/api/calendar"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
</svg>
</a>
          </div>

          <div class="links">
            <a href="https://bit.ly/2UZMeks" rel="noopener">Join our Discord Server</a>
            <a href="https://www.andrewjudd.ca" rel="noopener" target="_blank">Andrew Judd</a>
            <a href="https://checkiton.us" rel="noopener" target="_blank">Server Monitoring</a>
            <a href="https://www.icepets.com" rel="noopener" target="_blank">IcePets.com</a>
            <a href="https://thegaminglist.com" rel="noopener" target="_blank">Gaming Forum</a>
            <a href="https://onlinegaming.directory" rel="noopener" target="_blank">Game Directory</a>
            <a href="https://bbguides.com" rel="noopener" target="_blank">Game Guides</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import allDates from  '../src/helpers/allDates';

const nextEvent: Date = ((): Date => {
  const eventDates = [
    ...allDates
  ];
  const today = new Date(new Date().toJSON().slice(0, 10))
  today.setHours(0, 0, 0, 0)

  const dates = eventDates.filter((d) => {
    const date = new Date(d)
    date.setHours(0, 0, 0, 0)

    return date >= today
  })
debugger
  if (!dates.length) {
    return eventDates[eventDates.length - 1]
  }

  return dates[0];
})();

const eventDate = (() => {
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

.w-10 {
  width: 2.5rem;
}

.h-10 {
  height: 2.5rem;
}


.m-10 {
  margin: 10px;
}

.m-b-md {
  margin-bottom: 30px;
}
</style>
