<template lang="pug">
div.relative
  header.bg-blue-royal-700.fixed.flex.flex-col.font-pt-sans.py-1.w-full.z-40(ref='header')
    div.flex.text-sm.w-full.max-w-xl.mx-auto
      div.flex.flex-row.justify-between.w-full
        div.flex
          button.cursor-pointer.font-bold.px-4.py-2.text-white(@click='sideNavToggle', class='focus:outline-none lg:pl-0 xl:pl-0')
            font-awesome-icon(icon='bars')
            span.hidden.ml-2.tracking-wide(class='sm:inline') Rubrik
          button.cursor-pointer.font-bold.px-4.py-2.text-white(@click='searchBarToggle', class='focus:outline-none')
            font-awesome-icon(icon='search')
            span.hidden.ml-2.tracking-wide(class='sm:inline') Cari
          button.cursor-pointer.font-bold.px-4.py-2.text-white(class='focus:outline-none')
            font-awesome-icon(icon='store-alt')
            span.hidden.ml-2.tracking-wide(class='sm:inline') Gerai
        div.hidden.items-center(class='sm:flex md:flex lg:flex xl:flex', ref='header-bar-logo')
          a.w-24(href='https://kompas.id')
            img(src='@/assets/img/logos/kompas-white.svg')
        div.flex
          div.flex(v-if='user_is_logged_in')
            div.relative
              button.cursor-pointer.font-bold.px-4.py-2.text-white(@click='show_user_menu = !show_user_menu', class='focus:outline-none')
                font-awesome-icon(icon='user-circle')
                span.hidden.ml-2.tracking-wide(class='sm:inline') Nama Pengguna
                font-awesome-icon.ml-2(icon='chevron-down')
              //- user menu
              div.absolute.bg-white.border.border-solid.header-user-menu.pb-2.pt-2.right-0.z-50(:class='show_user_menu ? "flex flex-col opacity-100" : "opacity-0 hidden"')
                router-link.cursor-pointer.flex.px-4.py-2.text-black.whitespace-no-wrap(to='/dashboard') Kelola Akun
                router-link.cursor-pointer.flex.px-4.py-2.text-black.whitespace-no-wrap(to='/cart') Troli
                router-link.cursor-pointer.flex.px-4.py-2.text-black.whitespace-no-wrap(to='/out') Keluar
            button.cursor-pointer.font-bold.px-4.py-2.text-white(class='focus:outline-none lg:pr-0 xl:pr-0')
              div.relative
                font-awesome-icon(icon='shopping-cart')
                span.notification.absolute.bg-green-lima.flex.h-4.items-center.justify-center.leading-none.rounded-full.text-white.text-xs.w-4(style='right: -8px; top: -8px;') !
          div.flex(v-else)
            button.cursor-pointer.font-bold.mr-2.px-4.py-2.text-white(class='focus:outline-none')
              font-awesome-icon(icon='sign-in-alt')
              span.hidden.ml-2.tracking-wide(class='md:inline') Masuk
            button.border.border-solid.border-white.cursor-pointer.font-bold.px-4.py-2.rounded.text-white(class='focus:outline-none')
              font-awesome-icon(:icon=['far', 'newspaper'])
              span.hidden.ml-2.tracking-wide(class='md:inline') Berlangganan
  //- search bar
  div.fixed.bg-blue-royal-700.flex.w-full.z-30(ref='search_bar', style='transition:transform 400ms;')
    div.flex.flex-row.mx-auto.w-full.max-w-xl.py-1
      input.appearance-none.leading-none.m-0.p-2.rounded-l-sm.text-sm(class='focus:outline-none w-1/2', maxlength='255', placeholder='Masukkan kata kunci pencarian...', type='text')
      button.bg-blue-royal-500.cursor-pointer.font-bold.px-4.rounded-r-sm.text-white
        font-awesome-icon(icon='search')

  app-nav-side(:show='$root.$data.state.show_side_nav')

</template>

<script>
import AppNavSide from '@/components/navigations/menus/Side.vue'
export default {
  name: 'AppHeader',
  components: {
    AppNavSide
  },
  data() {
    return {
      show_search: false,
      show_user_menu: false,
      user_is_logged_in: this.$root.$data.state.user_is_logged_in
    }
  },
  watch: {
    show_search(val) {
      const header = this.$refs.header
      const search_bar = this.$refs.search_bar
      const ty = val ? header.clientHeight + 'px' : 0
      search_bar.style.transform = 'translateY(' + ty + ')'
    }
  },
  methods: {
    searchBarToggle() {
      this.show_search = !this.show_search
    },
    sideNavToggle() {
      this.$root.$data.state.toggleSideNav();
    }
  }
}
</script>
