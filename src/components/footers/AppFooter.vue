<template lang="pug">
footer.border-grey.border-solid.border-t.font-pt-sans
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

  //- start: middle
  div.flex.flex-col.bg-gray-50.w-full(class='md:footer-bg-gradient lg:footer-bg-gradient xl:footer-bg-gradient')
    div.mx-auto.w-full.max-w-xl
      div.flex.flex-col(class='lg:flex-row xl:flex-row lg:-mx-4 xl:-xl-4')
        div.bg-gray-50.flex.flex-col.w-full(class='lg:flex-row xl:flex-row lg:w-3/4 xl:w-3/4')
          div.flex.w-full(class='lg:w-1/3 xl:w-1/3')
            div.flex.w-full
              //- start: info
              div.pb-4.pt-4.mx-4
                p.text-gray-450.text-xs
                  | Harian Kompas adalah surat kabar Indonesia yang berkantor pusat di Jakarta. Kompas diterbitkan oleh PT Kompas Media Nusantara yang merupakan bagian dari kelompok usaha Kompas Gramedia (KG), yang didirikan oleh P.K. Ojong (almarhum) dan Jakob Oetama sejak 28 Juni 1965.
                  br
                  br
                  | Mengusung semboyan "Amanat Hati Nurani Rakyat", Kompas dikenal sebagai sumber informasi tepercaya, akurat, dan mendalam.
                div.flex.flex-col.mt-4
                  div.flex.flex-row.items-center.mb-1(v-for='(item,key) in social_accounts', :key='key')
                    div.flex.w-4.mr-2
                      font-awesome-icon.text-gray-450(:icon='item.icon')
                    a.bg-gray-450.footer-social-arrow.flex.leading-none.pb-1.pl-2.pr-2.pt-1.relative.rounded-sm.text-white.text-xs(:href='item.href') {{ item.label}}
              //- end: info
          div.flex.w-full(class='lg:w-2/3 xl:w-2/3')  
            div.flex.flex-col.w-full(class='lg:flex-row xl:flex-row lg:-mx-4 xl:-mx-4')
              //- start: addresses
              div.bg-gray-50.flex.flex-col.text-gray-450.p-4.w-full(class='lg:w-2/5 xl:w-2/5')
                div.mb-4(v-for='(item,key) in addresses', :key='"address-" + key')
                  div.flex.font-bold.mb-3.text-sm.uppercase {{ item.label }}
                  div.flex.flex-row.mb-2
                    font-awesome-icon.flex.mr-2(icon='map-marker-alt')
                    div.flex.text-xs(v-html='item.addr')
                      
                  div.flex.flex-row
                    font-awesome-icon.mr-2.flex(icon='phone')
                    div.flex.flex-col.text-xs
                      a.text-gray-450(v-for='(tel, i) in item.tels', :key='"tel-" + i', :tel='tel') {{ tel }}
              //- end: addresses
              //- start: products & ads
              div.bg-gray-50.flex.flex-col.text-gray-450.w-full(class='lg:flex-row xl:flex-row lg:w-3/5 xl:w-3/5')
                div.flex.flex-col.mb-4.px-4(class='lg:py-4 xl:py-4 lg:w-1/2 xl:w-1/2')
                  div.flex.font-bold.mb-3.text-sm.uppercase Produk
                  a.block.text-gray-450.text-xs(v-for='(item, key) in products', :href='item.href', :key='"product-" + key') {{ item.label}}
                div.flex.flex-col.mb-4.px-4(class='lg:py-4 xl:py-4 lg:w-1/2 xl:w-1/2')
                  div.flex.font-bold.mb-3.text-sm.uppercase Iklan
                  a.block.text-gray-450.text-xs(v-for='(item, key) in ads', :href='item.href', :key='"ad-" + key') {{ item.label}}
              //- end: products & ads
        div.flex.w-full(class='lg:w-1/4 xl:w-1/4')
          div.flex.w-full
            //- start: about
            div.bg-blue-royal-700.p-4.w-full
              div.mb-4
                div.flex.font-bold.mb-3.text-sm.text-white.uppercase Tentang
                a.block.text-white.text-xs(v-for='(item, key) in about', :href='item.href', :key='"about-" + key') {{ item.label }}
              div.mb-4
                div.flex.font-bold.mb-3.text-sm.text-white.uppercase Lainnya
                a.block.text-white.text-xs(v-for='(item, key) in others', :href='item.href', :key='"others-" + key') {{ item.label }}
              div.pt-5(class='w-1/2 md:w-1/4 lg:w-4/5')
                a(href='https://kompas.id')
                  img.block.w-full(src='@/assets/img/logos/kompas-full-white.svg')
        //- end: about
  //- end: middle

  //- start: universal
  div.bg-gray-600.flex.flex-col.font-pt-sans.pb-12.pt-5.px-4.text-xs
    div.flex.flex-col.mx-auto.w-full.max-w-xl(class='lg:flex-row xl:flex-row')
      div.flex.mb-2.mr-2.text-gray-150(class='lg:mb-0 xl:mb-0', v-html='universal.left.credit')
      div.flex.flex-row.flex-wrap.mb-2(class='lg:mb-0 xl:mb-0')
        a.flex.text-gray-150(v-for='(item, key) in universal.left.list', :class='key < universal.left.list.length - 1 ? "border-r border-gray-150 border-solid mr-1 pr-1" : ""', v-html='item.label', :href='item.url', :key='"uni-left-" + key')
      div.flex.flex-row(class='lg:ml-auto xl:ml-auto')
        a.flex.text-gray-150(v-for='(item, key) in universal.right.list', :class='key < universal.right.list.length - 1 ? "border-r border-gray-150 border-solid mr-1 pr-1" : ""', v-html='item.label', :href='item.url', :key='"uni-left-" + key')
  //- end: universal
