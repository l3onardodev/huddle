import Vue from 'vue'
import App from './App.vue'
import router from './router'

import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../scss/custom.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faTwitter, faFacebook, faInstagram)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
