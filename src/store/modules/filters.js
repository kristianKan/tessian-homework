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
  setState (state, _state) {
    state.state = _state
  },

  setMilestone (state, _state) {
    state.milestone = _state
  },

  setLabels (state, _state) {
    state.labels = _state
  },

  setAssignee (state, _state) {
    state.assignee = _state
  },

  setCreator (state, _state) {
    state.creator = _state
  },

  setMentioned (state, _state) {
    state.mentioned = _state
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
