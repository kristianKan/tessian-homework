<template>
  <div>
    <input placeholder="Milestone" @input="setFilter">
    <input placeholder="State" @input="setFilter">
    <input placeholder="Assignee" @input="setFilter">
    <input placeholder="Creator" @input="setFilter">
    <input placeholder="Mentioned" @input="setFilter">
    <input placeholder="Labels" @input="setFilter">
    <button @click="click">Fetch</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    params: 'params'
  }),

  methods: {
    click() {
      this.$store.dispatch('getIssues', this.params)
    },
    setFilter(e) {
      this.$store.dispatch('set' + e.target.placeholder, e.target.value)
    }
  }
}
</script>

