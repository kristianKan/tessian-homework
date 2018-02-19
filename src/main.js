import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueMaterial from 'vue-material'
import { MdButton, MdCard } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)
Vue.use(MdButton)
Vue.use(MdCard)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

