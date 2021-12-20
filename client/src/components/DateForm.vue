<template>
  <form class="input-form" @submit.prevent="handleSubmit">
    <div class="date-input-row">
      <p>
        <label for="start-date">Starting date</label>
        <input
          id="start-date"
          v-model="$data.startingDate"
          type="date"
          @change="dateChanged"
        />
      </p>

      <p>
        <label for="end-date">Ending date</label>
        <input
          id="end-date"
          v-model="$data.endingDate"
          type="date"
          @change="dateChanged"
        />
      </p>
      <p class="submit-btn">
        <input type="submit" value="Submit" />
      </p>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

/** Utilities */
import { formatDate, isStartBeforeEnd } from '../utils/date';

/** Types */

interface State {
  startingDate: string;
  endingDate: string;
}

export default defineComponent({
  name: 'DateForm',
  emits: ['dateSubmitted'],
  data() {
    return {
      startingDate: formatDate('YYYY-MM-DD'),
      endingDate: formatDate('YYYY-MM-DD')
    } as State;
  },
  methods: {
    async handleSubmit(): Promise<void> {
      if (!isStartBeforeEnd(this.startingDate, this.endingDate)) {
        alert('Invalid input');
        return;
      }

      this.$emit('dateSubmitted', this.startingDate, this.endingDate);
    }
  }
});
</script>

<style scoped>
.input-form {
  color: rgb(100, 100, 100);
}

.date-input-row * {
  padding-right: 1em;
}

.date-input-row {
  display: flex;
  flex-direction: row;
}

.submit-btn {
  margin-top: auto;
}
</style>
