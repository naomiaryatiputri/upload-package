<template lang="pug">
div.absolute.left-0.pt-4.w-full
  a(:href='url')
    span.p-2.bg-blue-royal-700.text-xs.text-white(:class="typeLabel==='main'? 'label-multimedia hover:bg-blue-royal-500':'label-sub-multimedia hover:bg-gray-450'") {{title}}
</template>
<script>
export default {
  name: 'LabelClip',
  props: {
    title:String,
    typeLabel:String,
    url:String,
  },
}
</script>