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

/** Utils */
import { getHighestTradingVolume } from '../../services/BitcoinService';
import { formatDate } from '../../utils/date';

/** Types */
import { BitcoinVolume } from 'common';

interface State {
  printedResult: string;
}

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
    async handleDateSubmit(startDate: string, endDate: string) {
      const response = (await getHighestTradingVolume(
        startDate,
        endDate
      )) as BitcoinVolume;

      this.$data.printedResult = `Highest trading volume ${response.volume.toFixed(
        2
      )} eur on day ${formatDate('LL', response.time)}`;
    }
  }
});
</script>

<style scoped>
.content {
  color: white;
}
</style>
