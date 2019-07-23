import { storiesOf } from '@storybook/vue'
import LabelClip from '@/components/labels/LabelClip.vue'

storiesOf('Components|Labels/', module)
.addDecorator(storyFn => {
  const children = storyFn()
  return {
    components: { children },
    template: '<div class="w-full max-w-xl"><children/></div>'
  }
})
.add('LabelClip Main', () => ({
  components: { LabelClip },
  template: `
    <label-clip title="Cliping" typeLabel="main" url="#"></label-clip>
  `
}),{
  notes: 'Menggunakan atribut title, typeLabel dan url. untuk typeLabel jika main berwarna biru'
})
.add('LabelClip Sub', () => ({
  components: { LabelClip },
  template: `
    <label-clip title="Cliping" typeLabel="sub" url="#"></label-clip>
  `
}),{
  notes: 'Menggunakan atribut title, typeLabel dan url. untuk typeLabel jika main berwarna biru'
})