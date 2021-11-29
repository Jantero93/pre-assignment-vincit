<template>
  <div id="tabs" class="container">
    <div class="tabs">
      <a
        v-on:click="activetab = '1'"
        v-bind:class="{ active: activetab === '1' }"
        >The longest bearish trend</a
      >
      <a
        v-on:click="activetab = '2'"
        v-bind:class="{ active: activetab === '2' }"
        >Highest trading volume</a
      >
      <a
        v-on:click="activetab = '3'"
        v-bind:class="{ active: activetab === '3' }"
        >Time machine
      </a>
    </div>

    <div class="content">
      <LongestDownward v-if="activetab === '1'" class="tabcontent" />
      <HighestTradingVolume v-if="activetab === '2'" class="tabcontent" />
      <TimeMachine v-if="activetab === '3'" class="tabcontent" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import HighestTradingVolume from '../tabs/HighestTradingVolume.vue';
import LongestDownward from '../tabs/LongestDownward.vue';
import TimeMachine from '../tabs/TimeMachine.vue';


interface ComponentState {
  activetab: string;
}

export default defineComponent({
  name: 'MainContent',
  components: {
    HighestTradingVolume,
    LongestDownward,
    TimeMachine
  },
  data() {
    return {
      activetab: '1'
    } as ComponentState;
  }
});
</script>

<style scoped>
.container {
  max-width: 1000px;
  min-width: 600px;
  margin: 3em auto;
  font-size: 1em;
  color: #888;
}

/* Style the tabs */
.tabs {
  overflow: hidden;
  margin-left: 24px;
}

.tabs a {
  float: left;
  cursor: pointer;
  padding: 12px 24px;
  border: 1px solid rgb(99, 99, 99);
  border-right: none;
  background-color: #353535;
  color: #14c28e;

  border-radius: 10px 10px 0 0;
  font-weight: bold;
}

.tabs a:last-child {
  border-right: 1px solid rgb(99, 99, 99);
}

/* Styling for active tab */
.tabs a.active {
  background-color: black;
  cursor: default;
}

/* Style the tab content */
.tabcontent {
  padding: 30px 50px;
  border: 1px solid rgb(99, 99, 99);
  border-radius: 10px;
  background-color: black;
}
</style>
