import { storiesOf } from '@storybook/vue'
import LivePulse from '@/components/animations/Livepulse.vue'

storiesOf('Components|Animations/Live-Pulse', module)
.addDecorator(storyFn => {
  const children = storyFn()
  return {
    components: { children },
    template: `<div class='w-full max-w-xl'><children/></div>`
  }
})
.add('Red', () => ({
  components: { LivePulse },
  template: `
  <div class="bg-white border flex justify-center p-2 w-1/5">
    <live-pulse liveColor='red'></live-pulse>
  </div>
  `
}),{
  notes: 'Memanggil dengan <live-pulse> dan diberi atribut liveColor yang berisi red/white, sesuai dengan background'
}
)
.add('White', () => ({
  components: { LivePulse },
  template: `
  <div class="bg-red-thunderbird-700 border flex justify-center p-2 w-1/5">
    <live-pulse liveColor='white'></live-pulse>
  </div>
  `
}),{
  notes: 'Memanggil dengan <live-pulse> dan diberi atribut liveColor yang berisi red/white, sesuai dengan background'
}
)