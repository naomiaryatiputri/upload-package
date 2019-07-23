import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'
import LabelStack from '@/components/labels/labelstack.vue'

storiesOf('Components|Labels/Label Stack', module)
  .addDecorator(StoryRouter())
  .add('Default', () => ({
    components: { LabelStack },
    template: '<label-stack number="10"></label-stack>',
  }))
  .add('With Additional Text', () => ({
    components: { LabelStack },
    template: '<label-stack number="10" addText="Stack"></label-stack>',
  }))
  .add('With Another Font Awesome', () => ({
    components: { LabelStack },
    template: '<label-stack number="10" addText="Stack" fontAws="store-alt"></label-stack>',
  }))
  