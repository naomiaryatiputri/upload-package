<template lang="pug">
div.px-4.pb-24(class='lg:px-0')

  p.capitalize.font-bold.font-chronicle-display.leading-normal.pt-8.text-2xl.text-center.text-gray-600 Selamat Datang Kembali
  //- Text
  p.font-pt-sans.leading-relaxed.max-w-sm.mx-auto.pt-2.pb-4.text-base.text-center.text-gray-600 Silahkan masuk untuk menikmati semua konten premium situs Kompas.id
  
  //- Box Gray
  div.border.border-gray-100.max-w-sm.mx-auto.p-6.rounded(v-if='!hasSucceeded')
    //- Button
    //- button.bg-blue-royal-700.flex.flex-row.mb-4.rounded-sm.w-full.justify-center.items-center
    //-   font-awesome-icon.text-lg.text-white(class='w-1/6', :icon=['fab', 'facebook-f'])
    //-   span.font-pt-sans.leading-tight.p-4.text-sm.text-white.self-center(class='w-5/6 lg:text-base') Masuk dengan Facebook
    //- button.bg-red-thunderbird-700.flex.flex-row.mb-4.rounded-sm.w-full.justify-center.items-center
    //-   font-awesome-icon.text-lg.text-white(class='w-1/6', :icon=['fab', 'google'])
    //-   span.font-pt-sans.leading-tight.p-4.text-sm.text-white.self-center(class='w-5/6 lg:text-base') Masuk dengan Google  


    button-with-account(icon="facebook" label="Daftar dengan Facebook")
    button-with-account(icon="google" label="Daftar dengan Google")
    
    div.flex.flex-row.items-center.my-6.w-full
      hr.mr-4(class='w-1/4 lg:mr-4')
      p.align-middle.font-pt-sans.text-gray-450.text-center.text-xs(class='lg:text-sm') Atau masuk dengan email
      hr.ml-4(class='w-1/4 lg:ml-4')
    
    //- Error
    div.bg-red-thunderbird-100.border.border-red-thunderbird-700.max-w-sm.mx-auto.my-4.p-4.rounded-sm(v-if='terdaftar' )
      div(v-if='errorCount < 5')
        div.flex.flex-row
          div.mr-2.self-center
            font-awesome-icon.mr-4.text-2xl.text-red-thunderbird-700(:icon=['fas', 'check-circle'])
          div.flex.flex-col
            p.font-pt-sans.text-base.text-gray-600 Maaf, email atau kata sandi Anda salah. 
              span.text-blue-royal-500 Apakah anda lupa kata sandi.
      div.flex.flex-row(v-if='errorCount >= 5')
        div.mr-2.self-center
          font-awesome-icon.mr-4.text-2xl.text-red-thunderbird-700(:icon=['fas', 'check-circle'])  
        p.font-pt-sans.text-base.text-gray-600 {{ countErrorMessage }}


    //- Input Email
    input(autofocus='', v-model='email', :class="inputClassesEmail()", type="email", placeholder="Masukkan alamat email anda", ref='email')
    div.pt-2(v-if='hasErrors')
      font-awesome-icon.mr-2.text-base.text-red-thunderbird-700(:icon=['fas', 'exclamation-circle'])
      span.font-pt-sans.text-sm.text-red-thunderbird-700 {{errorMessageEmail}}
    
    //- Input Kata Sandi

    div.border.border-gray-100.flex.flex-row.mt-4.relative  
      input.pr-24(v-model='password', :class="inputClassesPassword()", type="password"  id="inputPassword" placeholder="Masukkan kata sandi baru" ref='password' )
      button.absolute.flex.flex-row.self-center.items-center.justify-center.pr-5.right-0(@click='myFunction', :class='labelPass === "Lihat" ? "text-gray-450" : "text-blue-royal-500"')
        font-awesome-icon.mr-0.text-base(class='lg:mr-2', :icon='fontAwe')
        p.font-pt-sans.hidden.text-sm(class='lg:inline') {{ labelPass }}




    div.pt-2(v-if='hasEmpty')
      font-awesome-icon.mr-2.text-base.text-red-thunderbird-700(:icon=['fas', 'exclamation-circle'])
      span.font-pt-sans.text-sm.text-red-thunderbird-700 {{ errorMessage }} 
  
    div.flex.flex-row.justify-between.pt-4
      //- Checkbox
      div.flex.flex-row
        input.border.border-gray-100.h-4.leading-tight.mt-1.mr-2.w-4(type='checkbox')
        p.font-pt-sans.text-base Ingat saya
      
      div.self-center
        a.font-pt-sans.no-underline.text-sm.text-blue-royal-700(href='#') Lupa kata sandi?

    //- Button  
    //- button(@click='submit') TEST 
    Buttons.my-4(@submit="submit", titleDrop="masuk" :wFull='true' :bold='true' :blue='true' sizeFont='base')

    p.text-center
      span.font-pt-sans.text-gray-600.text-sm Belum punya akun? 
      span.font-pt-sans.no-underline.text-sm.text-blue-royal-700(href='#') Silahkan mendaftar.


