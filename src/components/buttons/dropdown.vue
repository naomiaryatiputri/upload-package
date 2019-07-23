<template lang="pug">
div.flex.flex-shrink-0.mb-4.mr-4.relative.wrap-button.pt-4(class='md:mb-0')
  button.border.border-gray-150.button-dropdown.flex.font-chronicle-display.leading-none.px-8.py-2.relative.rounded-sm.text-gray-450.text-sm(class='focus:outline-none hover:bg-gray-150')
    span.mr-2 {{ title }}
    font-awesome-icon(:icon='["fas","angle-down"]')
  nav.absolute.button-dropdown-child.z-10.pt-4
    ul.border.bg-white.border-gray-100.button-dropdown-child-list.flex.flex-col.font-chronicle-display.px-2.py-4.relative.text-sm.flex-wrap.w-full
      li.flex.flex-shrink-0.rounded-sm(v-for='(item, key) in items', :key='key', :class="item.is_active ? 'bg-white-citrine' : 'hover:bg-gray-100'")
        router-link.px-4.py-2.text-gray-450(v-if='!item.is_active', :to='item.to') {{ item.label }}
        span.px-4.py-2.text-gray-450(v-else) {{ item.label }}
</template>
<script>
export default {
  name: 'ButtonDropdown',
  props: {
    items: Array,
    title: {
      type: String,
      default: 'Rubrik',
    },
  },
}
</script>