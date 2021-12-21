<template>
  <form class="input-form" @submit.prevent="handleSubmit">
    <div class="row justify-start">
      <div class="column" style="margin-right: 1em">
        <label for="start-date">Starting date</label>
        <input
          id="start-date"
          v-model="$data.startingDate"
          type="date"
          @change="dateChanged"
        />
      </div>

      <div class="column" style="margin-right: 1em">
        <label for="end-date">Ending date</label>
        <input
          id="end-date"
          v-model="$data.endingDate"
          type="date"
          @change="dateChanged"
        />
      </div>
      <div class="button-wrapper">
        <button type="submit" value="Submit" class="submit-button">
          Submit
        </button>
      </div>
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
  align-items: center;
  display: flex;
}

.submit-button {
  margin-top: 1em;
}

.button-wrapper {
  display: flex;
  align-items: flex-end;
}
</style>
