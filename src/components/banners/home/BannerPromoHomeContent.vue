<template lang="pug">
div.w-full
  div.flex.flex-col.w-full.max-w-xl.leading-normal.bg-white-citrine(class='md:flex-row')
    div.flex.flex-col.p-4(class='md:w-1/3 lg:w-1/4')
      div.flex.flex-row.items-center.leading-tight
        label-bebas-akses(v-if='item.is_free', label='bebas akses')
        label-section(font-family='font-pt-sans', font-size='text-sm', :label='item.keyword', text-colour='text-blue-royal-700')
      h3.font-chronicle-display.my-2.text-2xl 
        router-link.font-semibold.text-gray-600(class='hover:underline' to='item.to') {{ item.title }}
      div.border(class='w-1/3')
      div.pt-4
        p.font-georgia.leading-relaxed.text-sm {{ item.excerpt }}
    div.flex.bg-center.bg-cover.bg-no-repeat.w-full.pb-ratio-square(class='md:pb-0 md:w-2/3 lg:w-3/4', :style='{ backgroundImage: "url(" + item.image.url + ")" }')
</template>
<script>
import LabelBebasAkses from '@/components/labels/BebasAkses.vue'
import LabelSection from '@/components/labels/Section.vue';

export default {
  name:'BannerPromoHomeContent',
  components: {
    LabelBebasAkses,
    LabelSection
  },
  props: {
    item: Object,
  }
}
</script>
