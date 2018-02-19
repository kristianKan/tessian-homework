/**
 * This is a simple implementation of filters module where each filter is
 * treated as a string. Filters are combined into a params object passed on to
 * the api call. It is possible to improve the UX by preloading milestones,
 * labels and assignees and have them display as selectors.
 */
const state = {
  labels: '',
  milestone: '',
  state: 'all',
  assignee: '',
  creator: '',
  mentioned: '',
  page: 1
}

const getters = {
  params: state => ({
    ...state.labels && { labels: state.labels },
    ...state.milestone && { milestone: state.milestone },
    ...state.state && { state: state.state },
    ...state.assignee  && { assignee: state.assignee },
    ...state.creator && { creator: state.creator },
    ...state.mentioned && { mentioned: state.mentioned },
    ...state.page && { page: state.page }
  })
}

// actions
const actions = {
  setPage({ commit }, page) {
    commit('setPage', page)
  },

  setState({ commit }, state) {
    commit('setState', state)
  },

  setMilestone({ commit }, milestone) {
    commit('setMilestone', milestone)
  },

  setLabels({ commit }, labels) {
    commit('setLabels', labels)
  },

  setAssignee({ commit }, assignee) {
    commit('setAssignee', assignee)
  },

  setCreator({ commit }, creator) {
    commit('setCreator', creator)
  },

  setMentioned({ commit }, mentioned) {
    commit('setMentioned', mentioned)
  }
}

// mutations
const mutations = {
  setPage (state, newState) {
    state.page = newState
  },

  setState (state, newState) {
    state.state = newState
  },

  setMilestone (state, newState) {
    state.milestone = newState
  },

  setLabels (state, newState) {
    state.labels = newState
  },

  setAssignee (state, newState) {
    state.assignee = newState
  },

  setCreator (state, newState) {
    state.creator = newState
  },

  setMentioned (state, newState) {
    state.mentioned = newState
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
