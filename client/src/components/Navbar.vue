<template>
  <q-header elevated class="bg-orange-10">
    <q-toolbar>
      <q-toolbar-title class="nav-bar">Vincit pre-assignment</q-toolbar-title>
    </q-toolbar>

    <q-tabs v-model="activeTabFromProp" align="center">
      <q-tab
        name="MainContent"
        label="Main Content"
        @click="$emit('clickedTab', 'MainContent')"
      />
      <q-tab
        name="Description"
        label="Description"
        @click="$emit('clickedTab', 'Description')"
      />
      <q-tab
        name="About"
        label="About"
        @click="$emit('clickedTab', 'About')"
      />
    </q-tabs>
  </q-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Navbar',
  props: {
    selectedTab: {
      type: String,
      required: true
    }
  },
  emits: ['clickedTab'],
  computed: {
    activeTabFromProp(): string {
      return this.$props.selectedTab;
    }
  }
});
</script>

<style>
.nav-bar {
  text-align: center;
}
</style>
