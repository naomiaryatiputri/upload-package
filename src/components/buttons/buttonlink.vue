<template lang="pug">
div.flex.flex-no-shrink.z-auto.relative(class='md:mb-0')
  button.button-dropdown-text.flex.leading-none.px-0.relative.rounded-sm.items-center(class='focus:outline-none')
    div.bg-black.flex.h-6.justify-center.no-underline.p-1.rounded-sm.text-white.w-6
      font-awesome-icon.text-sm.text-center.content-center.align-center(:icon=['fas', 'link'], class='lg:text-sm')
  nav.absolute.button-dropdown-child-text.z-20.-ml-24(class='lg:-ml-32')
    ul.flex.flex-row.font-chronicle-display.py-4.relative.text-sm.flex-wrap.list-reset.w-full
      li.bg-white.flex.py-2.rounded-base.shadow.items-center.justify-center(class='-ml-40', style='min-width: 280px;')
        a.no-underline.px-2.text-gray-600(href='#') 
          div.flex.flex-row.content-end.justify-center
            div.font-bold.font-pt-sans.no-underline.pr-4.text-xs.text-gray-450.self-center(class='lg:text-sm') Salin Tautan
            div.flex.flex-row
              input.bg-gray-50.appearance-none.font-pt-sans.rounded-xs.w-full.py-1.px-4.text-gray-300.text-xs.leading-tight(class='focus:outline-none focus:bg-white focus:border-purple-500 lg:text-sm', type='text', value='https://kompas.id/baca/...')
              div.bg-blue-royal-500.flex.h-6.justify-center.no-underline.p-1.rounded-sm.text-white.w-6
                font-awesome-icon(:icon=['far', 'clone'])

</template>

<script>
export default {
    name: 'ButtonLink'
}
</script>

