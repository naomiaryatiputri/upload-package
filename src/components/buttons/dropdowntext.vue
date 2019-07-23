<template lang="pug">
div.flex.flex-no-shrink.z-auto.relative(class='md:mb-0')
  button.button-dropdown-text.flex.leading-none.px-0.relative.rounded-sm.items-center(class='focus:outline-none lg:px-8')
    font-awesome-icon.text-xl(:icon=['fas', 'font'])
    p.font-pt-sans.no-underline.text-xs.text-gray-600.pl-2(href='#') TEKS
      span.pl-1.items-center
        font-awesome-icon.h-3.w-3( icon='chevron-down')
  nav.absolute.button-dropdown-child-text.z-30.pt-4
    ul.bg-white.flex.flex-row.font-chronicle-display.justify-center.relative.text-sm.flex-wrap.list-reset.py-3.shadow.w-full(class='-ml-2')
      li.flex.flex-no-shrink.py-1(class='hover:bg-white-citrine').rounded-sm
        a.no-underline.px-2.text-gray-600.self-end(href='#') 
          div.content-end.flex.flex-col.items-center.justify-center
            font-awesome-icon(:icon=['fas', 'font'])
            p.font-pt-sans.no-underline.text-xs.text-gray-600(href='#') Kecil
      li.flex.flex-no-shrink.py-1(class='hover:bg-white-citrine').rounded-sm
        a.no-underline.px-2.text-gray-600.self-end(href='#') 
          div.content-end.flex.flex-col.items-center.justify-center
            font-awesome-icon.text-xl(:icon=['fas', 'font'])
            p.font-pt-sans.no-underline.text-center.text-xs.text-gray-600(href='#') Sedang
      li.flex.flex-no-shrink.py-1(class='hover:bg-white-citrine').rounded-sm
        a.no-underline.px-2.text-gray-600.self-end(href='#') 
          div.content-end.flex.flex-col.items-center.justify-center
            font-awesome-icon.text-3xl(:icon=['fas', 'font'])
            p.font-pt-sans.no-underline.text-center.text-xs.text-gray-600(href='#') Besar
</template>

<script>
export default {
    name: 'ButtonDropDownText'
}
</script>

