<template lang="pug">
div.px-4.pb-24(class='lg:px-0')
  p.capitalize.font-bold.font-chronicle-display.leading-normal.pt-8.text-2xl.text-center.text-gray-600 Daftar Akun
  //- Text
  p.font-pt-sans.leading-relaxed.max-w-sm.mx-auto.pt-2.pb-4.text-base.text-center.text-gray-600 Daftar sekarang dan dapatkan askes gratis ke seluruh konten Kompas.id selama 10 hari.
  
  div.fle.flex-col.max-w-xl.mx-auto.relative(class='md:flex-row')
    //- Box Gray
    div.border.border-gray-100.max-w-sm.mx-auto.my-4.p-6.rounded(v-if='!hasSucceeded')

      //- Error
      div.border.border-red-thunderbird-700.bg-red-thunderbird-100.max-w-sm.mx-auto.my-4.p-4.rounded-sm(v-if='terdaftar' )
        div.flex.flex-row
          div.mr-2.self-center
            font-awesome-icon.mr-4.text-2xl.text-red-thunderbird-700(:icon=['fas', 'check-circle'])
          div.flex.flex-col
            p.font-pt-sans.text-base.text-gray-600 Maaf, email tersebut telah terdaftar.  
              span.text-blue-royal-500 Apakah Anda ingin login?


      //- Input Email
      input(autofocus='', v-model='email', :class="inputClassesEmail()", type="email", placeholder="Masukkan alamat email anda", ref='email')
      div(v-if='hasErrors')
        font-awesome-icon.mr-2.text-base.text-red-thunderbird-700(:icon=['fas', 'exclamation-circle'])
        span.font-pt-sans.text-sm.text-red-thunderbird-700 {{errorMessageEmail}}

      //- Input Password
      div.border.border-gray-100.flex.flex-row.mb-2.mt-4.relative(:class='hasEmpty?"border-red-thunderbird-700 bg-red-thunderbird-100":""')
        input(v-model='password', :class="inputClassesPassword()", type="password"  id="inputPassword" placeholder="Masukkan kata sandi baru" ref='password' )
        button.absolute.flex.flex-row.self-center.items-center.justify-center.pr-5.right-0(@click='myFunction', :class='labelPass === "Lihat" ? "text-gray-450" : "text-blue-royal-500"')
          font-awesome-icon.mr-0.text-base(class='lg:mr-2', :icon='fontAwe')
          p.font-pt-sans.hidden.text-sm(class='lg:inline') {{ labelPass }}

      //- Jika Password Kosong
      div.pb-4(v-if='hasEmpty')
        font-awesome-icon.mr-2.text-base.text-red-thunderbird-700(:icon=['fas', 'exclamation-circle'])
        span.font-pt-sans.text-sm.text-red-thunderbird-700 {{ errorMessage }} 

      p.font-pt-sans.leading-snug.mb-4.text-sm.text-gray-450 Kata sandi wajib mengandung huruf kapital, angka dan simbol (@,#,$,dst.), dengan jumlah minimal 10 karakter. 

      p.font-pt-sans.leading-snug.my-4.text-base.text-center.text-gray-600 Dengan menekan tombol “DAFTAR” di bawah ini, saya setuju dengan 
        span
          a.text-blue-royal-500(href='#') Syarat dan Ketentuan

      Buttons.my-4(@submit="submit", titleDrop="Daftar" :wFull='true' :bold='true' :blue='true' :sizeFont='base')

      p.text-center
        span.font-pt-sans.text-gray-600.text-sm Sudah punya akun?
        span.font-pt-sans.no-underline.text-sm.text-blue-royal-500(href='#')  Silahkan masuk.

    //- Kolom informasi berlangganan
    div.static.flex.flex-col.mx-auto.pt-6.pb-16.p-4(class='lg:w-1/3 lg:absolute lg:flex-none lg:p-6 lg:top-0 lg:right-0 lg:-mr-32 md:max-w-sm md:mx-auto')
      p.font-bold.font-pt-sans.leading-none.text-base.text-blue-royal-700 Ingin langsung berlangganan?
      p.font-pt-sans.leading-snug.text-sm.my-4.text-black Dengan berlangganan paket Kompas Digital Premium seharga 
        span.font-bold.text-blue-royal-700 Rp 50.000/bulan
        | Anda sudah bisa mendapatkan akses ke :
      div.flex.flex-row.pb-4(v-for='(item, key) in items', :key='key')
        font-awesome-icon.mr-2.text-base.text-blue-royal-700(:icon=['fas', 'check'])
        p.font-pt-sans.text-sm.text-black.leading-snug {{ item.caption }}
      Buttons.text-blue-royal-500(titleDrop="BERLANGGANAN" :wFull='true' :bold='true' :gray='true' to='/#')


</template>

<script>
import Buttons from '@/components/buttons/button.vue'
import ButtonWithAccount from '@/components/buttons/buttonwithaccount.vue'


export default {
  name: 'Register',
  components:{
    Buttons,
    ButtonWithAccount,
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
      errorMessage:'',
      errorMessageEmail:'',
      hasErrors: false,
      email: '',
      emailSuccess:'',
      errorCount:0,
      terdaftar: false,
      items: [
        {
          caption: 'E-Koran Kompas'
        },
        {
          caption: 'Artikel Terbaru, dan Reportase Langsung'
        },
        {
          caption: 'Rubrik Opini Publik, Populer, Indikator, Pantau Media, dan Telah'
        },
        {
          caption: 'Rubrik Tutur Visual, Suara Kompas, Editor’s Choice, Datagrafik, dan Fotostory'
        },
        {
          caption: 'Semua artikel di Kompas.id'
        },
      ],
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
  // watch:{
  //   email(value){
  //     var filtered = this.userData.filter(function(ob) {
  //       return ob['user'].toLowerCase().includes(value.toLowerCase());
  //     });
  //     if(filtered != ''){
  //       console.log('ada email sama')
  //     }else{
  //       console.log('tidak')
  //     }
  //   }
  // },
  methods: {
    inputClassesEmail() {
      let classes = [
        'appearance-none',
        'border',
        'border-gray-100',
        'font-pt-sans',
        'leading-tight',
        'mb-2',
        'p-4',
        'rounded-sm',
        'text-base',
        'text-gray-600',
        'w-full',
        'focus',
        'outline-none'
      ]

      if (this.hasErrors) classes.push('border-red-thunderbird-700 bg-red-thunderbird-100')
      return classes.join(' ')
    },
    check(){
      const _self = this
      var filtered = _self.userData.filter(function(ob) {
        return ob['user'].toLowerCase().includes(_self.email.toLowerCase());
      });
      if(filtered != ''){
        return false
      }else{
        return true
      }
    },
    inputClassesPassword() {
      let classes = [
        'appearance-none',
        'border-none',
        'font-pt-sans',
        'leading-tight',
        'p-4',
        'rounded-sm',
        'text-base',
        'text-gray-600',
        'w-full',
        'focus',
        'outline-none',
        'pr-24'
      ]

      if (this.hasEmpty) classes.push('border border-red-thunderbird-700 bg-red-thunderbird-100')
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
      const _self = this
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
        console.log(this.isStrongPass(this.password))
        if(this.validateEmail(this.email)){
          if(this.check()) {
              console.log('user belum ada')
              this.hasSucceeded = true
            }else{
                console.log('user udah ada')
                this.terdaftar = true
          }
        }else{
          if(this.validateEmail(this.email) === false){
            this.hasErrors = true
            this.errorMessageEmail = 'Masukkan format email yang benar.'
          }
          if(this.isStrongPass(this.password) === false){
            this.hasEmpty = true
            this.errorMessage = 'Kata sandi harus sesuai yang ditentukan.'
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