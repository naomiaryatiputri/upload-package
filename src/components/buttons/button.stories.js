import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'
import Buttons from '@/components/buttons/button.vue'

storiesOf('Components|Navigations/Buttons/', module)
.addDecorator(storyFn => {
  const children = storyFn()
  return {
    components: { children },
    template: '<div class="w-full max-w-xl"><children/></div>'
  }
})
.addDecorator(StoryRouter())

.add('Button Blue No Link', () => ({
  components: { Buttons },
  template: `
    <Buttons titleDrop="Test Button No Link" bold=true blue=true sizeFont='xs'></Buttons>
  `
}),{
  notes: 'Atribut yang dibutuhkan terdapat titleDrop, bold(Boolean), blue(Boolean), gray(Boolean), sizeFont, no to, wFull'
})

.add('Button Blue', () => ({
  components: { Buttons },
  template: `
    <Buttons titleDrop="Test Button" bold=true blue=true sizeFont='xs' to='/#'></Buttons>
  `
}),{
  notes: 'Atribut yang dibutuhkan terdapat titleDrop, bold(Boolean), blue(Boolean), gray(Boolean), sizeFont, to, wFull'
})

.add('Button W-Full', () => ({
  components: { Buttons },
  template: `
    <Buttons titleDrop="Test Button" wFull=true blue=true bold=true sizeFont='xs' to='/#'></Buttons>
  `
}),{
  notes: 'Atribut yang dibutuhkan terdapat titleDrop, bold(Boolean), blue(Boolean), gray(Boolean), sizeFont, to, wFull'
})

.add('Button Gray W-Full', () => ({
  components: { Buttons },
  template: `
    <Buttons titleDrop="Test Button" wFull=true bold=true  gray=true sizeFont='xs' to='/#'></Buttons>
  `
}),{
  notes: 'Atribut yang dibutuhkan terdapat titleDrop, bold(Boolean), blue(Boolean), gray(Boolean), sizeFont, to, wFull'
})