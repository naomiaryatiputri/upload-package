import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'
import CardsDefaultMedia from '@/components/cards/Default.vue'

storiesOf('Components|Cards/Media', module)
  .addDecorator(StoryRouter())
  .addDecorator(storyFn => {
    const children = storyFn()
    return {
      components: { children },
      template: `
        <div class="w-full max-w-xl ml-8 mt-8">
          <div class="w-1/3">
            <children/>
          </div>
        </div>`
    }
  })

  .add('Foto Type', () => ({
    components: { CardsDefaultMedia },
    template: `
      <cards-default-media :item='item'></cards-default-media>
    `,
    data() {
      return {
        item:{
          category: 'Galery Video',
          image: {
            credit: 'kompas/si penjepret 0',
            url: 'https://i.ytimg.com/vi/zi7tu3qTtuI/maxresdefault.jpg',
          },
          num_photos: 8,
          published_at: '2018-11-11 19:00:00',
          title: 'Ini Cek Judul Terpanjang Apakah Yang Terjadi',
          to: '/single',
        },
      }
    }
  }),{
    notes: 'Dipergunakan untuk list video tanpa konten'
  })
  
  .add('Video Type', () => ({
    components: { CardsDefaultMedia },
    template: `
      <cards-default-media :video='true' :item='item'></cards-default-media>
    `,
    data() {
      return {
        item: {
          category: 'Video Berita',
          categoryTo: '/category-video',
          published_at: '1999-10-16 19:00:00',
          image: {
            url:'//azk-cdn-audio-kompas.azureedge.net/kvms//IMAGES/2019/05/1145460_p.png?v=56'},
          label: 'Title 1',
          title: '5 Perusahaan Amerika Serikat Blokir Huawei',
          to: '/single-video',
        },
      }
    }
  }),{
    notes: 'Dipergunakan untuk list video tanpa konten'
  })