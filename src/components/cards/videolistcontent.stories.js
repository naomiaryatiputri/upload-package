import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'
import VideoListContent from '@/components/cards/VideoListContent.vue'

storiesOf('Components|Cards/Media/_PINDAHKAN/', module)
.addDecorator(StoryRouter())
.addDecorator(storyFn => {
  const children = storyFn()
  return {
    components: { children },
    template: '<div class="w-full max-w-xl"><children/></div>'
  }
})

.add('Video List W/ Content', () => ({
  components: { VideoListContent },
  template: `
      <video-list-content :imgLink='imgLi':toLink='to'></video-list-content>
  `,
  data() {
    return {
      to: '/#',
      imgLi: 'https://i.ytimg.com/vi/zi7tu3qTtuI/maxresdefault.jpg',
    }
  }
}),{
  notes: 'Dipergunakan untuk list video dengan konten'
})