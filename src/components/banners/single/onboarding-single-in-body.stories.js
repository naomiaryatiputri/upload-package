import { storiesOf } from '@storybook/vue'
import BannerOnboardingSingleInBody from '@/components/banners/single/OnboardingSingleInBody.vue'

storiesOf('Components|Banners/Onboardings/Single', module)
  .addDecorator(storyFn => {
    const children = storyFn();
    return {
      components: { children },
      template: '<div class="w-full max-w-md p-4"><children/></div>',
    };
  })
  .add('Single in-content', () => ({
    components: { BannerOnboardingSingleInBody },
    template: '<banner-onboarding-single-in-body></banner-onboarding-single-in-body>',
    data() {
      return {}
    }
  }))