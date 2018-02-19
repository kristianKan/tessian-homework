<template>
  <div id="app">
    <h2>Filters</h2>
    <Filters/>
    <h2>Issues</h2>
    <IssuesList/>
    <hr>
  </div>
</template>

<script>
import Filters from './components/Filter.vue'
import IssuesList from './components/IssuesList.vue'
export default {
  components: { IssuesList, Filters }
}
</script>
