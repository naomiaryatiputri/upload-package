import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'
import BannerPromoHomeGerai from '@/components/banners/home/BannerPromoHomeGerai.vue'

storiesOf('Components|Banners/Promos/Home', module)
  .addDecorator(storyFn => {
    const children = storyFn()
    return {
      components: { children },
      template: `
        <div class="w-full max-w-xl m-0 lg:m-4">
          <children/>
        </div>
      `
    }
  })
  .addDecorator(StoryRouter())
  .add(
    'Gerai', 
    () => (
      {
        components: { BannerPromoHomeGerai },
        template: '<banner-promo-home-gerai></banner-promo-home-gerai>',
      }
    ),
    {
      notes: 'Komponen daftar artikel'
    }
  )
  