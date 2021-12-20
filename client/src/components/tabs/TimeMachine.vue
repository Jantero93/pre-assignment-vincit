<template>
  <div>
    <DateForm @dateSubmitted="handleDateSubmit" />
    <div v-text="printedResult" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

/** Components */
import DateForm from '../DateForm.vue';

/** Services */
import { getTimeMachine } from '../../services/BitcoinService';

/** Utils */
import { formatDate } from '../../utils/date';

/** Types */
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

      this.printedResult = response.length
        ? `Best day to buy is ${formatDate(
            'LL',
            response[0].time
          )} when price is ${response[0].price.toFixed(
            2
          )} eur. Best day to sell is ${formatDate(
            'LL',
            response[1].time
          )} when price is ${response[1].price.toFixed(2)} eur`
        : 'Price on decreased only on date range or only one day picked';
    }
  }
});
</script>

<style scoped>
.content {
  color: white;
}
</style>
