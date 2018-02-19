import github from '../../api/github'

const state = {
  all: []
}

const getters = {
  allIssues: state => state.all
}

// actions
const actions = {
  getIssues({ commit }, params) {
    github.getIssues(issues => commit('setIssues', issues), params)
  }
}

// mutations
const mutations = {
  setIssues(state, issues) {
    state.all = issues
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