</template>

<script>
import Buttons from '@/components/buttons/button.vue'
import ButtonWithAccount from '@/components/buttons/buttonwithaccount.vue'

export default {
  name: 'LoginPage',
  components:{
    Buttons,
    ButtonWithAccount
  },
  data()
  {
    return {
      labelPass:'Lihat',
      fontAwe:['far', 'eye'],
      errorMessage:'',
      errorMessageEmail:'',
      email: '',
      emailSuccess:'',
      errorCount:0,
      countErrorMessage:'',
      hasEmpty: false,
      hasErrors: false,
      hasSucceeded: false,
      password: '',
      passwordSuccess:'',
      terdaftar:false,
      userData:[
        {
          user:'email@email.com',
          pass:'123qwe123'
        },
        {
          user:'email1@email.com',
          pass:'123qwe123'
        },
        {
          user:'email2@email.com',
          pass:'123qwe123'
        },
        {
          user:'email3@email.com',
          pass:'123qwe123'
        },
      ],
    }
  },
  methods: {
    check(){
      const _self = this
      var email = _self.userData.filter(function(ob) {
        return ob['user'].toLowerCase().includes(_self.email.toLowerCase());
      });
      var password = _self.userData.filter(function(ob) {
        return ob['pass'].toLowerCase().includes(_self.password.toLowerCase());
      });
      if(email != '' && password != ''){
        return true
      }else{
        return false
      }
    },
    inputClassesEmail() {
      let classes = [
        'appearance-none',
        'border',
        'border-gray-100',
        'font-pt-sans',
        'leading-tight',
        'p-4',
        'rounded-sm',
        'text-base',
        'text-gray-600',
        'w-full',
        'focus:outline-none',
      ]

      if (this.hasErrors) classes.push('border-red-thunderbird-700 bg-red-thunderbird-100')
      return classes.join(' ')
    },
    inputClassesPassword() {
      let classes = [
        'appearance-none',
        'font-pt-sans',
        'leading-tight',
        'p-4',
        'rounded-sm',
        'text-base',
        'text-gray-600',
        'w-full',
        'focus',
        'outline-none'
      ]

      if (this.hasEmpty == true) classes.push('border border-red-thunderbird-700 bg-red-thunderbird-100')
      return classes.join(' ')
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
    submit() {
      if(this.email ===''){
          this.hasErrors = true
          this.errorMessageEmail = 'Email harus diisi'
      }else{
        this.hasErrors = false
      }
      if (this.password === ''){
        this.hasEmpty = true
        this.errorMessage = 'Kata sandi harus diisi. '
      }else{
        this.hasEmpty = false
      }

      if(this.email !='' && this.password != ''){
        if(this.validateEmail(this.email)){
          if(this.check()) { 
            console.log('user udah ada')
              this.hasSucceeded = true
            
          }else{
            console.log('user belum ada')
            this.terdaftar = true
            this.errorCount += 1
              this.countErrorMessage = 'Maaf, email atau kata sandi Anda salah. '
            if(this.errorCount >= 5){
              this.countErrorMessage = 'Maaf, Anda telah 5 kali gagal masuk, silahkan menunggu 30 menit untuk mencoba lagi.'
            }

        }
        }else{
          if(this.validateEmail(this.email) === false){
            this.hasErrors = true
            this.errorMessageEmail = 'Masukkan format email yang benar.'
          }
        }
      }
    },
    validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  }
}
 
</script>