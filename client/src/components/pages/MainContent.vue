<template>
  <div class="row justify-center">
    <q-card bordered class="card-container">
      <q-tabs v-model="activetab" class="bg-grey-4" align="justify">
        <q-tab
          name="LongestDownward"
          label="Longest Downward Trend"
          @click="activetab = 'LongestDownward'"
        />
        <q-tab
          name="HighestTradingVolume"
          label="Highest Trading Volume"
          @click="activetab = 'HighestTradingVolume'"
        />
        <q-tab
          name="TimeMachine"
          label="Time Machine"
          @click="activetab = 'TimeMachine'"
        />
      </q-tabs>

      <Component :is="$data.activetab" class="tabcontent" />
    </q-card>
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
.tabcontent {
  padding: 2em 3em;
  overflow: hidden;
}

.card-container {
  max-width: 600px;
}
</style>
