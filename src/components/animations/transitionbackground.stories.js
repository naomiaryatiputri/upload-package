import { storiesOf } from '@storybook/vue'


storiesOf('Components|Animations/', module)
.addDecorator(storyFn => {
  const children = storyFn()
  return {
    components: { children },
    template: '<div class="w-full max-w-xl"><children/></div>'
  }
})
.add('Transition Background', () => ({
  data() {
    return {
      url:'https://kompas.id/wp-content/themes/mumed_kompas_dot_id_2016/assets/img/icons/infografik-logo.png'
    }
  },
  template: `
    <a class='bg-gray-100 border-l border-gray-150 flex font-pt-sans items-end text-gray-450 text-xs py-5 px-10 transition-background uppercase hover:bg-gray-600 hover:text-white'>
      <span class='py-2'>
        Perubahan background selama 0.3s
      </span>
    </a>
  `
}),{
  notes: 'Menggunakan class transition-background untuk menambahkan efek delay selama 0.3s untuk perubahan warna background'
})