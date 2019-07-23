import { storiesOf } from '@storybook/vue'
import LabelBebasAkses from '@/components/labels/BebasAkses.vue'

storiesOf('Components|Labels/', module)
  .add('Bebas Akses', () => ({
    components: { LabelBebasAkses },
    template: '<label-bebas-akses label="bebas akses"></label-bebas-akses>',
    data() {
      return {
        breadcrumbs: [
          {
            label: 'category',
            to: '/category',
          },
          {
            label: 'subcategory',
            to: '/category',
          },
          {
            label: 'judusl berita yang seharusnya panjang tapi gak dipotong karena motongnya ntar via server side',
            to: null,
          },
        ]
      }
    }
  }))