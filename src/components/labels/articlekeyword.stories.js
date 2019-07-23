import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'
import ArticleKeyword from '@/components/labels/ArticleKeyword.vue'

storiesOf('Components|Labels/', module)
  .addDecorator(storyFn => {
    const children = storyFn()
    return {
      components: { children },
      template: '<div class="w-full max-w-xl"><children/></div>'
    }
  })
  .addDecorator(StoryRouter())
  .add('ArticleKeyword', () => ({
    components: { ArticleKeyword },
    template: '<article-keyword></article-keyword>',
  }),{
    notes: 'Keywords'
  }
  )