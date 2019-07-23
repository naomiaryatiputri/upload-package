<template lang="pug">
div.px-4.min-h-320(class='lg:px-0')
  p.capitalize.font-bold.font-chronicle-display.leading-normal.pt-8.text-2xl.text-center.text-gray-600 ganti kata sandi
  
  //- Text
  p.font-pt-sans.leading-relaxed.max-w-sm.mx-auto.pt-2.pb-4.text-base.text-center.text-gray-600 Silahkan masukkan kata sandi baru Anda.

  //- Box Gray
  div.border.border-gray-100.max-w-sm.mx-auto.mt-4.p-6.rounded.my-16(v-if='!hasSucceeded')
    //- Input Ganti Kata Sandi
    div.border.border-gray-100.flex.flex-row.mb-2.relative(:class='hasEmpty?"border-red-thunderbird-700 bg-red-thunderbird-100":""')  
      input.pr-24(autofocus='', v-model='password', :class="inputClassesPassword()", type="password"  id="inputPassword" placeholder="Masukkan kata sandi baru" ref='password' )
      button.absolute.flex.flex-row.self-center.items-center.justify-center.pr-5.right-0(@click='myFunction', :class='labelPass === "Lihat" ? "text-gray-450" : "text-blue-royal-500"')
        font-awesome-icon.mr-0.text-base(class='lg:mr-2', :icon='fontAwe')
        p.font-pt-sans.hidden.text-sm(class='lg:inline') {{ labelPass }}
    

    div.pb-4(v-if='hasEmpty')
      font-awesome-icon.mr-2.text-base.text-red-thunderbird-700(:icon=['fas', 'exclamation-circle'])
      span.font-pt-sans.text-sm.text-red-thunderbird-700 {{ errorMessage }} 
    p.font-pt-sans.leading-snug.text-sm.text-gray-450 Kata sandi wajib mengandung huruf kapital, angka dan simbol (@,#,$,dst.), dengan jumlah minimal 10 karakter. 

    //- Button  
    Buttons.my-4(@submit="submit", titleDrop="masuk" :wFull='true' :bold='true' :blue='true' :sizeFont='base')
    
  //- Email Has Been Sent
  div(v-else)
    div.bg-blue-royal-100.border.border-blue-royal-700.flex.flex-row.max-w-sm.mx-auto.my-4.p-6.rounded-sm
      div.mr-2.self-center
        font-awesome-icon.mr-4.text-2xl.text-blue-royal-700(:icon=['fas', 'check-circle'])
      div.flex.flex-col
        p.font-bold.font-pt-sans.text-base.text-gray-600 Tautan Telah Dikirim 
        p.font-pt-sans.text-base.text-gray-600 Silahkan gunakan kata sandi tersebut untuk 
          span.font-bold.text-blue-royal-500 masuk 
          span ke Kompas.id.
</template>

<script>
import Buttons from '@/components/buttons/button.vue'

export default {
  name: 'PasswordSecondStep',
  components:{
    Buttons,
  },
  data()
  {
    return {
      labelPass:'Lihat',
      fontAwe:['far', 'eye'],
      hasEmpty: false,
      hasSucceeded: false,
      password: '',
      passwordSuccess:'',
      errorMessage:''
    }
  },
  methods: {
    inputClassesPassword() {
      let classes = [
        'appearance-none',
        'border',
        'border-none',
        'font-pt-sans',
        'leading-tight',
        'p-4',
        'rounded-sm',
        'text-base',
        'text-gray-450',
        'w-full',
        'focus',
        'outline-none'
      ]

      if (this.hasEmpty) classes.push('border-red-thunderbird-700 bg-red-thunderbird-100')
      return classes.join(' ')
    },
    submit() {
      if (this.password === ''){
        this.hasEmpty = true
        this.errorMessage = 'Kata sandi harus diisi. '
      }else{
        if(this.isStrongPass(this.password)){
          this.hasSucceeded = true
        }else{
          this.hasEmpty = true
          this.errorMessage = 'Kata sandi harus sesuai yang ditentukan.'
        }
      }
    },
    isStrongPass(password) {
        var regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{10,}/;
        var validPassword = regExp.test(password);
        return validPassword;
    },
    myFunction() {
      var x = this.$refs.password
      if (x.type === "password") {
          x.type = "text";
          this.fontAwe = ['far', 'eye-slash']
          this.labelPass = 'Tutup'
      } else {
          x.type = "password";
          this.fontAwe = ['far', 'eye']
          this.labelPass = 'Lihat'
      } 
      x.focus()
    },
    setFocus: function() {
      // Note, you need to add a ref="search" attribute to your input.
      this.$refs.password.focus();
    }


  }
}
 
</script>