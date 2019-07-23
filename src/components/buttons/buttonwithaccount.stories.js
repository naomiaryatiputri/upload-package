import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'
import ButtonWithAccount from '@/components/buttons/buttonwithaccount.vue'

storiesOf('Components|Navigations/Buttons/', module)
.addDecorator(storyFn => {
  const children = storyFn()
  return {
    components: { children },
    template: '<div class="w-full max-w-xl"><children/></div>'
  }
})

.addDecorator(StoryRouter())

.add('Button Login With Facebook', () => ({
  components: { ButtonWithAccount },
  template: '<button-with-account icon="facebook" label="Daftar dengan Facebook"></button-with-account>',
}),{
  notes: 'Tombol untuk akun masuk melalui facebook'
}
)

.add('Button Login With Google', () => ({
  components: { ButtonWithAccount },
  template: '<button-with-account icon="google" label="Daftar dengan Google"></button-with-account>',
}),{
  notes: 'Tombol untuk akun masuk melalui google'
}
)