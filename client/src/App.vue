<template>
  <q-layout view="hHh lpR fFf">
    <Navbar :selected-tab="$data.selectedTab" @clickedTab="handleClickedTab" />

    <q-page-container>
      <q-page>
        <Component :is="selectedTab" />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import About from './components/pages/About.vue';
import Description from './components/pages/Description.vue';
import MainContent from './components/pages/MainContent.vue';
import Navbar from './components/Navbar.vue';

interface State {
  selectedTab: string;
}

export default defineComponent({
  name: 'App',
  components: {
    About,
    Description,
    MainContent,
    Navbar
  },
  data() {
    return {
      selectedTab: 'MainContent'
    } as State;
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
  padding-top: 3em;
  margin: 0;
  overflow: hidden;
}
</style>
