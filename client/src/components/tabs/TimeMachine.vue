<template>
  <div>
    <DateForm @dateSubmitted="handleDateSubmit" />
    <div v-text="printedResult" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import DateForm from '../DateForm.vue';

import { getTimeMachine } from '../../services/BitcoinService';
import { formatDate } from '../../utils/date';
import { BitcoinPrice } from 'common';

interface State {
  printedResult: string;
}

export default defineComponent({
  name: 'TimeMachine',
  components: {
    DateForm
  },
  data() {
    return {
      printedResult: ''
    } as State;
  },
  methods: {
    async handleDateSubmit(startDate: string, endDate: string) {
      const response: BitcoinPrice[] = (await getTimeMachine(
        startDate,
        endDate
      )) as BitcoinPrice[];

      this.printedResult = !response.length
        ? 'Price only decreases on selected date range'
        : `Best day to buy is ${formatDate(
            'YYYY/MM/DD',
            response[0].time
          )} when price is ${
            response[0].price
          } eur\nBest day to sell is ${formatDate('YYYY/MM/DD', response[1].time)} when price is ${response[1].price} eur`;
    }
  }
});
</script>

<style scoped>
.content {
  color: white;
}
</style>
