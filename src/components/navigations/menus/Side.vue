<template lang="pug">
nav.fixed.left-0.top-0.w-screen.z-50(v-if='show', @click='sideNavToggle')
  div.bg-white-citrine.h-screen.menu-menu-sidebar.overflow-y-auto.pb-20.pt-4.shadow-lg.w-48(class='sm:pt-8')
    //- menu
    div.menu-item(v-for='(item, i) in menus', :class='{ "current-menu-item" : i === 3, "menu-item-has-children" : item.children }' :key='"parent-" + i')
      div.flex.font-bold.justify-between
        router-link.font-pt-sans.p-3.text-gray-600.w-full(:to='item.to', v-html='item.label')
        span.p-3
          font-awesome-icon(v-if='item.children', icon='chevron-down')
      div.sub-menu(v-if='item.children')
        div.menu-item(v-for='(child, j) in item.children', :class='{ "current-menu-item" : j === 1 }', :key='"child-" + j')
          router-link.font-pt-sans.p-3.text-gray-600(:to='child.to', v-html='child.label')
</template>
<script>
export default {
  name: 'AppNavSide',
  data() {
    return {
      menus: [
        {
          children: null,
          label: 'Utama',
          slug: 'utama',
          to: '/'
        },
        {
          children: [
            {
              children: null,
              label: 'Pemilu',
              slug: 'pemilu',
              to: '/polhuk/pemilu'
            }
          ],
          label: 'Politik &amp; Hukum',
          slug: 'polhuk',
          to: '/category'
        },
        {
          children: [
            {
              children: null,
              label: 'Wirausaha',
              slug: 'wirausaha',
              to: '/ekonomi/wirausaha'
            }
          ],
          label: 'Ekonomi',
          slug: 'ekonomi',
          to: '/category'
        },
        {
          children: [
            {
              children: null,
              label: 'Artikel Opini',
              to: '/category'
            },
            {
              children: null,
              label: 'Analisis Ekonomi',
              to: '/category'
            },
            {
              children: null,
              label: 'Analisis Politik',
              to: '/category'
            }
          ],
          label: 'Opini',
          to: '/category'
        },
        {
          children: null,
          label: 'Humaniora',
          to: '/category'
        },
        {
          children: null,
          label: 'Riset',
          to: '/category'
        },
        {
          children: null,
          label: 'Nusantara',
          to: '/category'
        },
        {
          children: null,
          label: 'Metropolitan',
          to: '/category'
        },
        {
          children: null,
          label: 'Internasional',
          to: '/category'
        },
        {
          children: null,
          label: 'Tokoh',
          to: '/category'
        },
        {
          children: null,
          label: 'Olahraga',
          to: '/category'
        },
        {
          children: null,
          label: 'Gaya Hidup',
          to: '/category'
        },
        {
          children: null,
          label: 'Multimedia',
          to: '/category'
        },
        {
          children: null,
          label: 'Jelajah',
          to: '/category'
        },
        {
          children: null,
          label: 'Video',
          to: '/category'
        },
        {
          children: null,
          label: 'Fotografi',
          to: '/category'
        },
        {
          children: null,
          label: 'Muda',
          to: '/category'
        },
        {
          children: null,
          label: 'Hiburan',
          to: '/category'
        },
        {
          children: null,
          label: 'Sastra',
          to: '/category'
        }
      ]
    }
  },
  props: [ 'show' ],
  methods: {
    sideNavToggle() {
      this.$root.$data.state.toggleSideNav();
    }
  }
}
</script>
