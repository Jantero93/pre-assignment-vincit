<template>
  <q-header elevated class="bg-primary text-white" height-hint="98">
    <q-toolbar>
      <q-toolbar-title class="nav-bar"> Vincit pre-assignment </q-toolbar-title>
    </q-toolbar>

    <q-tabs align="left">
      <q-route-tab
        label="Main Content"
        @click="$emit('clickedTab', 'MainContent')"
      />
      <q-route-tab
        label="Description"
        @click="$emit('clickedTab', 'Description')"
      />
      <q-route-tab label="About" @click="$emit('clickedTab', 'About')" />
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
  emits: ['clickedTab']
});
</script>

<style>
.nav-bar {
  font-size: 175%;
}
</style>
