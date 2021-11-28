<template>
  <nav class="navbar">
    <a
      v-bind:class="{ active: selectedTab === 'item1' }"
      @click="tabClicked('item1')"
      >item1</a
    >
    <a
      v-bind:class="{ active: selectedTab === 'item2' }"
      @click="tabClicked('item2')"
      >item2</a
    >
    <a
      v-bind:class="{ active: selectedTab === 'item3' }"
      @click="tabClicked('item3')"
      >item3</a
    >
    <a
      v-bind:class="{ active: selectedTab === 'item4' }"
      @click="tabClicked('item4')"
      >item4</a
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
  background-color: rgb(53, 53, 53);
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
  background-color: black;
}
</style>
