import { storiesOf } from '@storybook/vue'
import LabelDiscount from '@/components/labels/LabelProductDiscount.vue'

storiesOf('Components|Labels/', module)
.addDecorator(storyFn => {
  const children = storyFn()
  return {
    components: { children },
    template: '<div class="w-full max-w-xl"><children/></div>'
  }
})
.add('Label Product Discount', () => ({
  components: { LabelDiscount },
  template: `
  <div class="bg-center bg-cover bg-no-repeat border flex-shrink-0 h-24 mr-2 relative w-24" style="background-image:url(https://gerai.kompas.id/wp-content/uploads/2018/11/paket-KompasNGI-1-150x150.jpg);">
    <label-discount diskon='6'></label-discount>
  </div>
  `
}),{
  notes: 'Menggunakan class label-product-discount untuk memberikan display absolute dan menjadi class utama. Lalu untuk membuat segita dibawahnya menggunakan label-product-discount-triangle, untuk arah segitiga hanya ke kanan dan kiri dengan menambagkan class left/right setelah label-product-discount-triangle'
})