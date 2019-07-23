import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  // faFacebook,
  faFacebookF,
  faGoogle,
  // faInstagram,
  // faLine,
  // faTwitter,
  faWhatsapp,
  // faYoutubeSquare
} from '@fortawesome/free-brands-svg-icons'
import { 
  // faCalendarAlt,
  faClock,
  faClone,
  faEnvelope,
  faEye,
  faEyeSlash,
  // faHourglass,
  // faNewspaper
} from '@fortawesome/free-regular-svg-icons'
import { 
  // faAngleLeft,
  // faAngleDown,
  // faAngleRight,
  faArrowLeft,
  // faArrowRight,
  // faBars,
  // faBriefcase,
  faCheck,
  faCheckCircle,
  // faChevronDown,
  // faChevronLeft,
  faChevronRight,
  // faChevronUp,
  faExclamationCircle,
  // faFont,
  // faHome,
  // faImages,
  // faLink,
  // faMapMarkerAlt,
  // faPlay,
  faPhone,
  // faReply,
  // faSearch,
  // faShoppingCart,
  // faSignInAlt,
  // faStoreAlt,
  // faTag,
  // faTags,
  // faUserCircle,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  // faAngleDown,
  // faAngleLeft,
  // faAngleRight,
  faArrowLeft,
  // faArrowRight,
  // faBars, 
  // faBriefcase,
  // faCalendarAlt,
  faCheck,
  faCheckCircle,
  // faChevronDown, 
  // faChevronLeft,
  faChevronRight, 
  // faChevronUp,
  faClock, 
  faClone,
  faExclamationCircle,
  faEnvelope, 
  faEye,
  faEyeSlash,
  // faFacebook,
  faFacebookF,
  // faFont,
  faGoogle,
  // faHome,
  // faHourglass,
  // faImages,
  // faInstagram,
  // faLine,
  // faLink,
  // faMapMarkerAlt,
  // faNewspaper,
  // faPlay,
  faPhone, 
  // faReply,
  // faSearch, 
  // faShoppingCart, 
  // faSignInAlt, 
  // faStoreAlt, 
  // faTag,
  // faTags,
  // faTwitter,
  // faUserCircle, 
  faWhatsapp,
  // faYoutubeSquare
)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

let store = {
  state: {
    show_side_nav: false,
    user_is_logged_in: true,
    toggleSideNav() {
      this.show_side_nav = !this.show_side_nav
    }
  }
}

new Vue({
  data: store,
  router,
  render: h => h(App)
}).$mount('#app')
