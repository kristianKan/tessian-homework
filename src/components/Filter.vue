<template>
  <div class="md-layout-item md-size-25">
    <md-card class="md-layout-item">
      <md-card-header>
        <div class="md-title">Filters</div>
      </md-card-header>
      <md-card-content>
        <md-field>
          <label for="State">State</label>
          <md-input name="State"
            :value="$store.state.filters.state"
            @input="setFilter('State')">
          </md-input>
        </md-field>
        <md-field>
          <label for="Milestone">Milestone</label>
          <md-input name="Milestone"
            :value="$store.state.filters.milestone"
            @input="setFilter('Milestone')">
          </md-input>
        </md-field>
        <md-field>
          <label for="Assignee">Assignee</label>
          <md-input name="Assignee"
            :value="$store.state.filters.assignee"
            @input="setFilter('Assignee')">
          </md-input>
        </md-field>
        <md-field>
          <label for="Creator">Creator</label>
          <md-input name="Creator" @input="setFilter('Creator')"></md-input>
        </md-field>
        <md-field>
          <label for="Mentioned">Mentioned</label>
          <md-input name="Mentioned" @input="setFilter('Mentioned')"></md-input>
        </md-field>
        <md-field>
          <label for="Labels">Labels</label>
          <md-input name="Labels" @input="setFilter('Labels')"></md-input>
        </md-field>
        <button class="md-button md-raised" @click="click">Apply</button>
      </md-card-content>
    </md-card>
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

    setFilter(type) {
      if (event.type !== 'input') return
      this.$store.dispatch('set' + type, event.target.value)
    }
  }
}
</script>
