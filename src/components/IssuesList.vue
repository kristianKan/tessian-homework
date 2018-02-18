<template>
  <ul>
    <li v-for="issue in issues" :key="issue.id">
      {{ issue.title }} - {{ issue.number }}
      <br>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    issues: 'allIssues'
  }),

  created () {
    this.$store.dispatch('getIssues', 1)
  }
}
</script>