</template>
<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      about: [
        {
          href: 'https://korporasi.kompas.id/profil/',
          label: 'Profil Perusahaan',
        },
        {
          href: 'http://korporasi.kompas.id/sejarah/',
          label: 'Sejarah',
        },
      ],
      addresses: [
        {
          addr: 'Gedung Kompas Gramedia<br>Jalan Palmerah Selatan 26-28,<br>DKI Jakarta, Indonesia<br>10270',
          label: 'Kantor Redaksi',
          tels: [ '+6221 0000 000', '+6221 0000 000', '+6221 0000 000', '+6221 0000 000' ]
        },
        {
          addr: 'Menara Kompas<br>Jalan Palmerah Selatan 21,<br>Jakarta Pusat, DKI Jakarta,<br>Indonesia<br>10270',
          label: 'Kantor Iklan',
          tels: [ '+6221 0000 000', '+6221 0000 000', '+6221 0000 000', '+6221 0000 000' ]
        }
      ],
      ads: [
        {
          href: 'https://klasika.kompas.id/',
          label: 'Klasika',
        },
        {
          href: 'https://korporasi.kompas.id/tarif-iklan/',
          label: 'Tarif',
        },
        {
          href: 'https://adv.kompas.id/',
          label: 'Advertorial',
        },
      ],
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
      others: [
        {
          href: 'http://customer.kompasnewsletter.com/subscribe-newsletter/',
          label: 'Daftar Newsletter',
        },
      ],
      products: [
        {
          href: 'https://epaper.kompas.id/',
          label: 'ePaper',
        },
        {
          href: 'https://kompas.id/',
          label: 'Kompas.id',
        },
        {
          href: 'http://www.kompasdata.id/',
          label: 'Kompas Data',
        },
        {
          href: 'https://karier.kompas.id/',
          label: 'Kompas Karier',
        }
      ],
      social_accounts: [
        {
          href: 'https://facebook.com/hariankompas',
          icon: ['fab', 'facebook'],
          label: '@hariankompas'
        },
        {
          href: 'https://twitter.com/hariankompas',
          icon: ['fab', 'twitter'],
          label: '@hariankompas'
        },
        {
          href: 'https://instagram.com/hariankompas',
          icon: ['fab', 'instagram'],
          label: '@hariankompas'
        },
        {
          href: 'https://youtube.com/hariankompas',
          icon: ['fab', 'youtube-square'],
          label: 'Harian Kompas'
        }
      ],
      universal: {
        left: {
          credit: '&copy; PT Kompas Media Nusantara',
          list: [
            {
              label: 'Tanya Jawab',
              url: 'https://kompas.id/tanya-jawab/'
            },
            {
              label: 'Hubungi Kami',
              url: 'https://kompas.id/hubungi-kami/'
            },
            {
              label: 'Sidik Gangguan',
              url: 'https://kompas.id/sidik-gangguan/'
            },
            {
              label: 'Pedoman Media Siber',
              url: 'https://kompas.id/pedoman-media-siber/'
            },
            {
              label: 'Syarat &amp; Ketentuan',
              url: 'https://kompas.id/syarat-dan-ketentuan/'
            },
            {
              label: 'Organisasi',
              url: 'https://kompas.id/organisasi/'
            }
          ]
        },
        right: {
          list: [
            {
              label: 'Karier',
              url: 'https://karier.kompas.id/'
            },
            {
              label: 'Iklan',
              url: 'https://kompas.id/'
            },
            {
              label: 'Berlangganan',
              url: 'https://kompas.id/gerai/'
            }
          ]
        }
      },
    }
  },
}
</script>
