<template>
  <div id="q-app" style="min-height: 100vh">
    <div class="q-pa-md">
      <div class="q-gutter-y-md" style="max-width: 600px">
        <q-card>
          <q-tabs
            v-model="tab"
            dense
            class="bg-grey-3"
            align="justify"
            narrow-indicator
          >
            <q-tab
              label="Longest Downward Trend"
              @click="activetab = 'LongestDownward'"
            ></q-tab>
            <q-tab
              label="Highest Trading Volume"
              @click="activetab = 'HighestTradingVolume'"
            ></q-tab>
            <q-tab
              label="Time Machine"
              @click="activetab = 'TimeMachine'"
            ></q-tab>
          </q-tabs>
          <q-tab-panels v-model="selectedTab" animated>
            <q-tab-panel name="mails">
              <div class="text-h6">Mails</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="alarms">
              <div class="text-h6">Alarms</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="movies">
              <div class="text-h6">Movies</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>
          </q-tab-panels>

          <Component :is="$data.activetab" class="tabcontent" />
        </q-card>
      </div>
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
}
</style>
