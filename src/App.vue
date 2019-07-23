<template lang="pug">
div#app.min-h-screen(class="sm:relative")
  Header
  div.pt-12.pb-24
    router-view
  Footer
</template>

<script>
import '@/assets/css/app.styl'
import Footer from '@/components/footers/Footer.vue'
import Header from '@/components/headers/Header.vue'


export default {
  name: 'App',
  components: {
    Footer,
    Header
  }
}
</script>
