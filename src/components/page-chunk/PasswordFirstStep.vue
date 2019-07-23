<template lang="pug">
div.px-4.min-h-320(class='lg:px-0')
  p.capitalize.font-bold.font-chronicle-display.leading-normal.pt-8.text-2xl.text-center.text-gray-600 Selamat Datang Kembali
  //- Text
  p.font-pt-sans.leading-relaxed.max-w-sm.mx-auto.pt-2.pb-4.text-base.text-center.text-gray-600 Silahkan masuk untuk menikmati semua konten premium situs Kompas.id
  //- Box Gray
  div.border.border-gray-100.max-w-sm.mx-auto.mt-4.p-6.mb-16.rounded(v-if='!hasSucceeded')
    //- button
    button.
    //- Input
    input(:autofocus='true', v-model='email', :class="inputClassesEmail()", type="text", placeholder="Masukkan alamat email anda", ref='email')
    div.pb-4(v-if='hasErrors')
      font-awesome-icon.mr-2.text-base.text-red-thunderbird-700(:icon=['fas', 'exclamation-circle'])
      span.font-pt-sans.text-sm.text-red-thunderbird-700 Email harus diisi.
    
    //- Button
    Buttons.my-4(@submit="submit", titleDrop="masuk" :wFull='true' :bold='true' :blue='true' :sizeFont='base')
    
  //- Email Has Been Sent
  div(v-else)
    div.bg-blue-royal-100.border.border-blue-royal-700.flex.flex-row.max-w-sm.mx-auto.my-4.p-6.rounded-sm
      div.mr-2.self-center
        font-awesome-icon.mr-4.text-2xl.text-blue-royal-700(:icon=['fas', 'check-circle'])
      div.flex.flex-col
        p.font-bold.font-pt-sans.text-base.text-gray-600 Tautan Telah Dikirim 
        p.font-pt-sans.text-base.text-gray-600 Jika Anda tidak menerima email tersebut, silahkan periksa folder spam atau hubungi 
          span.font-bold.text-blue-royal-500 Layanan Pelanggan 
          span kami.
    
</template>

<script>
import Buttons from '@/components/buttons/button.vue'

export default {
  name: 'PasswordFirstStep',
  components:{
    Buttons,
  },
  data()
  {
    return {
      hasErrors: false,
      hasSucceeded: false,
      email: '',
      emailSuccess:''
    }
  },
  methods: {
    inputClassesEmail() {
      let classes = [
        'appearance-none',
        'border',
        'border-blue-royal-500',
        'font-pt-sans',
        'leading-tight',
        'mb-2',
        'p-4',
        'rounded-sm',
        'text-base',
        'text-gray-450',
        'w-full',
        'focus:outline-none',
      ]

      if (this.hasErrors) classes.push('border-red-thunderbird-700 bg-red-thunderbird-100')
      return classes.join(' ')
    },
    submit() {
      if (this.email === ''){
        this.hasErrors = true
      }else{
        this.hasSucceeded = true
      }
    }
  }
}
 
</script>