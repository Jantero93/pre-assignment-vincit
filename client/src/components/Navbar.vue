<template>
  <nav class="navbar">
    <a
      :class="{ active: selectedTab === 'MainContent' }"
      @click="$emit('clickedTab', 'MainContent')"
      >Application</a
    >
    <a
      :class="{ active: selectedTab === 'Description' }"
      @click="$emit('clickedTab', 'Description')"
      >Description</a
    >
    <a
      :class="{ active: selectedTab === 'About' }"
      @click="$emit('clickedTab', 'About')"
      >About me</a
    >
  </nav>
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
.navbar {
  background-color: #353535;
  overflow: hidden;
  position: fixed;
  top: 0px;
  width: 100%;
  height: 56px;
}

.navbar a {
  cursor: pointer;
  color: #14c28e;
  display: block;
  float: left;
  font-size: 18px;
  padding: 1em 1em;
  text-align: center;
}

.navbar a:hover {
  color: white;
}

.navbar a.active {
  background-color: #000000;
}
</style>
