<template>
  <div class="md-layout-item md-size-75">
    <md-list class="md-dense">
      <div class="md-title">Issues</div>
      <md-list-item v-for="issue in issues" :key="issue.id">
          {{ issue.title }}
          <a :href="issue.html_url" >#{{ issue.number }}</a>
      </md-list-item>
    </md-list>
	<pagination :records="issuesCount"
      :per-page="pageSize"
      @paginate="setPage">
	</pagination>
  </div>
</template>

<style>
.pagination {
  list-style-type: none;
  text-align: center;
}

.page-item {
  float: left;
}

.page-item a {
  display: block;
  text-align: center;
  padding: 12px;
  text-decoration: none;
}

.VuePagination__count {
  visibility: hidden;
}
</style>

<script>
import { mapGetters } from 'vuex'
import {Pagination} from 'vue-pagination-2'

export default {
  components: { Pagination },

  computed: mapGetters({
    params: 'params',
    issues: 'issues',
    issuesCount: 'issuesCount',
    pageSize: 'pageSize'
  }),

  methods: {
    setPage(page) {
      this.$store.dispatch('setPage', page)
      this.$store.dispatch('getIssues', this.params)
    },
  },

  created () {
    this.$store.dispatch('getIssues', this.params)
  }
}
</script>
