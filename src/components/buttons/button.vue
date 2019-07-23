<template lang="pug">
router-link.font-pt-sans.rounded-sm.px-4.py-3.uppercase.transition-background(:to='to', :class="classes", v-if='to') {{titleDrop}}
button.font-pt-sans.rounded-sm.px-4.py-3.uppercase.transition-background(:class="classes",v-on:click="propsFunction" , v-else) {{titleDrop}}
</template>
<script>
export default {
  name: 'Button',
  computed: {
    classes() {
      let classes = []
      
      if (this.wFull) classes.push(' w-full flex justify-center')
      if (this.gray) classes.push(' bg-white hover:bg-gray-150 text-gray-450 hover:text-white border hover:border-gray-150 border-gray-450')
      if (this.blue) classes.push(' bg-blue-royal-500 hover:bg-blue-royal-700 text-white')
      if (this.bold) classes.push(' font-bold')
      if (this.sizeFont) classes.push(' text-'+this.sizeFont)
      
      return classes.join(' ')
    }
  },
  methods: {
    propsFunction: function() {
      this.$emit('submit');
    }
  },
  props: {
    titleDrop:String,
    wFull:Boolean,
    gray:Boolean,
    bold:Boolean,
    blue:Boolean,
    sizeFont:String,
    to:String,
    },
}
</script>