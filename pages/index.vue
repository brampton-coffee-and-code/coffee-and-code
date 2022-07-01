<template>
  <div>
    <div class="title m-b-md">
      Coffee 'n' Code
    </div>

    <div class="sub-title">
      <a :href="`http://bit.ly/2UZMeks`" class="">
        {{ monthName }} {{ eventDate.getDate() }}, {{ eventDate.getFullYear() }}
        <font-awesome-icon icon="link" />
      </a>

      <br>11:00 am - 1:00 pm EST
    </div>

    <div class="sub-sub-title m-10">
      We are back in person at the
      <a
        href="https://springdalelibrary.org/"
        target="_blank"
      >Springdale Library</a>!
    </div>

    <div class="links">
      <a
        href="https://bit.ly/2UZMeks"
        rel="noopener"
      >Join our Discord Server</a>
      <a
        href="https://www.andrewjudd.ca"
        rel="noopener"
        target="_blank"
      >Andrew Judd</a>
      <a
        href="https://checkiton.us"
        rel="noopener"
        target="_blank"
      >Server Monitoring</a>
      <a
        href="https://www.icepets.com"
        rel="noopener"
        target="_blank"
      >IcePets.com</a>
      <a
        href="https://thegaminglist.com"
        rel="noopener"
        target="_blank"
      >Gaming Forum</a>
      <a
        href="https://onlinegaming.directory"
        rel="noopener"
        target="_blank"
      >Game Directory</a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    allDates() {
      return [
        '2022-01-15',
        '2022-01-29',
        '2022-02-12',
        '2022-02-26',
        '2022-03-12',
        '2022-03-26',
        '2022-04-09',
        '2022-05-07',
        '2022-05-21',
        '2022-06-04',
        '2022-06-18',
        '2022-07-16',
        '2022-07-30',
        '2022-08-13',
        '2022-08-27',
        '2022-09-10',
        '2022-09-24',
        '2022-10-08',
        '2022-10-22',
        '2022-11-05',
        '2022-11-19',
        '2022-12-03',
        '2022-12-17',
        '2022-12-31',
      ]
    },
    nextEvent() {
      const today = new Date(new Date().toJSON().slice(0, 10))
      today.setHours(0, 0, 0, 0)

      const dates = this.allDates.filter((d) => {
        const date = new Date(d)
        date.setHours(0, 0, 0, 0)

        return date >= today
      })

      if (!dates.length) {
        return this.allDates[this.allDates.length - 1]
      }

      return dates[0]
    },
    monthName() {
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
      return months[this.eventDate.getMonth()]
    },
    eventDate() {
      const date = new Date(this.nextEvent)
      date.setHours(0, 0, 0, 0)
      date.setDate(date.getDate() + 1)

      return date
    },
  },
}
</script>
