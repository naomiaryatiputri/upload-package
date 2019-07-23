import { storiesOf } from '@storybook/vue'
import AppFooter from '@/components/footers/AppFooter.vue'

storiesOf('Components|Footer/', module)
  .addDecorator(storyFn => {
    const children = storyFn()
    return {
      components: { children },
      template: '<div class="w-full lg:mx-2"><children/></div>'
    }
  }) 
  .add('Footer', () => ({
    components: { AppFooter },
    template: `
			<app-footer></app-footer>`,
  }))