<template>
  <div>
    <DateForm @dateSubmitted="handleDateSubmit" />
    <div v-text="printedResult"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DateForm from '../DateForm.vue';

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
      printedResult: 'placeholder'
    } as State
  }, methods: {
    handleDateSubmit(startDate: string, endDate: string) {
      console.log(`startDate`, startDate)
      console.log(`endDate`, endDate)
    }
  }
});
</script>

<style scoped>
.content {
  color: white;
}
</style>
