<template lang="pug">
div
  router-link.block.clearfix.w-full(:to='toLink')
    div.btn-video-play-container.bg-center.bg-cover.bg-no-repeat.h-24.mb-1.ml-2.relative.w-24(v-bind:style="{ backgroundImage: 'url(' + imgLink + ')' }")
      div.absolute.pin-center
        svg.btn-video-play(width='75' height='75' viewBox='0 0 100 100')
          rect.btn-video-play-box(x='8' y='8' rx='10' ry='10' width='80' height='80')
          path.btn-video-play-arrow(d='M64.8,45.7c2.4,1.4,2.4,3.6,0,5L37.5,66.6c-2.4,1.4-4.3,0.3-4.3-2.5L33,32.6c0-2.7,1.9-3.9,4.3-2.5L64.8,45.7z')
</template>
<script>
import LabelDatetime from '@/components/labels/Datetime.vue';
export default {
  name: 'VideoPlay',
  components:{
    LabelDatetime,
  },
  props: {
    imgLink: String,
    toLink: String,
    },
}
</script>