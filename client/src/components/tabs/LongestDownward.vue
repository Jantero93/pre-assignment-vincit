<template>
  <div>
    <DateForm @dateSubmitted="handleDateSubmit" />
    <div v-text="printedResult"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

/** Components */
import DateForm from '../DateForm.vue';

/** Utilities */
import { getLongestDownward } from './../../services/BitcoinService';

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
      const result: BitcoinPrice[] = (await getLongestDownward(
        startingDate,
        endingDate
      )) as BitcoinPrice[];

      this.printedResult = !result.length
        ? `No downward trend for inputs from ${startingDate} and to ${endingDate}`
        : `In bitcoin's historical data from CoinGecko, the price decreased ${result.length} days in a row for the inputs from ${startingDate} and to ${endingDate}`;
    }
  }
});
</script>

<style scoped>

</style>
