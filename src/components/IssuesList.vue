<template>
  <ul>
    <li v-for="issue in issues" :key="issue.id">
      {{ issue.title }}
      <a :href="issue.html_url" >#{{ issue.number }}</a>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    issues: 'allIssues',
    params: 'params'
  }),

  created () {
    this.$store.dispatch('getIssues', this.params)
  }
}
</script>
