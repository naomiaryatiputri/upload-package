<template lang="pug">
div  
  router-link.mb-2.w-full(:to='item.to')
    div.btn-video-play-container.relative.bg-center.bg-cover.bg-no-repeat(v-bind:style="{ backgroundImage: 'url(' + item.image.url + ')' }", style='padding-bottom:56.25%;')
      div.absolute.pin-center
        svg.btn-video-play(width='75' height='75' viewBox='0 0 100 100')
          rect.btn-video-play-box(x='8' y='8' rx='10' ry='10' width='80' height='80')
          path.btn-video-play-arrow(d='M64.8,45.7c2.4,1.4,2.4,3.6,0,5L37.5,66.6c-2.4,1.4-4.3,0.3-4.3-2.5L33,32.6c0-2.7,1.9-3.9,4.3-2.5L64.8,45.7z')
  router-link.block.font-chronicle-display.relative.text-base.text-gray-600.w-full.mt-2(:to='item.to') {{ item.title }}

</template>

<script>
export default {
    name: 'LabelVideo',
    props:{
        item:Object,
    }

}
</script>

