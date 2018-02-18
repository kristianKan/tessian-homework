import Vue from 'vue'
import Vuex from 'vuex'
import issues from './modules/issues'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    issues
  },
  strict: debug
})
