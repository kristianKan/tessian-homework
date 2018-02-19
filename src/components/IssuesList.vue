<template>
  <div class="md-layout-item md-size-75">
    <md-list class="md-dense">
      <div class="md-title">Issues</div>
      <md-list-item v-for="issue in issues" :key="issue.id">
          {{ issue.title }}
          <a :href="issue.html_url" >#{{ issue.number }}</a>
      </md-list-item>
    </md-list>
  </div>
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
