<template lang="pug">
div.banner-container.fixed.bottom-0.left-0.w-full.z-50(ref='container')
  div.flex.flex-col.mx-auto.max-w-xl
    div.flex.flex-col(class='md:flex-row', ref='header')
      div.bg-gray-600.flex.font-pt-sans.items-center.justify-center.leading-none.px-4.py-2.text-sm.text-white(v-show='!is_showing', class='md:flex-shrink-0') Artikel ini gratis hingga 27 Sep 2999
      div.bg-blue-royal-700.flex.flex-row.items-center.justify-between.py-2.px-4.w-full(style='height:56px')
        div.flex.flex-col.font-bold.font-pt-sans.leading-tight.text-base.w-full(class='md:leading-none')
          a.flex.justify-center.text-white.w-full(v-if='is_showing', href='#') Sudah berlangganan? Login di sini
          span.text-white(v-else) Baca konten seputar pemilu dengan berlangganan
        button.h-10.text-white.w-10(@click.prevent='is_showing = !is_showing', class='focus:outline-none')
          font-awesome-icon(:icon='chevronIcon')
    div.flex(ref='body')
      div.bg-white.p-4.w-full(v-if='hasPromo')
        div.flex.flex-col.w-full(class='md:flex-row')
          div.flex.mb-4.w-full(class='md:mb-0', style='max-width:360px')
            div.block.bg-center.bg-cover.bg-no-repeat.w-full(style='background-image:url(https://uc.uxpin.com/files/613631/608664/Banner-Home-Kecil-Promo-Pemilu-2019-Bilik-Suara-01-17003c.jpg);max-width:360px;padding-bottom:56.388888888888886%')
          div.flex.flex-col.pl-0.w-full(class='md:pl-4')
            p.font-pt-sans.leading-normal.mb-4.text-base.text-gray-600 Untuk merayakan hari jadi ke-53 tahun Kompas, dapatkan penawaran khusus untuk buku, board game, T-shirt, dan langganan Kompas Digital Premium 1, 3, 6, atau 12 bulan. Promo ini berlaku selama 25 Juni-15 Juli 2018 di Gerai Kompas.id! 8 di Gerai Kompas.id!
            div.flex.flex-col.justify-start.w-full(class='md:flex-row')
              a.bg-yellow-buttercup.font-bold.font-pt-sans.leading-none.mr-0.py-3.px-4.rounded-sm.text-gray-600.text-center.uppercase.w-full(class='md:mr-1 md:w-64', href='#') Tombol 1
              a.bg-gray-100.font-pt-sans.leading-none.ml-0.mt-2.py-3.px-4.rounded-sm.text-center.text-gray-600.uppercase.w-full(class='md:mt-0 md:ml-1 md:w-64', href='#') Tombol 2
      div.bg-cover.bg-no-repeat.bg-right-top.flex.flex-col.p-4.w-full(v-else, style='background-image:url(https://uc.uxpin.com/files/613631/608664/970_x_221-7f8412.png)')
        div.mx-auto.w-full(style='max-width:772px')
          h3.font-bold.font-pt-sans.mb-4.text-lg.text-center.text-white Selamat datang di kompas.id situs beritab berbayar harian kompas
          p.font-pt-sans.mb-4.text-base.text-white Dapatkan akses ke seluruh berita digital Kompas.id dengan berlangganan Paket Digital Premium seharga Rp50.000/bulan atau baca gratis sejumlah berita digital Kompas.id berlabel Bebas Akses!
          div.flex.flex-col.justify-center(class='md:flex-row')
            a.bg-yellow-buttercup.font-bold.font-pt-sans.leading-none.mr-0.py-3.px-4.rounded-sm.text-gray-600.text-center.uppercase.w-full(class='md:mr-1 md:w-64', href='#') Tombol 1
            a.bg-blue-royal-700.font-pt-sans.leading-none.ml-0.mt-2.py-3.px-4.rounded-sm.text-center.text-white.uppercase.w-full(class='md:mt-0 md:ml-1 md:w-64', href='#') Tombol 2

</template>
<script>
export default {
  name: 'BannerOnboardingSingleBodyBottom',
  data() {
    return {
      body_height: 0,
      header_height: 0,
      container_height: 0,
      is_showing: false,
    }
  },
  computed: {
    chevronIcon() {
      return this.is_showing ? [ 'fas', 'chevron-down' ] : [ 'fas', 'chevron-up' ]
    }
  },
  watch: {
    is_showing(val) {
      this.$refs.container.style.transform = val ? 'translateY(0)' : 'translateY(' + (this.container_height - this.header_height) + 'px)'
    }
  },
  mounted() {
    this.$refs.container.style.opacity = 0
    this.$nextTick(() => {
      this.container_height = this.$refs.container.clientHeight
      this.header_height = this.$refs.header.clientHeight
      this.body_height = this.$refs.body.clientHeight
      this.$refs.container.style.transform = 'translateY(' + (this.container_height - this.header_height) + 'px)'
      window.setTimeout(() => {
        this.$refs.container.style.opacity = 1
        window.setTimeout(() => {
          this.is_showing = true
        }, 3000)
      }, 400)
      
    })
      
  },
  props: {
    hasPromo: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="styl" scoped>
.banner-container
  transition transform 400ms linear
</style>
