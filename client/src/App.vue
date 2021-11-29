<template>
  <div id="app">
    <Navbar
      :selectedTab="this.$data.selectedTab"
      @clickedTab="handleClickedTab"
    />
    <MainContent v-if="selectedTab === 'application'" />
    <Description v-if="selectedTab === 'description'" />
    <About v-if="selectedTab === 'about'" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import About from './components/pages/About.vue';
import Description from './components/pages/Description.vue';
import MainContent from './components/pages/MainContent.vue';
import Navbar from './components/Navbar.vue';

interface ComponentState {
  selectedTab: string;
}

export default defineComponent({
  name: 'App',
  components: {
    About,
    Description,
    MainContent,
    Navbar,
  },
  data() {
    return {
      selectedTab: 'application'
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
  padding-top: 56px;
  margin: 0;
  font-family: 'Courier New', Courier, monospace;
  background-color: rgb(29, 29, 29)
}
</style>
