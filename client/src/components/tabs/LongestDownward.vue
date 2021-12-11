<template>
  <form class="input-form" @submit.prevent="handleSubmit">
    <div class="date-input-row">
      <p>
        <label for="start-date">Starting date</label>
        <input
          id="start-date"
          v-model="startingDate"
          type="date"
          @change="dateChanged"
        />
      </p>

      <p>
        <label for="end-date">Ending date</label>
        <input
          id="end-date"
          v-model="endingDate"
          type="date"
          @change="dateChanged"
        />
      </p>
      <p class="second-row">
        <input type="submit" value="Submit" />
      </p>
    </div>
    <div>
      {{ resultMessage }}
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

/** Utilities */
import { getLongestDownward } from './../../services/BitcoinService';
import { formatDate, isStartBeforeEnd } from '../../utils/date';

/** Types */
import { BitcoinPrice } from 'common';

interface State {
  startingDate: string;
  endingDate: string;
  result?: BitcoinPrice[];
}

export default defineComponent({
  name: 'LongestDownward',
  data() {
    return {
      startingDate: formatDate('YYYY-MM-DD'),
      endingDate: formatDate('YYYY-MM-DD'),
      result: undefined
    } as State;
  },
  computed: {
    resultMessage(): string {
      return !this.result
        ? ''
        : !this.result.length
        ? `No downward trend for inputs from ${this.startingDate} and to ${this.endingDate}`
        : `In bitcoin's historical data from CoinGecko, the price decreased ${this.result.length} days in a row for the inputs from ${this.startingDate} and to ${this.endingDate}`;
    }
  },
  methods: {
    dateChanged(e: Event): void {
      const dateInput: HTMLInputElement = e.target as HTMLInputElement;

      dateInput.id === 'start-date'
        ? (this.startingDate = dateInput.value)
        : (this.endingDate = dateInput.value);
    },
    async handleSubmit(): Promise<void> {
      if (!isStartBeforeEnd(this.startingDate, this.endingDate)) {
        alert('Invalid date input');
        return;
      }

      this.result = (await getLongestDownward(
        this.startingDate,
        this.endingDate
      )) as BitcoinPrice[];
    }
  }
});
</script>

<style scoped>
.input-form {
  color: rgb(167, 167, 167);
}

.date-input-row * {
  padding-right: 1em;
}

.date-input-row {
  display: flex;
  flex-direction: row;
}
</style>
