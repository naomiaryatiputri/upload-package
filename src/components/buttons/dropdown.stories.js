import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'
import ButtonDropdown from '@/components/buttons/dropdown.vue'

storiesOf('Components|Navigations/Buttons/', module)
.addDecorator(storyFn => {
  const children = storyFn()
  return {
    components: { children },
    template: '<div class="w-full max-w-xl"><children/></div>'
  }
})
.addDecorator(StoryRouter())
.add('Dropdown', () => ({
  components: { ButtonDropdown },
  template: `
    <button-dropdown :items="items" title="Rubrik Foto"></button-dropdown>
  `,
  data() {
    return {
      items: [
        {
          is_active: false,
          label: 'Semua',
          to: '/category',
        },
        {
          is_active: false,
          label: 'Menu1',
          to: '/category',
        },
        {
          is_active: true,
          label: 'Menu2',
          to: '/category',
        },
        {
          is_active: false,
          label: 'Menu3',
          to: '/category',
        },
      ]
    }
  }
}),{
  notes: 'Atribut yang dibutuhkan merupakan array menu yaitu :menuItems dan judul menu yaitu titleDrop'
})