<template>
  <div class="q-pa-md">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      control-color="primary"
      class="rounded-borders"
    >
      <q-carousel-slide name="client" class="column no-wrap flex-center">
       <CarouselClient />
      </q-carousel-slide>
      <q-carousel-slide name="server" class="column no-wrap flex-center">
       <CarouselServer />
      </q-carousel-slide>
      <q-carousel-slide name="other" class="column no-wrap flex-center">
        <CarouselMisc />
      </q-carousel-slide>

    </q-carousel>

    <div class="row justify-center">
      <q-btn-toggle
        v-model="slide"
        glossy
        :options="[
          { label: 1, value: 'client' },
          { label: 2, value: 'server' },
          { label: 3, value: 'other' },
        ]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import CarouselClient from './aboutCarouselItems/CarouselClient.vue'
import CarouselMisc from './aboutCarouselItems/CarouselMisc.vue'
import CarouselServer from './aboutCarouselItems/CarouselServer.vue'

export default defineComponent({
  name: 'About',
  components: {
    CarouselClient,
    CarouselMisc,
    CarouselServer
  },
   setup () {
    return {
      slide: ref('client'),
      lorem: 'kaka, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo provident incidunt ducimus iusto perferendis porro earum. Totam, numquam?'
    }
  }
});
</script>

<style scoped>
.content {
  margin: 3em auto;
  width: 100%;
}
</style>
