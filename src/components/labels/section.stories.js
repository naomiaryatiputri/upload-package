import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'
import LabelSection from '@/components/labels/Section.vue'

storiesOf('Components|Labels/Section', module)
  .addDecorator(StoryRouter())
  .add('Default', () => ({
    components: { LabelSection },
    template: '<label-section label="liputan chusus"></label-section>',
  }))
  .add('Default w/ font settings', () => ({
    components: { LabelSection },
    template: '<label-section font-family="font-pt-sans" font-size="text-sm" label="liputan chusus" text-colour="text-blue-royal"></label-section>',
  }))
  .add('Default w/ left border', () => ({
    components: { LabelSection },
    template: '<label-section font-family="font-pt-sans" font-size="text-sm" label="liputan chusus" left-border="border-blue-royal" text-colour="text-blue-royal"></label-section>',
  }))
  .add('Link w/ right arrow', () => ({
    components: { LabelSection },
    template: '<label-section font-family="font-pt-sans" font-size="text-sm" label="liputan chusus" :right-arrow="true" text-colour="text-blue-royal" to="/"></label-section>',
  }))
  .add('Link w/ left border & right arrow', () => ({
    components: { LabelSection },
    template: '<label-section font-family="font-pt-sans" font-size="text-sm" label="liputan chusus" left-border="border-blue-royal" :right-arrow="true" text-colour="text-blue-royal" to="/"></label-section>',
  }))
  .add('Link w/ left border, underline & right arrow', () => ({
    components: { LabelSection },
    template: '<label-section font-family="font-pt-sans" font-size="text-sm" label="Galeri Foto" :right-arrow="true" underline="true" to="/"></label-section>',
  }))
  