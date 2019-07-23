<template lang="pug">
div.mb-2
  button.flex.flex-row.mb-4.rounded-sm.w-full.justify-center.items-center(class='sm:mb-0', :class='clasess()')
    font-awesome-icon.text-lg.text-white(class='w-1/6', :icon='iconss()')
    span.font-pt-sans.leading-tight.p-4.text-base.text-white.self-center(class='w-5/6') {{ label }}
</template>

<script>
export default {
  name: 'ButtonWithAccount',
  props:{
    icon:{
      type:String,
      default:'google'
    },
    label:{
      type:String,
      default:'Test'
    },
  },
  methods:{
    clasess() {
      let classes = []
      if (this.icon === 'facebook') classes.push('bg-blue-royal-700')
      if (this.icon === 'google') classes.push('bg-red-thunderbird-600')
      return classes.join(' ')
    },
    iconss(){
      let array = []
      if(this.icon === 'google') return ['fab', 'google']
      if(this.icon === 'facebook') return ['fab', 'facebook-f']
    }
  }
    

}
</script>

