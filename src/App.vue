<template>
  <div id="app">
    <h2>Issues</h2>
    <IssuesList/>
    <hr>
  </div>
</template>

<script>
import IssuesList from './components/IssuesList.vue'
export default {
  components: { IssuesList }
}
</script>
