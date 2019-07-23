import { storiesOf } from '@storybook/vue'
import BannerOnboardingSingleBodyBottom from '@/components/banners/single/OnboardingSingleBodyBottom.vue'

storiesOf('Components|Banners/Onboardings/Single', module)
  .add('Single at bottom', () => ({
    components: { BannerOnboardingSingleBodyBottom },
    template: '<banner-onboarding-single-body-bottom></banner-onboarding-single-body-bottom>',
    data() {
      return {}
    }
  }))
  .add('Single at bottom w/ promo', () => ({
    components: { BannerOnboardingSingleBodyBottom },
    template: '<banner-onboarding-single-body-bottom :has-promo="true"></banner-onboarding-single-body-bottom>',
    data() {
      return {}
    }
  }))