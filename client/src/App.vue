<template>
  <div id="app">
    <Navbar
      :selectedTab="this.$data.selectedTab"
      @clickedTab="handleClickedTab"
    />
    <MainContent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Navbar from './components/Navbar.vue';
import MainContent from './components/MainContent.vue';

interface ComponentState {
  selectedTab: string;
}

export default defineComponent({
  name: 'App',
  components: {
    MainContent,
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
