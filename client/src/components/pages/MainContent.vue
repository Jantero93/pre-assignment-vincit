<template>
  <div id="tabs" class="container">
    <div class="tabs">
      <a
        :class="{ active: activetab === 'LongestDownward' }"
        @click="activetab = 'LongestDownward'"
        >The longest bearish trend</a
      >
      <a
        :class="{ active: activetab === 'HighestTradingVolume' }"
        @click="activetab = 'HighestTradingVolume'"
        >Highest trading volume</a
      >
      <a
        :class="{ active: activetab === 'TimeMachine' }"
        @click="activetab = 'TimeMachine'"
        >Time machine
      </a>
    </div>

    <Component :is="$data.activetab" class="tabcontent" />
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
      activetab: 'LongestDownward'
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
