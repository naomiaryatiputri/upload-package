import { storiesOf } from '@storybook/vue'
import InputBox from '@/components/input/InputBox.vue'

storiesOf('Components|Inputs/', module)
  .addDecorator(storyFn => {
    const children = storyFn()
    return {
      components: { children },
      template: '<div class="w-full max-w-xl"><children/></div>'
    }
  })
  .add('Text', () => ({
    components: { InputBox },
    data(){
      return {
        item:[
          {
            caption: 'Masukan password baru',
            id: 'text',
            type: 'text',
          }
        ]
      }
    },
    template: '<input-box text :items="item"></input-box>',
  }),{
    notes: 'Input Text'
  }
  )
  .add('Password', () => ({
    components: { InputBox },
    data() {
      return {
        item: [
          {
            caption: 'Masukan password baru',
            id: 'password',
            type: 'password',
          }
        ]
      }
    },
    template: '<input-box :items="item"></input-box>',
  }),{
    notes: 'Input Password'
  }
  )
