<template lang="pug">
router-link.font-bold.uppercase.flex.flex-col.w-auto(v-if='to', :class="classes", :to='to')
  span
    span.font-pt-sans.font-bold.mr-2 {{ label }}
    span.text-gray-600(v-if='rightArrow')
      font-awesome-icon(:icon=['fas', 'arrow-right'])
span.font-bold.leading-none.uppercase(v-else, :class='classes') {{ label }}
</template>
<script>
export default {
  name: 'LabelSection',
  computed: {
    classes() {
      let classes = []
      
      if (this.fontFamily) classes.push(this.fontFamily)
      if (this.fontSize) classes.push(this.fontSize)
      if (this.leftBorder) classes.push(this.leftBorder + ' border-l-3 pl-2')
      if (this.textColour) classes.push(this.textColour)
      if (this.underline) classes.push('underKuning')
      
      return classes.join(' ')
    }
  },
  props: {
    label: {
      type: String,
      default: 'Catagory'
    },
    fontFamily: String,
    fontSize: String,
    leftBorder: String,
    rightArrow: Boolean,
    underline: Boolean,
    textColour: {
      type: String,
      default: 'text-gray-600'
    },
    to: String,
  }
}
</script>
