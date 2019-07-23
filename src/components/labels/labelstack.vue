<template lang="pug">
div.flex.absolute.bottom-0.right-0.rounded-sm.opacity-75.bg-gray-600.py-2.px-2.mb-2.mr-2.transition-opacity
  font-awesome-icon.text-white(:icon='fontAws')
  p.text-white.text-sm.font-pt-sans.pl-2 {{number}} {{addText}} 
</template>
<script>
export default {
  name: 'LabelStack',
  props: {
    fontAws: {
      type: String,
      default: 'images'
    },
    number:Number,
    addText:String
    },
}
</script>
