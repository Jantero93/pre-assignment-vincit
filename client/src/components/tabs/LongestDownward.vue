<template>
  <div class="longest-downward">
    <DateForm @dateSubmitted="handleDateSubmit" />
    <div class="result-text" v-text="printedResult"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

/** Components */
import DateForm from '../DateForm.vue';

/** Utilities */
import { getLongestDownward } from './../../services/BitcoinService';
import { formatDate } from './../../utils/date';

/** Types */
import { BitcoinPrice } from 'common';

interface State {
  printedResult: string;
}

export default defineComponent({
  name: 'LongestDownward',
  components: {
    DateForm
  },
  data() {
    return {
      printedResult: ''
    } as State;
  },
  methods: {
    async handleDateSubmit(startingDate: string, endingDate: string) {
      const result: BitcoinPrice[] = await getLongestDownward(
        startingDate,
        endingDate
      );

      this.printedResult = !result.length
        ? `No downward trend for inputs from ${startingDate} and to ${endingDate}`
        : `In bitcoin's historical data from CoinGecko, the price decreased ${
            result.length
          } days in a row for the inputs from ${startingDate} and to ${endingDate}. Trend was from ${formatDate(
            'MMMM DD',
            result[0].time
          )} to ${formatDate('MMMM DD', result[result.length - 1].time)}`;
    }
  }
});
</script>

<style>
.result-text {
  overflow-wrap: break-word;
}
</style>
