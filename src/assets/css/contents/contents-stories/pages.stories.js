import { storiesOf } from '@storybook/vue'


storiesOf('CSS/Contents', module)
.addDecorator(storyFn => {
  const children = storyFn()
  return {
    components: { children },
    template: '<div class="w-full max-w-xl"><children/></div>'
  }
})
.add('Pages', () => ({
  template: `
  <div class="flex flex-col page py-4 w-full">
    <p>
      Ini contoh text yang ada di dalam tag p dengan class page yang ditempati di tag pembungkus. 
    </p>
  </div>    
  `
}))