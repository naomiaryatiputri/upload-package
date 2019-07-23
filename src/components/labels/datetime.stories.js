import { storiesOf } from '@storybook/vue'
import LabelDatetime from '@/components/labels/Datetime.vue'

storiesOf('Components|Labels/Datetime', module)
  .add('Default', () => ({
    components: { LabelDatetime },
    template: '<label-datetime dt="1999-10-16 19:00:00"></label-datetime>',
  }))
  .add('Default w/ font and spacing settings', () => ({
    components: { LabelDatetime },
    template: '<label-datetime dt="1999-10-16 19:00:00" font-family="font-pt-sans" font-size="text-lg" spacing="ml-32"></label-datetime>',
  }))
  .add('Default w/ dot separator', () => ({
    components: { LabelDatetime },
    template: '<label-datetime dt="1999-10-16 19:00:00" font-family="font-pt-sans" font-size="text-sm" format="default-separator"></label-datetime>',
  }))
  .add('Default w/ text colour', () => ({
    components: { LabelDatetime },
    template: '<label-datetime dt="1999-10-16 19:00:00" font-family="font-pt-sans" font-size="text-sm" format="default-separator" text-colour="text-red-thunderbird-700"></label-datetime>',
  }))
  .add('Day & Date', () => ({
    components: { LabelDatetime },
    template: '<label-datetime dt="1999-10-16 19:00:00" font-family="font-pt-sans" font-size="text-sm" format="day-date"></label-datetime>',
  }))
  .add('Date only', () => ({
    components: { LabelDatetime },
    template: '<label-datetime dt="1999-10-16 19:00:00" font-family="font-pt-sans" font-size="text-sm" format="date"></label-datetime>',
  }))
  .add('Time only', () => ({
    components: { LabelDatetime },
    template: '<label-datetime dt="1999-10-16 19:00:00" font-family="font-pt-sans" font-size="text-sm" format="time"></label-datetime>',
  }))