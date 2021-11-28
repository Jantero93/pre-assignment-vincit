<template>
  <div>content</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainContent',
  props: {
    selectedTab: {
      type: String,
      required: true
    }
  }
});
</script>

<style></style>
