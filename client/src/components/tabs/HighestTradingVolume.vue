<template>
    <div>
    <DateForm @dateSubmitted="handleDateSubmit" />
    <div>{{ printedResult }}</div>
  </div>
</template>

<script lang="ts">

interface State {
  printedResult: string
}

import { defineComponent } from 'vue';

import DateForm from '../DateForm.vue'

import {getHighestTradingVolume} from '../../services/BitcoinService';

export default defineComponent({
  name: 'HighestTradingVolume',
  components: {
    DateForm
  },
  data() {
    return {
      printedResult: ''
    } as State;
  },
  methods: {
    handleDateSubmit(startDate: string, endDate: string) {
      console.log(`startDate`, startDate)
      console.log(`endDate`, endDate)
      console.log('form front')
      getHighestTradingVolume(startDate, endDate)
      
    }
  }
});
</script>

<style scoped>
.content {
  color: white;
}
</style>
