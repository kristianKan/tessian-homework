<template>
  <div id="app">
    <div class="md-layout md-gutter md-alignment-top-center">
      <Filters/>
      <IssuesList/>
    </div>
  </div>
</template>

<style scoped>
#app {
  padding: 20px;
}
</style>

<script>
import Filters from './components/Filter.vue'
import IssuesList from './components/IssuesList.vue'

export default {
  components: { IssuesList, Filters }
}
</script>
