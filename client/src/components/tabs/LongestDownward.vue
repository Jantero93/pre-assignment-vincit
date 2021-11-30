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
      {{ 'Longest bearish trend was 5 days between 01.01.2020 - 02.02.2020' }}
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface ComponentState {
  startingDate: string;
  endingDate: string;
  result?: string;
}

export default defineComponent({
  name: 'LongestDownward',
  data() {
    return {
      startingDate: new Date().toISOString().substr(0, 10),
      endingDate: new Date().toISOString().substr(0, 10)
    } as ComponentState;
  },
  methods: {
    dateChanged(e: Event): void {
      const target: HTMLInputElement = e.target as HTMLInputElement;

      target.id === 'start-date'
        ? (this.$data.startingDate = target.value)
        : (this.$data.endingDate = target.value);
    },
    handleSubmit(): void {
      console.log('submit');
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
