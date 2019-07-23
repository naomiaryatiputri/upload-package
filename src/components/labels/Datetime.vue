<template lang="pug">
time(:class='classes', :datetime='dt') {{ labelName }}
</template>
<script>
export default {
  name: 'LabelDatetime',
  computed: {
    classes() {
      let classes = [];
      if (this.textColour) classes.push(this.textColour)
      if (this.fontFamily) classes.push(this.fontFamily)
      if (this.fontSize) classes.push(this.fontSize)
      if (this.spacing) classes.push(this.spacing)
      return classes.join(' ');
    },
    labelName() {
      const D = new Date(this.dt)
      const date = D.getDate()
      const day = D.getDay()
      const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu',]
      const month = D.getMonth()
      const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
      const year = D.getFullYear()
      const hours = D.getHours() < 10 ? '0' + D.getHours() : D.getHours()
      const minutes = D.getMinutes() < 10 ? '0' + D.getMinutes() : D.getMinutes()
      let res;

      switch(this.format) {
        case 'date':
          res = date + ' ' + months[month] + ' ' + year
          break
        case 'date-month':
          res = date + ' ' + months[month]
          break
        case 'day-date':
          res = days[day] + ', ' + date + ' ' + months[month] + ' ' + year
          break
        case 'default-separator':
          res = date + ' ' + months[month] + ' ' + year + ' · ' + hours + ':' + minutes + ' WIB'
          break
        case 'time':
          res = hours + ':' + minutes + ' WIB'
          break
        case 'default':
        default:
          res = date + ' ' + months[month] + ' ' + year + ' ' + hours + ':' + minutes + ' WIB'
      }
      return res;
    }
  },
  props: {
    dt: String,
    format: String,
    fontFamily: String,
    fontSize: String,
    spacing: String,
    textColour: {
      type: String,
      default: 'text-gray-450'
    },
  }
}
</script>
