<template lang="pug">
div.bg-white-citrine.flex.flex-col.pt-4.px-4
  div.flex.mb-2.w-full
  label-section(:label='header.label', :right-arrow='true', :to='header.to', font-family='font-pt-sans', font-size='text-sm', text-colour='text-blue-royal-700')
  div.flex.flex-col.pt-2(class='md:flex-row')
    div.flex.flex-col.items-start.pb-4.w-full(class='md:w-2/3')
      h3.font-bold.font-chronicle-display.leading-tight.mb-2.text-lg {{ item.title }}
      p.font-pt-sans.mb-2.text-base {{ item.text }}
      a.bg-blue-royal-500.font-bold.font-pt-sans.rounded-sm.text-sm.text-white.px-5.py-2.uppercase(:href='item.button.permalink') {{ item.button.label }}
    div.bg-contain.bg-no-repeat.bg-right-bottom.hidden(class='md:flex md:w-1/3', :style='{ backgroundImage: "url(" + item.image + ")" }')
</template>
<script>
import LabelSection from '@/components/labels/Section.vue';

export default {
  name:'BannerPromoHomeGerai',
  components: {
    LabelSection
  },
  props: {
    header: {
      type: Object,
      default: () => ({
        label: 'gerai kompas',
        to: '/'
      })
    },
    item: {
      type: Object,
      default: () => ({
        button: {
          label: 'kunjungi',
          permalink: 'https://gerai.kompas.id'
        },
        image: 'https://images-akamai-kompas-id.azureedge.net/wp-content/uploads/2018/11/kompas_store_01.png',
        title: 'Dapatkan Berbagai Produk Harian Kompas!',
        text: 'Gerai Kompas adalah e-dagang dari harian Kompas yang menyediakan layanan untuk berlangganan, sekaligus menyediakan berbagai produk dari harian Kompas, seperti foto, buku, dan berbagai merchandise menarik.',
      })
    },
  }
}
</script>

