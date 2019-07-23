import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'
import BannerPromoHomeContent from '@/components/banners/home/BannerPromoHomeContent.vue'

storiesOf('Components|Banners/Promos/Home/', module)
  .addDecorator(storyFn => {
    const children = storyFn()
    return {
      components: { children },
      template: '<div class="w-full max-w-xl m-0 lg:m-4"><children/></div>'
    }
  })
  .addDecorator(StoryRouter())
  .add('Content', () => ({
    components: { BannerPromoHomeContent },
    data() {
      return {
        item: {
          excerpt: 'Batik memiliki sejarah panjang di Indonesia, terutama di Pulau Jawa. Sejak abad ke-16, para penjelajah dari Eropa telah melaporkan adanya kain-kain bercat warna-warni di Jawa. Bahkan, ada yang berpendapat sejarah batik jauh lebih tua lagi.',
          image: {
            url: 'https://images-akamai-kompas-id.azureedge.net/wp-content/uploads/2019/02/20190211_084710_1549865034-720x405.jpg',
          },
          is_free: true,
          keyword: 'lensa barita',
          title: 'Selisik Batik',
          to: '/single',
        }
      }
    },
    template: '<banner-promo-home-content :item="item"></banner-promo-home-content>',
  }),
  {
    notes: 'Komponen yang berisikan halaman tersebut dan tombolyang mengarah ke halaman selanjutnya dan sebelumnya'
  }
  )