<template lang="pug">
div.flex.flex-col.mb-4.w-full(v-if='video == true')
  router-link.mb-2.w-full(:to='item.to')
    div.btn-video-play-container.relative.bg-center.bg-cover.bg-no-repeat(v-bind:style="{ backgroundImage: 'url(' + item.image.url + ')' }", style='padding-bottom:56.25%;')
      div.absolute.pin-center
        svg.btn-video-play(width='75' height='75' viewBox='0 0 100 100')
          rect.btn-video-play-box(x='8' y='8' rx='10' ry='10' width='80' height='80')
          path.btn-video-play-arrow(d='M64.8,45.7c2.4,1.4,2.4,3.6,0,5L37.5,66.6c-2.4,1.4-4.3,0.3-4.3-2.5L33,32.6c0-2.7,1.9-3.9,4.3-2.5L64.8,45.7z')
  div.flex.flex-col.font-chronicle-display
    h2.text-base.mb-2(class='lg:leading-tight lg:text-2xl')
      router-link.text-gray-600.w-full(class='hover:underline', :to='item.to') {{ item.title }}
    div.font-georgia.text-xs
      router-link.text-gray-600(class='hover:underline', :to='item.to') {{ item.category }}
      span.mx-1 &middot;
      label-datetime(:dt='item.published_at' font-family='font-georgia' font-size='text-xs' format='date')

div.flex.flex-col.w-full(v-else)
  router-link.bg-center.bg-cover.bg-no-repeat.mt-4.relative(:style="{ backgroundImage:'url(' + item.image.url + ')' }", style='padding-bottom:56.25%;', :to='item.to')
    LabelStack(:number="item.num_photos") 
  div.flex.flex-col.items-center.justify-center
    a.text-black(href='#')
      div.flex.flex-wrap.font-chronicle-display.text-xl.leading-tight.text-center.px-2.pt-3.pb-2(class='md:px-0 lg:px-0 xl:px-0') {{ item.title }}
    div.flex.flex-row.justify-center
      label-datetime(:dt='item.published_at' font-family='font-georgia' font-size='text-sm' format='default-separator')
    div.flex.flex-col.py-2(v-if='item.excerpt')
      div.text-sm {{ item.excerpt }} 
      router-link.text-sm.font-bold.text-gray-600(:to='item.to') Selanjutnya &rsaquo;
</template>
<script>
import LabelDatetime from '@/components/labels/Datetime.vue';
import LabelStack from '@/components/labels/labelstack.vue'
export default {
  name: 'CardsDefaultMedia',
  components:{
    LabelDatetime,
    LabelStack,
  },
  props: {
    item:Object,
    video:Boolean,
  },
}
</script>
