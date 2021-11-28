<template>
  <div id="app">
    <Navbar
      :selectedTab="this.$data.selectedTab"
      @clickedTab="handleClickedTab"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Navbar from './components/Navbar.vue';

interface ComponentState {
  selectedTab: string;
}

export default defineComponent({
  name: 'App',
  components: {
    Navbar
  },
  data() {
    return {
      selectedTab: 'item1'
    } as ComponentState;
  },
  methods: {
    handleClickedTab(clickedTab: string): void {
      this.$data.selectedTab = clickedTab;
    }
  }
});
</script>

<style>
body {
  margin: 0;
  font-family: 'Courier New', Courier, monospace;
}
</style>
