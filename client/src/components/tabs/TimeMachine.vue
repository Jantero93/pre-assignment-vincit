<template>
  <div>
    <DateForm @dateSubmitted="handleDateSubmit" />
    <div>{{ 'Time Machine' }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DateForm from '../DateForm.vue';

export default defineComponent({
  name: 'TimeMachine'
});
</script>

<style scoped>
.content {
  color: white;
}
</style>
