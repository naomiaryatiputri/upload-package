import { storiesOf } from '@storybook/vue'
import AppHeader from '@/components/headers/AppHeader.vue'
// Vue({
//   data: store,
// })

storiesOf('Components|Header/', module)
  .addDecorator(storyFn => {
    const children = storyFn()
    return {
      components: { children },
      template: '<div class="w-full max-w-xl"><children/></div>'
    }
  }) 
  .add('Header Top Bar', () => ({
    components: { AppHeader },
    template: `
      <app-header></app-header>`,     
  }))