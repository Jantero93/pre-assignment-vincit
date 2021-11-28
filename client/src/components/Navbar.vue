<template>
  <nav class="navbar">
    <a
      v-bind:class="{ active: selectedTab === 'application' }"
      @click="tabClicked('application')"
      >Application</a
    >
    <a
      v-bind:class="{ active: selectedTab === 'description' }"
      @click="tabClicked('description')"
      >Description</a
    >
    <a
      v-bind:class="{ active: selectedTab === 'about' }"
      @click="tabClicked('about')"
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
  methods: {
    tabClicked(tabName: string): void {
      this.$emit('clickedTab', tabName);
    }
  }
});
</script>

<style>
.navbar {
  background-color: #353535;
  overflow: hidden;
  position: fixed;
  top: 0px;
  width: 100%;
}

.navbar a {
  float: left;
  display: block;
  color: #14c28e;
  text-align: center;
  padding: 1em 1em;
  font-size: 18px;
}

.navbar a:hover {
  color: white;
}

.navbar a.active {
  background-color: #000000;
}
</style>
