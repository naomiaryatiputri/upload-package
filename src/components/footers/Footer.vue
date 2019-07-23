<template lang="pug">
footer.bg-white.bottom-0.border-grey.border-solid.border-t.flex.font-pt-sans.static.w-full(class='sm:absolute')
  //- start: top
  div.mx-auto.text-gray-450.w-full.max-w-xl
    div(class='lg:-mx-4')
      div.flex.flex-col.items-center.mx-4.py-8(class='md:flex-row')
        div.flex.flex-row.font-pt-sans.mb-4.w-full(class='md:justify-between md:mb-0 md:w-1/4')
          div.flex
            strong LAYANAN
            span.ml-1 PELANGGAN
          div.pr-8.hidden(class='md:flex')
            font-awesome-icon.ml-2(icon='chevron-right')
        div.flex.flex-col.w-full(class='md:justify-between md:flex-row md:w-3/4')
          div.flex.flex-row.items-center.mb-4(v-for='(item, key) in customer_support', :key='"cs_" + key', class='sm:mb-0')
            div.flex.mr-2.text-lg
              font-awesome-icon(:icon='item.icon')
            div.flex.flex-col
              div.font-bold.text-sm.uppercase.w-full {{ item.label }}
              div.w-full.text-xs
                a.text-gray-450(v-if='item.action', :href='item.action') {{ item.sublabel }}
                span(v-else) {{ item.sublabel }}
  //- end: top
</template>
<script>
export default {
  name: 'Footer',
  data() {
    return {
      customer_support: [
        {
          action: 'tel:+622125676000',
          icon: 'phone',
          label: 'Kompas Kring',
          sublabel: '+6221 2567 6000'
        },
        {
          action: 'whatsapp://send/6281290050800#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end',
          icon: ['fab', 'whatsapp'],
          label: 'Whatsapp',
          sublabel: '+6281 2900 5080 0'
        },
        {
          action: 'mailto:hotline@kompas.id',
          icon: ['far', 'envelope'],
          label: 'Email',
          sublabel: 'hotline@kompas.id'
        },
        {
          action: null,
          icon: ['far', 'clock'],
          label: 'Jam Kerja',
          sublabel: '06.00-18.00 WIB'
        },
      ],
    }
  }
}
</script>
