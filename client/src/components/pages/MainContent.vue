<template>
  <div class="row justify-center">
    <q-card bordered class="card-container" flat>
      <q-tabs v-model="activeTab" class="bg-grey-4" align="justify">
        <q-tab
          v-if="$q.screen.gt.xs"
          name="LongestDownward"
          label="Longest Downward Trend"
          @click="activeTab = 'LongestDownward'"
        />
        <q-tab
          v-if="$q.screen.gt.xs"
          name="HighestTradingVolume"
          label="Highest Trading Volume"
          @click="activeTab = 'HighestTradingVolume'"
        />
        <q-tab
          v-if="$q.screen.gt.xs"
          name="TimeMachine"
          label="Time Machine"
          @click="activeTab = 'TimeMachine'"
        />

        <q-btn-dropdown
          v-if="$q.screen.lt.sm"
          fab
          auto-close
          stretch
          flat
          :label="formattedActiveTab"

        >
          <q-list>
            <q-item clickable @click="activeTab = 'LongestDownward'">
              <q-item-section>Longest Downward Trend</q-item-section>
            </q-item>

            <q-item clickable @click="activeTab = 'HighestTradingVolume'">
              <q-item-section>Highest Trading Volume</q-item-section>
            </q-item>

            <q-item clickable @click="activeTab = 'TimeMachine'">
              <q-item-section>Time Machine</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-tabs>

      <Component :is="$data.activeTab" class="tabcontent" />
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import HighestTradingVolume from '../tabs/HighestTradingVolume.vue';
import LongestDownward from '../tabs/LongestDownward.vue';
import TimeMachine from '../tabs/TimeMachine.vue';

interface ComponentState {
  activeTab: string;
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
      activeTab: 'LongestDownward'
    } as ComponentState;
  },
  computed: {
    formattedActiveTab(): string {
      return this.activeTab === 'LongestDownward'
        ? 'Longest Downward Trend'
        : this.activeTab === 'HighestTradingVolume'
        ? 'Highest Trading Volume'
        : this.activeTab === 'TimeMachine'
        ? 'Time Machine'
        : '';
    }
  }
});
</script>

<style scoped>
.tabcontent {
  padding: 2em 3em;
}

.card-container {
  max-width: 600px;
}
</style>
