<template>
  <q-header elevated class="bg-orange-10">
    <q-toolbar>
      <q-toolbar-title class="nav-bar">Vincit pre-assignment</q-toolbar-title>
    </q-toolbar>

    <q-tabs v-model="$data.activeTab" align="center">
      <q-tab
        name="MainContent"
        label="Main Content"
        @click="$emit('clickedTab', 'MainContent')"
      />
      <q-tab name="About" label="About" @click="$emit('clickedTab', 'About')" />
    </q-tabs>
  </q-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface State {
  activeTab: string;
}

export default defineComponent({
  name: 'Navbar',
  props: {
    selectedTab: {
      type: String,
      required: true
    }
  },
  emits: ['clickedTab'],
  data() {
    return {
      activeTab: this.$props.selectedTab
    } as State;
  }
});
</script>

<style>
.nav-bar {
  text-align: center;
}
</style>
