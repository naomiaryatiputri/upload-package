<template lang="pug">
div.flex.relative
  header.bg-blue-royal-700.fixed.flex.flex-col.font-pt-sans.py-1.w-full.z-40(ref='header')
    div.flex.text-sm.w-full.max-w-xl.mx-auto
      div.flex.flex-row.w-full
        div.flex.flex-row.justify-start(class="w-1/3")
          button.cursor-pointer.font-bold.px-4.py-2.text-white(class='focus:outline-none lg:pl-0 xl:pl-0')
            font-awesome-icon(icon='arrow-left')
            span.hidden.ml-2.tracking-wide(class='sm:inline') Kembali
        div.flex.flex-row.self-center.justify-center(class="w-1/3" ref='header-bar-logo')
            a.w-24(href='https://kompas.id')
              img(src='@/assets/img/logos/kompas-white.svg')
        div(class="w-1/3")
</template>
<script>
export default {
  name: 'Header'
}
</script>