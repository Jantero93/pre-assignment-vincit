<template>
  <div id="q-app">
    <q-layout view="hHh lpR fFf" style="min-height: inherit">
      <Navbar
        :selected-tab="$data.selectedTab"
        @clickedTab="handleClickedTab"
      />

      <q-page-container>
        <q-page style="min-height: inherit">
          <Component :is="selectedTab" />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import About from './components/pages/About.vue';
import MainContent from './components/pages/MainContent.vue';
import Navbar from './components/Navbar.vue';

interface State {
  selectedTab: string;
}

export default defineComponent({
  name: 'App',
  components: {
    About,
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
}
</style>
