import github from '../../api/github'

const state = {
  pageSize: 30,
  pageCount: [],
  issues: []
}

const getters = {
  issues: state => state.issues,
  issuesCount: state => state.pageCount * state.pageSize
}

// actions
const actions = {
  getIssues({ commit }, params) {
    github.getIssues(
      pageCount => commit('setPageCount', pageCount),
      issues => commit('setIssues', issues),
      params
    )
  }
}

// mutations
const mutations = {
  setIssues(state, newState) {
    state.issues = newState
  },

  setPageCount(state, newState) {
    state.pageCount = newState
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
