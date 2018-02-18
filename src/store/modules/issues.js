import github from '../../api/github'

const state = {
  all: []
}

const getters = {
  allIssues: state => state.all
}

// actions
const actions = {
  getIssues({ commit, page, options }) {
    github.getIssues(issues => commit('setIssues', issues), page, options)
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
