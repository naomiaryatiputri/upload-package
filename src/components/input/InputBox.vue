<template lang="pug">
div.pb-4
  div(v-if='text')
    div(v-for='(item, key) in items', :key='key')
      input.border.border-blue-royal-500.w-full.p-4(v-bind:type="item.type" v-bind:id="item.id" v-bind:placeholder="item.caption" )

  div(v-else)
    div.border.border-gray-100.flex.flex-row.mb-4(v-for='(item,key) in items', :key='key')
      input.w-full.p-4(v-model='password', :class="inputClassesPassword()", id="inputPassword" type="password" v-bind:placeholder="item.caption")
      button.flex.flex-row.self-center.items-center.justify-center(@click='myFunction', class='w-1/4')
        font-awesome-icon.mr-0.text-base.text-gray-300(class='lg:mr-2', :icon=['far', 'eye'])
        p.text-gray-450.font-pt-sans.hidden.text-sm(class='lg:inline') Lihat

</template>

<script>
export default {
  name: 'Input',
  data() {
    return {
      password: '',
      passwordSuccess:'',
      // items: [
      //   {
      //     caption: 'Masukan password baru',
      //     id: 'password',
      //     type: 'password',
      //   }
      // ]
    }
  },
  props:{
    items:Array,
    text: Boolean
  },
  methods:{
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
        'text-gray-600',
        'w-full',
        'focus:outline-none',
      ]

      if (this.hasEmpty) classes.push('border-red-thunderbird-700 bg-red-thunderbird-100')
      return classes.join(' ')
    },
    isStrongPass(password) {
        var regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{10,}/;
        var validPassword = regExp.test(password);
        return validPassword;
    },
    myFunction() {
      var x = document.getElementById("inputPassword");
      if (x.type === "password") {
          x.type = "text";
      } else {
          x.type = "password";
      }
    },
  }
}
</script>
